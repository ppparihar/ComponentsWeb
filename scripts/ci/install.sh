# Install all npm dependencies 
travisFoldStart "npm-install"
  npm install
travisFoldEnd "npm-install"

# Install bower packages
travisFoldStart "bower-install"
  bower install
travisFoldEnd "bower-install"