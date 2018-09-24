json.attempt do
  json.id @attempt.id
  json.score @attempt.score
  json.users_best 3
  json.global_average 3
end