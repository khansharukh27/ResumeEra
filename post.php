<?php
// post.php
$postId = isset($_GET['id']) ? htmlspecialchars($_GET['id']) : 'default';
$posts = [
    '123' => [
        'title' => 'My Awesome Post',
        'image' => 'https://resumeera.xyz/images/post-123.jpg',
        'description' => 'A cool post worth sharing!',
    ],
    'default' => [
        'title' => 'Default Post',
        'image' => 'https://resumeera.xyz/images/default.jpg',
        'description' => 'Default description.',
    ],
];
$post = $posts[$postId] ?? $posts['default'];
$postUrl = "https://resumeera.xyz/post.php?id=$postId";
$encodedUrl = urlencode($postUrl);
$encodedTitle = urlencode($post['title']);
$encodedImage = urlencode($post['image']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta property="og:url" content="<?php echo $postUrl; ?>">
    <meta property="og:title" content="<?php echo $post['title']; ?>">
    <meta property="og:image" content="<?php echo $post['image']; ?>">
    <meta property="og:description" content="<?php echo $post['description']; ?>">
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo $post['title']; ?>">
    <meta name="twitter:image" content="<?php echo $post['image']; ?>">
    <title><?php echo $post['title']; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/ShareButtons.css">
</head>
<body>
    <div id="root">
        <h1><?php echo $post['title']; ?></h1>
        <div class="stickyShare" id="share-buttons">
            <div class="toggle-button">☰ Share</div>
            <div class="share-content">
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $encodedUrl; ?>" target="_blank" rel="noopener noreferrer">
                    <h3><i style="color: green" class="bi bi-facebook"></i></h3>
                </a>
                <a href="https://twitter.com/intent/tweet?url=<?php echo $encodedUrl; ?>&text=<?php echo $encodedTitle; ?>" target="_blank" rel="noopener noreferrer">
                    <h3><i style="color: green" class="bi bi-twitter-x"></i></h3>
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo $encodedUrl; ?>&title=<?php echo $encodedTitle; ?><?php echo $encodedImage ? '&image=' . $encodedImage : ''; ?>" target="_blank" rel="noopener noreferrer">
                    <h3><i style="color: green" class="bi bi-linkedin"></i></h3>
                </a>
                <a href="https://api.whatsapp.com/send?text=<?php echo $encodedTitle; ?> <?php echo $encodedUrl; ?>" target="_blank" rel="noopener noreferrer">
                    <h3><i style="color: green" class="bi bi-whatsapp"></i></h3>
                </a>
                <a href="https://www.reddit.com/submit?url=<?php echo $encodedUrl; ?>&title=<?php echo $encodedTitle; ?>" target="_blank" rel="noopener noreferrer">
                    <h3><i style="color: green" class="bi bi-reddit"></i></h3>
                </a>
                <a href="mailto:?subject=<?php echo $encodedTitle; ?>&body=Check out this article: <?php echo $encodedUrl; ?>">
                    <h3><i style="color: green" class="bi bi-envelope"></i></h3>
                </a>
                <a data-flip-widget="shareflip" href="https://flipboard.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.flipboard.com/badges/flipboard_sbsw.png" alt="Flipboard" />
                </a>
                <button class="copy-btn">
                    <h3><i style="color: green" class="bi bi-clipboard-fill"></i></h3>
                </button>
            </div>
        </div>
    </div>
    <script src="/dist/client.js"></script>
</body>
</html>