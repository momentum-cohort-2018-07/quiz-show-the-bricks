json.quiz do
  json.id @quiz.id
  json.title @quiz.title
  json.description @quiz.description
  json.users_best_score = @quiz.users_best_score(@user)
  json.average_score @quiz.average_score
  json.questions @quiz.questions.shuffle do |question|
    json.id question.id
    json.body question.body
    json.answers question.answers.shuffle do |answer|
      json.id answer.id
      json.body answer.body
    end
  end
end
