var posts=["posts/3610a686/","posts/afa1584f/","posts/2a112b34/","posts/878a2900/","posts/93e121d8/","posts/f9a0f709/","posts/52370875/","posts/c9d06d62/","posts/fe275c82/","posts/dcee1e81/","posts/ebff84ea/","posts/8b06fbc7/","posts/91c63612/","posts/8b2661f2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };