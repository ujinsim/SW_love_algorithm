firebase
  .auth()
  .currentUser.getIdToken(/* forceRefresh */ true)
  .then(function (idToken) {
    // Send token to your backend via HTTPS
    // ...
  })
  .catch(function (error) {
    // Handle error
  });

export default config = {
  matcher: ["/guest", "/result"],
};

//guest 로그인 안된 유저
//result 로그인 된 유저 -> 뽑았다면 뽑은 유저 정보 , 안뽑았다면 전체 카드
