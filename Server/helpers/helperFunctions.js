import { poolRequest } from "../utils/config.js";
import sql from 'mssql';
import bcrypt from 'bcrypt';

export const paginate = (data, req, res) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    if (endIndex < data.length) {
        results.next = {
            page: page + 1,
            limit: limit,
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    }
    results.results = data.slice(startIndex, endIndex);
    res.status(200).json(results);
};
export const orderData = (data, order) => {
    if (order === "asc") {
        return data.sort((a, b) => a.id - b.id);
    } else if (order === "desc") {
        return data.sort((a, b) => b.id - a.id);
    }
};

export const checkIfValuesIsEmptyNullUndefined = (req, res, obj) => {
    for (let key in obj) {
        if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
            return false;
        }
    }
    return true;
};

//helper funtion to insert data into our database

export const insertData = async (tableName, data, schema) => {
    // Dynamically build column names and values
    const columns = Object.keys(data)
        .map((column) => `[${column}]`)
        .join(", ");
    const values = Object.keys(data)
        .map((column) => `@${column}`)
        .join(", ");

    const insertQuery = `
        INSERT INTO ${tableName} (${columns})
        VALUES (${values});
    `;

    // Prepare the SQL request
    const request = poolRequest();

    // Loop through each property in the data object
    Object.keys(data).forEach(
        //callback function
        (key) => {
        const type = schema[key];
        if (type) {
            request.input(key, type, data[key]);
        } else {
            throw new Error(`No type defined for column: ${key}`);
        }
    }
);

    return await request.query(insertQuery);
};


// Helper to check if email exists
export const checkEmailExists = async (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the valid format
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
    }

    const emailCheckQuery = `
        SELECT COUNT(*) AS count
        FROM FriendZoneUsers
        WHERE Email = @Email
    `;

    const result = await poolRequest()
        .input('Email', sql.VarChar(255), email)
        .query(emailCheckQuery);

    return result.recordset[0].count > 0;
};


//helper function to hash a password
export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

// helper Function to validate the data against the schema
export const validateDataAgainstSchema = (schema, data) => {
    
    const schemaKeys = Object.keys(schema);
    const dataKeys = Object.keys(data);

    const extraKeys = dataKeys.filter(key => !schemaKeys.includes(key));
    const missingKeys = schemaKeys.filter(key => !dataKeys.includes(key));

    if (extraKeys.length > 0 || missingKeys.length > 0 ) {
        throw new Error("invalid fields")
    }

    return true;
};
