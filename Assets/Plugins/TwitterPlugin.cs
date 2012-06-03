using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;

public class TwitterPlugin : MonoBehaviour {

#if UNITY_IPHONE && !UNITY_EDITOR

	[DllImport("__Internal")]
	private static extern bool _TwitterIsAvailable();

	[DllImport("__Internal")]
	private static extern void _TwitterComposeTweet(string initialText, string url, string screenshotPath);

	private string initialText;
	private string url;

	public static bool isAvailable {
		get {
			return _TwitterIsAvailable();
		}
	}

	public static void ComposeTweet(string initialText) {
		_TwitterComposeTweet(initialText, null, null);
	}

	public static void ComposeTweet(string initialText, string url) {
		_TwitterComposeTweet(initialText, url, null);
	}

	public static void ComposeTweetWithScreenshot(string initialText) {
		ComposeTweetWithScreenshot(initialText, null);
	}

	public static void ComposeTweetWithScreenshot(string initialText, string url) {
		Application.CaptureScreenshot("../Library/Caches/screenshot.png");
		TwitterPlugin component = (new GameObject()).AddComponent<TwitterPlugin>();
		component.initialText = initialText;
		component.url = url;
	}

	IEnumerator Start() {
		yield return null;
		_TwitterComposeTweet(initialText, url, Application.temporaryCachePath + "/screenshot.png");
		Destroy(gameObject);
	}

#else

	public static bool isAvailable {
		get {
			return false;
		}
	}

	public static void ComposeTweet(string initialText) {}
	public static void ComposeTweet(string initialText, string url) {}
	public static void ComposeTweetWithScreenshot(string initialText) {}
	public static void ComposeTweetWithScreenshot(string initialText, string url) {}

#endif
}
