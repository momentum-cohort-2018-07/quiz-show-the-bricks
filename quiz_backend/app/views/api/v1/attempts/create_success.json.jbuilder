json.attempt do
  json.id @attempt.id
  json.score @attempt.score
  json.users_best @attempt.quiz.users_best_score(@user)
  json.global_average @attempt.quiz.average_score
end