class User < ApplicationRecord
    
    after_initialize :set_defaults, unless: :persisted?
  
    has_secure_password 
    has_secure_token :api_token
    validates :username, presence: true, uniqueness: true, length: {minimum: 1}
    validates :password, length: {minimum: 5}

    def set_defaults
       self.role = "user"
    end
end