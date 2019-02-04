module SocialTool

  def self.twitter_search
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV.fetch("TWITTER_CONSUMER_KEY")
      config.consumer_secret     = ENV.fetch("TWITTER_CONSUMER_SECRET")
      config.access_token        = ENV.fetch("TWITTER_ACCESS_TOKEN")
      config.access_token_secret = ENV.fetch("TWITTER_ACCESS_SECRET")
    end

      #This is searchign for tweets with the #
    client.search("#programming" , result_type: 'recent',lang: "en").take(6).collect do |tweet|
      "@#{tweet.user.screen_name} said: #{tweet.text} on #{tweet.created_at.strftime('%-m/%d/%Y')}"
    end
   end 
end