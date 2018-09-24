class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  def score_quiz(quiz)
    quiz_score = 0
    quiz["questions"].each do |question|

      question_correct = true
      question["answers"].each do |answer|

        if answer["checked"] != Answer.find(answer["id"]).correct
          question_correct = false
        end

      end

      if question_correct
        quiz_score += 1
      end

    end
    self.score = quiz_score
  end

end
