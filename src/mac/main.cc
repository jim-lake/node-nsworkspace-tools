#include <napi.h>
#include <string>

#include "Tools.h"

using namespace Napi;

static Value _setIconForFile(const CallbackInfo &info) {
  const Env env = info.Env();
  Value ret = env.Undefined();
  if (info.Length() < 2) {
    ret = String::New(env, "Expected at least 2 arguments");
  } else if (!info[0].IsString()) {
    ret = String::New(env, "Expected string arg 0");
  } else if (!info[1].IsString()) {
    ret = String::New(env, "Expected string arg 1");
  } else {
    const auto icon = info[0].As<String>().Utf8Value();
    const auto path = info[1].As<String>().Utf8Value();
    const auto error = setIconForFile(icon, path);
    if (error) {
      ret = Number::New(env, error);
    }
  }
  return ret;
}

Object Init(Env env, Object exports) {
  exports.Set("setIconForFile", Function::New(env, _setIconForFile));
  return exports;
}
NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
