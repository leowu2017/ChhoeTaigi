cd /home/website/ChhoeTaigiWebsite/
meteor npm install bcrypt
meteor npm install
sudo rm -r /home/website/new_package
sudo npm install --production
meteor build /home/website/new_package --server-only
sudo chown -R root:dev /home/website/new_package
sudo chmod 770 -R /home/website/new_package
cd /home/website/ChhoeTaigiWebsite/DeployTools
