# emptyset-jekyll

## Requirements

- [Bundler](http://bundler.io)
- [Jekyll](http://jekyllrb.com/)

## Setup

```sh
  # clone the repo in directory named my-project
  $ git clone git@github.com:jasonadkison/emptyset-jekyll.git my-project
  
  # enter my-project directory
  $ cd my-project
  
  # install gems
  $ bundle
  
  # start jekyll (get used to this command)
  $ jekyll serve
```

###Port Forwarding

Jekyll will run on port 4000 by default. Make sure you have setup Vagrant to forward this port appropriately. 

####Vagrant
```rb
# example Vagrantfile config
Vagrant.configure("2") do |config|
  config.vm.box = "scotch/box"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.network "forwarded_port", guest: 4000, host: 4000 # jekyll
  config.vm.hostname = "scotchbox"
  config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]
end
```

####Hosts file
Also make sure you have this entry in your `/etc/hosts` file on the host machine.
```sh
# Scotch Box
192.168.33.10	emptyset.local
```

####Watch for changes
In order to listen for code changes on Vagrant, you must force polling.
```rb
$ jekyll serve --force_polling
```

###Done
If done correctly, `http://localhost:4000` should now render the static Jekyll site when opened in your browser.
