<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	// $liststyle=$_GET['liststyle']; (get)
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/sub6common.css">
    <link rel="stylesheet" href="./css/greet.css">
	<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
	</script>
</head>

<body>
<div class="skipNav">
        <a href="#content">본문 바로가기</a>
        <a href="#gnb">글로벌 네비게이션 바로가기</a>
    </div>

	<div class="wrap">
	<? include '../common/sub_header.html' ?>

	<div class="visual">
			<strong>커뮤니티</strong>
        </div>

		<div class="sub_nav">
			<ul>
				<li><a href="../notice/list.php">공지사항</a></li>
				<li><a href="../sub6/sub1_2.html">FAQ</a></li>
				<li><a class="current" href="./list.php">채용공고</a></li>
			</ul>
	   </div>
        <article id="content">
            <div class="title_area">
			    <h2>채용공고</h2>
				<div class="summary">
                    <p>철강포장 및 소재 전문기업으로서 철강사업에 새로운 가치를 제공하고 시너지를 창출하고자 합니다.</p>
                </div>
            </div>
			<div class="content_area">

				<div class="bbs_wrap">
					<form  name="board_form" method="post" action="insert.php?liststyle=<?=$liststyle?>">
						<ul class="bbs_write_top">
							<li>
							<dl>
									<dt>닉네임</dt>
									<?  if($mode=="modify"){  ?>
										<dd><?=$item_nick?></dd>
									<? } else {	// 새 글쓰기 ?>
										<dd><?=$usernick?></dd>
									<? } ?>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" id="subject" name="subject" required></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="contents" id="contents" required></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="btn_wrap">
							<a href="list.php?page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>
					</form>
				</div>


				</div>
        </article>
		<? include "../common/sub_footer.html" ?>



</div>


<script src="../common/js/aos.js"></script>
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="../common/js/jquery.easing.1.3.js"></script>
<script src="../common/js/common.js"></script>

</body>
</html>