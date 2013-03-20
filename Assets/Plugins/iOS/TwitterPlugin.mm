#import <Foundation/Foundation.h>
#import <Social/Social.h>

extern UIViewController *UnityGetGLViewController();

#pragma mark Plug-in Function

extern "C" bool _TwitterIsAvailable() {
    return [SLComposeViewController isAvailableForServiceType:SLServiceTypeTwitter];
}

extern "C" void _TwitterComposeTweet(const char *initialText, const char *url, const char *screenshotPath) {
    UIViewController *rootViewController = UnityGetGLViewController();
    
    SLComposeViewController* controller = [SLComposeViewController composeViewControllerForServiceType:SLServiceTypeTwitter];
    
    if (initialText != nil) {
        [controller setInitialText:[NSString stringWithUTF8String:initialText]];
    }

    if (screenshotPath != nil) {
        UIImage *image = [UIImage imageWithContentsOfFile:[NSString stringWithUTF8String:screenshotPath]];
        [controller addImage:image];
    }

    if (url != nil) [controller addURL:[NSURL URLWithString:[NSString stringWithUTF8String:url]]];
    
    [rootViewController presentViewController:controller animated:YES completion:NULL];
}
