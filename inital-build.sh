#!/bin/bash
#Requisite node => 10.15.0 npm => 3.10.10 react => 2.1.3
#pass in the repo, username  password
#Validation
if [ -z ${1+x} ]; 
	then 
		echo "Github Repository name is unset";
		exit 0; 
fi
if [ -z ${2+x} ]; 
	then 
		echo "Github username is unset";
		exit 0;
fi
read -s -p "GitHub Password: " github_password
#Check if repo was created on github
checkRepo=$(git ls-remote https://$2:$github_password@github.com/$2/$1.git 2>&1)
if [[ $checkRepo ==  *"Repository not found"* ]]; 
	then
		echo
    	echo "Repo doesn't exist";
    	exit 0;
else
	echo
    echo "Repo exist on github";
fi
cd ..
#React app will have the same name as repo for simplicity
create-react-app $1
cd $1
npm install gh-pages --save-dev
gsed -i '5i\  "homepage": "http://'"$2"'.github.io/'"$1"'",' ./package.json
gsed -i '15i\    "predeploy": "npm run build",' ./package.json
gsed -i '16i\    "deploy": "gh-pages -d build",' ./package.json
git init
git remote add origin https://$2:$github_password@github.com/$2/$1.git
#In case the build failed for some reason previously
rm -rf node_modules/gh-pages/.cache
npm run deploy
cd ..
mv $1 react-projects/
exit
