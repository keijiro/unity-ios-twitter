#pragma strict

private var availability : boolean;

function Start() {
    availability = TwitterPlugin.isAvailable;
}

function OnGUI() {
    if (availability) {
        if (GUI.Button(Rect(0, 0, Screen.width, 0.1 * Screen.height), "Send a tweet")) {
            TwitterPlugin.ComposeTweet("これはツイートのテストです。", "http://www.example.com/sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo_long_url");
        }
        if (GUI.Button(Rect(0, 0.1 * Screen.height, Screen.width, 0.1 * Screen.height), "Send a tweet with a screenshot")) {
            TwitterPlugin.ComposeTweetWithScreenshot("これはスクリーンショット付きツイートのテストです。", "http://www.example.com/sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo_long_url");
        }
    } else {
        GUI.Label(Rect(0, 0, Screen.width, 0.15 * Screen.height), "Twitter function is not available.");
    }
}
