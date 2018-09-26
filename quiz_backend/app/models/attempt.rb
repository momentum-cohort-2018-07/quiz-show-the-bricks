class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  def score_quiz(quiz_input)
    quiz_score = 0
    source_quiz = Quiz.find(quiz_input["id"])

    source_quiz.questions.each do |source_question|
      correct_answer = Answer.find_by question_id: source_question.id, correct: true
      if quiz_input["answers"].include?(correct_answer.id)
        quiz_score += 1
      end
    end

    self.score = quiz_score
  end

end
