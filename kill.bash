pids=$(ps aux | grep -i nodemon | grep -v grep | awk '{print $2}')

for pid in $pids
do
  echo "$pid"
  kill  "$pid"
done