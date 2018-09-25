class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :quiz

  def score_quiz(quiz_input)
    quiz_score = 0
    source_quiz = Quiz.find(quiz_input["id"])

    source_quiz.questions.each do |source_question|
      answer_scores = []

      source_question.answers.each do |source_answer|
        answer_inputs = quiz_input["answers"].select {
          |answer| answer["id"] == source_answer.id}

        if (answer_inputs.any? &&
          answer_inputs[0]["checked"] == source_answer.correct)
          answer_scores.push true
        else
          answer_scores.push false
        end
      end

      if (answer_scores.any? && answer_scores.reduce(:&))
        quiz_score += 1
      end
    end

    self.score = quiz_score
  end

end
