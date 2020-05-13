#!/bin/bash

## ----------------------------------------------------------------------------
## Snilles automatic module clone and install script for MM2.
## ----------------------------------------------------------------------------

## Don't forget to add your public SSH key to your GIT profile!
## If you don't, nothing will be cloned!

## If you don't have an SSH key. This is how you get one.
## Generate SSH key(s).
# cd ~
# ssh-keygen -t rsa

## Press: Enter, Enter, Enter...

## See the public Key...
# cat ~/.ssh/id_rsa.pub

## Copy the SSH public key and add it to you GIT SSH keys.

## ----------------------------------------------------------------------------
## Config below.
## ----------------------------------------------------------------------------

## The module install directory.
Moddir='modules/'

## Package file
Packfile='package.json'

## All the modules repos from Git.
Repos[1]='https://github.com/GaryLChew/MMM-1-Second-A-Day.git'
Repos[2]='https://github.com/eouia/MMM-AVStock.git'
Repos[3]='https://github.com/eouia/MMM-CalendarExt2.git'
Repos[5]='https://github.com/GaryLChew/MMM-OnScreenMenu.git'
Repos[6]='https://github.com/cbrooker/MMM-Todoist.git'

## ----------------------------------------------------------------------------

## Start!
cd "$Moddir"
for t in "${Repos[@]}"
	do
		git clone $t
		#echo "Cloning $t"
done

echo "Cloning Done."
echo "Now npm installing..."

for f in *;
	do
		if [[ -d $f ]]; then
			installmodule=$(basename $f)
			[[ $installmodule =~ ^(default|node_modules)$ ]] && continue
			cd "$installmodule"
			if [ -e "$Packfile" ]; then
#				npm install --production
				npm install
			fi
			cd ".."
		fi
	done

echo "All done."
echo "Now you have to add all the modules to your config (or copy your old one) and don't forget your custom.css file."
Enjoy! 🙂