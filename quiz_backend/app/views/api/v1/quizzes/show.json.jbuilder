json.status 200
json.quiz do
  json.id @quiz.id
  json.title @quiz.title
  json.description @quiz.description
  json.best_score = 3
  json.average_score 1.7
  json.questions @quiz.questions do |question|
    json.id question.id
    json.body question.body
    json.answers question.answers do |answer|
      json.id answer.id
      json.body answer.body
    end
  end
end
