desc "Deploying the site via rsync"
task :deploy do
  require 'rubygems'
  require 'highline/import'
  require 'yaml'

  choose do |menu|
    menu.prompt = "Which environment needs deployed? [staging]"
    menu.choice(:staging) { @env = :staging }
    menu.choice(:production) { @env = :production }
    menu.default = lambda { |environment|
      @env = environment
      return environment
    }.call(:staging)
  end

  say("<%= color('Deploying to #{@env.to_s}...', :yellow) %>")

  # get config from _deploy.yml
  @deploy_env = YAML.load_file('_deploy.yml')['deploy'][@env.to_s] rescue nil
  return say("Missing deploy configuration for #{@env} in _deploy.yml.") if @deploy_env.nil?

  # build command
  build_command = "jekyll build"

  # confirm build first
  say("Building will run: <%= color('`#{build_command}`', :red) %>")
  confirm = ask("Are you sure you wish to build? [Y/N] ") { |yn|
    yn.validate = /\Ay(?:es)?|no?\Z/i
    yn.responses[:not_valid] = 'Are you sure you wish to build? [Y/N]'
  }
  exit unless confirm[0].downcase == 'y'

  # get config from _config.yml
  @config = YAML.load_file('_config.yml') rescue nil

  # override default assets config with deploy config
  @config['assets'].merge!(@deploy_env['assets']) unless @deploy_env['assets'].nil?

  # write temp config
  File.open('_build_config.yml', 'w') { |file| file.write(@config.to_yaml) }

  # run build
  say("<%= color('Building site...', :yellow) %>")
  `#{build_command} --config _build_config.yml`
  say("<%= color('Build finished.', :green) %>")

  # sync command
  sync_command = "rsync -rtzhv --delete _site/ #{@deploy_env['username']}@#{@deploy_env['server']}:#{@deploy_env['path']}"

  # confirm sync first
  say("Syncing will run: <%= color('`#{sync_command}`', :red) %>")
  confirm = ask("Are you sure you wish to sync? [Y/N] ") { |yn|
    yn.validate = /\Ay(?:es)?|no?\Z/i
    yn.responses[:not_valid] = 'Are you sure you wish to sync? [Y/N]'
  }
  exit unless confirm[0].downcase == 'y'

  say("<%= color('Syncing site...', :yellow) %>")
  `#{sync_command}`
  say("<%= color('Sync finished.', :green) %>")

  say("<%= color('Deploy finished!', BOLD) %>")
end