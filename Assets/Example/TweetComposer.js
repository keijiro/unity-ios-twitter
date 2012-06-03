#pragma strict

private var availability : boolean;

function Start() {
    availability = TwitterPlugin.isAvailable;
}

function OnGUI() {
    if (availability) {
        if (GUI.Button(Rect(0, 0, Screen.width, 0.1 * Screen.height), "Send a tweet")) {
            TwitterPlugin.ComposeTweet("TEST テスト 실험 试验", "http://www.example.com/loooooooooooooooooooooooooooooooooooooong_url");
        }
        if (GUI.Button(Rect(0, 0.1 * Screen.height, Screen.width, 0.1 * Screen.height), "Send a tweet with a screenshot")) {
            TwitterPlugin.ComposeTweetWithScreenshot("TEST (with a screenshot)", "http://www.example.com/loooooooooooooooooooooooooooooooooooooong_url");
        }
    } else {
        GUI.Label(Rect(0, 0, Screen.width, 0.15 * Screen.height), "Twitter API is not available.");
    }
}
