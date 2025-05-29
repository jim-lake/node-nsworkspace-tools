#import <Cocoa/Cocoa.h>
#import <Foundation/Foundation.h>

#import "Tools.h"

int setIconForFile(const std::string icon, const std::string file) {
  auto icon_path = @(icon.c_str());
  auto file_path = @(file.c_str());

  NSImage *img = [[NSImage alloc] initWithContentsOfFile:icon_path];
  if (img != nil) {
    [[NSWorkspace sharedWorkspace] setIcon:nil forFile:file_path options:0];
    [[NSWorkspace sharedWorkspace] setIcon:img forFile:file_path options:0];
  }
  return img == nil ? -1 : 0;
}
