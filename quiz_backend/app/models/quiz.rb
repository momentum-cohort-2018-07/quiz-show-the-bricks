class Quiz < ApplicationRecord
    has_many :questions
    has_many :attempts

    def average_score
        self.attempts.sum(:value) do 
        value.sum / attempts.length
        end
    end
end
