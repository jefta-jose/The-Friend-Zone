Here are some essential Bash commands and techniques to improve your terminal workflow:

### 1. **Navigation and File Management**

- **`cd`**: Change directory
  ```bash
  cd /path/to/directory     # Move to a directory
  cd ..                     # Move up one directory
  cd -                      # Go back to the last directory
  ```

- **`ls`**: List directory contents
  ```bash
  ls                         # List files in the current directory
  ls -la                      # List files with details, including hidden files
  ```

- **`mkdir`**: Create a directory
  ```bash
  mkdir new_directory         # Create a new directory
  ```

- **`touch`**: Create a new file
  ```bash
  touch filename.txt          # Create an empty file
  ```

- **`rm`**: Remove a file or directory
  ```bash
  rm filename.txt             # Delete a file
  rm -r directory_name        # Delete a directory and its contents
  ```

### 2. **File Search and Text Processing**

- **`grep`**: Search for a pattern in files
  ```bash
  grep "pattern" file.txt     # Search for a word or pattern in a file
  grep -r "pattern" .         # Recursively search in a directory
  ```

- **`find`**: Find files and directories
  ```bash
  find . -name "*.js"         # Find all .js files in the current directory and subdirectories
  find /path -type f -size +1M  # Find files larger than 1MB
  ```

- **`cat`**: Display file contents
  ```bash
  cat file.txt                # Print file contents to the terminal
  ```

- **`head`/`tail`**: View the start/end of a file
  ```bash
  head file.txt               # View the first 10 lines of a file
  tail file.txt               # View the last 10 lines of a file
  tail -f log.txt             # View new log file entries in real-time
  ```

### 3. **File and Directory Compression**

- **`tar`**: Archive multiple files into a tarball
  ```bash
  tar -czvf archive.tar.gz /path/to/directory   # Compress a directory into a .tar.gz file
  tar -xzvf archive.tar.gz                      # Extract a .tar.gz file
  ```

- **`zip`/`unzip`**: Compress and extract zip files
  ```bash
  zip -r archive.zip /path/to/directory         # Create a zip archive
  unzip archive.zip                             # Extract a zip archive
  ```

### 4. **System Monitoring and Resource Management**

- **`top`**: View real-time system processes
  ```bash
  top                          # Monitor CPU/memory usage and processes
  ```

- **`htop`**: Enhanced version of `top` (install with `sudo apt install htop` on Linux)
  ```bash
  htop                         # Better visualization of system processes
  ```

- **`df`**: Check disk space
  ```bash
  df -h                        # Display disk usage in human-readable format
  ```

- **`du`**: Check directory size
  ```bash
  du -sh /path/to/directory     # Get the size of a directory
  ```

### 5. **Version Control (Git)**

- **`git status`**: Check the status of your git repository
  ```bash
  git status                   # View changes and current branch
  ```

- **`git add`**: Stage files for commit
  ```bash
  git add .                    # Stage all changes
  ```

- **`git commit`**: Commit staged changes
  ```bash
  git commit -m "Your message" # Commit with a message
  ```

- **`git log`**: View the git history
  ```bash
  git log --oneline            # View a concise git commit history
  ```

### 6. **Bash Shortcuts**

- **`Ctrl + R`**: Reverse search for a previously used command. Start typing and it will match commands from history.
  
- **`!!`**: Repeat the last command
  ```bash
  sudo !!                      # Re-run the last command with sudo
  ```

- **`Ctrl + A`**: Move the cursor to the beginning of the line.

- **`Ctrl + E`**: Move the cursor to the end of the line.

- **`Ctrl + U`**: Delete everything from the cursor to the beginning of the line.

- **`Ctrl + K`**: Delete everything from the cursor to the end of the line.

### 7. **Pipes and Redirection**

- **Redirect output to a file**:
  ```bash
  echo "Hello" > file.txt      # Write output to a file
  cat file.txt >> another.txt  # Append output to a file
  ```

- **Pipes (`|`)**: Send the output of one command to another
  ```bash
  ls -l | grep "filename"      # Search for a file in the output of ls
  ```

### 8. **Background and Job Control**

- **`&`**: Run a command in the background
  ```bash
  long_running_command &       # Run the command in the background
  ```

- **`jobs`**: List background jobs
  ```bash
  jobs                         # View all running background jobs
  ```

- **`fg`**: Bring a job to the foreground
  ```bash
  fg %1                        # Bring job 1 to the foreground
  ```

### 9. **Bash Aliases**

Create custom shortcuts for frequently used commands:
- **Define aliases**:
  ```bash
  alias gs="git status"        # Create an alias for git status
  alias ll="ls -la"            # Alias for detailed list with hidden files
  ```

- **Make aliases persistent** by adding them to your `~/.bashrc` or `~/.zshrc` file:
  ```bash
  echo 'alias gs="git status"' >> ~/.bashrc
  source ~/.bashrc             # Reload the shell to apply changes
  ```

### 10. **File Permissions**

- **`chmod`**: Change file permissions
  ```bash
  chmod +x script.sh           # Make a script executable
  chmod 755 file.txt           # Set specific permissions for a file
  ```