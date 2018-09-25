class Quiz < ApplicationRecord
    has_many :questions
    has_many :attempts

    def average_score
        count = self.attempts.length 
        scores = self.attempts.map { |x| x.score }
        sum = scores.inject(0) {|sum, i|  sum + i }
        sum / count.to_f
    end

    def best_score
        scores = self.attempts.map { |x| x.score }
        scores.max
    end

    def users_best_score(user)
        attempts = Attempt.where({ user_id: user.id, quiz_id: self.id })
        scores = attempts.map { |x| x.score }
        scores.max
    end
end


