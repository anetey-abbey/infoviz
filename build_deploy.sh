# to run this script the first time use sudo chmod +x build_deploy.sh
# Specific command for Pascal 
# cd /Users/pascalmathas/Documents/UvA/Kunstmatige_Intelligentie/2022-2023/Informatievisualisatie/GIT/infoviz && conda activate jupyterbook
conda activate jupyterbook
jupyter-book build .
ghp-import -n -p -f _build/html

# note that the files generated during the build 
# need to be pushed to github manually afterwards
