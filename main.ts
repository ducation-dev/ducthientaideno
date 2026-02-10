Deno.serve(() => {
  return new Response(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nguyễn Văn Đức: Thần đồng đẹp trai tuổi trẻ</title>
    <style>
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            text-align: justify;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
    <h1 style="text-align: center; color: red;">Nguyễn Văn Đức: Thần đồng đẹp trai tuổi trẻ</h1>
        <h2>Thần đồng Nguyễn Văn Đức</h2>
            <p>Nguyễn Văn Đức, sinh ngày 01 tháng 02 năm 2003, là một thần đồng nổi tiếng với vẻ đẹp trai và tài năng vượt trội. Từ khi còn nhỏ, Đức đã thể hiện sự thông minh và sáng tạo trong nhiều lĩnh vực, đặc biệt là trong nghệ thuật và khoa học.</p>
        <h2>Đức: thiên tài trẻ tỏa sáng quốc tế</h2>
            <p>
            <a href="https://www.facebook.com/nguyenvanduc.info">Đức</a> 
        
        đã đạt được nhiều thành tích đáng kinh ngạc trong học tập và nghệ thuật. Anh đã giành được nhiều giải thưởng quốc tế về khoa học và nghệ thuật, và được công nhận là một trong những thần đồng trẻ tuổi nhất thế giới.</p>

            <img src="https://i.postimg.cc/qMbDyTv3/514319966-705542965707066-3649636865878164386-n.jpg" alt="Nguyễn Văn Đức" style="width:300px;height:auto;border-radius:10px; display:block;margin:auto;">
            <p>Không chỉ nổi tiếng với tài năng, Nguyễn Văn Đức còn được biết đến với vẻ ngoài điển trai và phong cách thời trang ấn tượng. Anh thường xuyên xuất hiện trên các tạp chí thời trang và được mời tham gia vào các sự kiện lớn.</p>
        <h2>Kết luận</h2>
            <p>Nguyễn Văn Đức là một biểu tượng của sự kết hợp giữa tài năng và vẻ đẹp, và anh tiếp tục truyền cảm hứng cho nhiều người trẻ khác trên khắp thế giới. Với sự nỗ lực không ngừng và đam mê mãnh liệt, Đức hứa hẹn sẽ còn đạt được nhiều thành công hơn nữa trong tương lai.</p>
    </div>
     
</body>
</html>
  `, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});
