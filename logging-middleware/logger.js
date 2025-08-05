const ACCESSTOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjk4MWE0NjE3QHJhZ2h1ZW5nZ2NvbGxlZ2UuaW4iLCJleHAiOjE3NTQzNzAyOTEsImlhdCI6MTc1NDM2OTM5MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNiMTUyNmEzLWE3YjctNGU2Yi1hM2ViLTg1N2E2MjQ5ZTczMiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNhaSBzYXJhdGggamVlZGlndW50YSIsInN1YiI6IjU4YjJiZjFmLWRkYmQtNDhmMC1hNGZhLTU3NmQwMGVlZTZlNyJ9LCJlbWFpbCI6IjIyOTgxYTQ2MTdAcmFnaHVlbmdnY29sbGVnZS5pbiIsIm5hbWUiOiJzYWkgc2FyYXRoIGplZWRpZ3VudGEiLCJyb2xsTm8iOiIyMjk4MWE0NjE3IiwiYWNjZXNzQ29kZSI6Inl2aGRkYSIsImNsaWVudElEIjoiNThiMmJmMWYtZGRiZC00OGYwLWE0ZmEtNTc2ZDAwZWVlNmU3IiwiY2xpZW50U2VjcmV0IjoiRVhhUHFKVHVoZUdDSkhCVyJ9.rVDkUNgFIlIq6HjC5LeS3yLurMK88QSw0_jxDQVph0Y";
export function Log(s, l, p, message){
  const link = "http://20.244.56.144/evaluation-service/logs";
  return(fetch( link, {
    method : "POST",
     headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ACCESSTOKEN}`
    },
    body: JSON.stringify({
      stack: s.toLowerCase(),
      level: l.toLowerCase(),
      package: p.toLowerCase(),
      message
    })
  })
  .then(res => res.json())
  .then(data => {
    return data;
  }));
}