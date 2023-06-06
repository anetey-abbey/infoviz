# to run this script the first time use sudo chmod +x build_deploy.sh
conda activate jupyterbook
jupyter-book build .
ghp-import -n -p -f _build/html