# to run this script the first time use sudo chmod +x build_deploy.sh
conda activate jupyterbook
jupyter-book build .
ghp-import -n -p -f _build/html

# note that the files generated during the build 
# need to be pushed to github manually afterwards