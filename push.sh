#!/bin/sh

# Copyright (c) 2014 Janne Lehikoinen
#
# auto-git-push.sh

# Push local git repo to remote origin master branch

###

### Parameter vars
GIT_FOLDER=$1

### Vars
SCRIPT_NAME=`basename "${0}"`

# Colors
c_green="\x1b[32m"
c_yellow="\x1b[33m"
c_red="\x1b[31m"
c_blue="\x1b[34m"
c_end="\x1b[0m"
###

# Function
AUTO_GIT ()
{
	# Add all files
	/usr/bin/git -C "$GIT_FOLDER" add --all

	# Commit all
	/usr/bin/git -C "$GIT_FOLDER" commit -m "[Auto commit from $(hostname)]"

	# Push to git repo
	/usr/bin/git -C "$GIT_FOLDER" push

	if [[ $? -eq 0 ]]; then
		MSG_INFO "Changes pushed successfully to the remote git repo!"
	else
		MSG_ERROR "Oops! Something wen't wrong.. Run 'git pull' first?"
	fi
}

USAGE ()
{
	echo "${c_yellow}-- USAGE:${c_end} sh $SCRIPT_NAME ${c_blue}<Working Directory>${c_end}"
}

MSG_INFO ()
{
	echo "${c_green}-- INFO: $1${c_end}"
}

MSG_ERROR ()
{
	echo "${c_red}-- ERROR: $1${c_end}"
}

### Main

# Check if target folder exists
if [ "$GIT_FOLDER" == "" ]; then
	MSG_ERROR "Target folder is missing!"
	USAGE
else
	if [ -d "$GIT_FOLDER" ]; then
		MSG_INFO "Pushing changes to central git repo.."
		AUTO_GIT
	else
		MSG_ERROR "[ "$GIT_FOLDER" ] doesn't exist or is not a folder!"
		USAGE
	fi
fi

### end Main

exit 0