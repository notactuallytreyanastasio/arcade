import { march_float_round, march_float_to_string, march_int_and, march_int_div, march_int_div_euclid, march_int_div_floor, march_int_mod, march_int_mod_euclid, march_int_mod_floor, march_int_not, march_int_or, march_int_ovf, march_int_popcount, march_int_shl, march_int_shr, march_int_wrapping_add, march_int_wrapping_mul, march_int_wrapping_sub, march_int_xor, march_string_byte_length, march_string_to_float, march_unix_time, march_unix_time_ms } from "./march_runtime.mjs";

import { synth_cell_put, synth_cell_get } from "./arcade_synth_cell.mjs";
import { worklet_register } from "./arcade_worklet.mjs";


const int_to_string   = { _0: ($_, x) => String(x) };
const bool_to_string  = { _0: ($_, x) => String(x) };
const int_to_float    = { _0: ($_, x) => x };
const float_to_int    = { _0: ($_, x) => Math.trunc(x) };
const float_truncate  = { _0: ($_, x) => Math.trunc(x) };
const string_is_empty = { _0: ($_, x) => x === "" };
const not_bool        = { _0: ($_, x) => !x };
const negate_int      = { _0: ($_, x) => march_int_ovf(-x, 3) };
const negate_float    = { _0: ($_, x) => -x };
const float_abs       = { _0: ($_, x) => Math.abs(x) };
const float_floor     = { _0: ($_, x) => Math.floor(x) };
const float_ceil      = { _0: ($_, x) => Math.ceil(x) };
const float_to_string    = { _0: ($_, x) => march_float_to_string(x) };
const string_length      = { _0: ($_, x) => march_string_byte_length(x) };
const string_byte_length = { _0: ($_, x) => march_string_byte_length(x) };
const int_and = { _0: ($_, a, b) => march_int_and(a, b) };
const int_or = { _0: ($_, a, b) => march_int_or(a, b) };
const int_xor = { _0: ($_, a, b) => march_int_xor(a, b) };
const int_shl = { _0: ($_, a, b) => march_int_shl(a, b) };
const int_shr = { _0: ($_, a, b) => march_int_shr(a, b) };
const int_mod = { _0: ($_, a, b) => march_int_mod(a, b) };
const int_div = { _0: ($_, a, b) => march_int_div(a, b) };
const int_mod_euclid = { _0: ($_, a, b) => march_int_mod_euclid(a, b) };
const int_div_euclid = { _0: ($_, a, b) => march_int_div_euclid(a, b) };
const int_mod_floor = { _0: ($_, a, b) => march_int_mod_floor(a, b) };
const int_div_floor = { _0: ($_, a, b) => march_int_div_floor(a, b) };
const int_wrapping_add = { _0: ($_, a, b) => march_int_wrapping_add(a, b) };
const int_wrapping_sub = { _0: ($_, a, b) => march_int_wrapping_sub(a, b) };
const int_wrapping_mul = { _0: ($_, a, b) => march_int_wrapping_mul(a, b) };
const int_not = { _0: ($_, a) => march_int_not(a) };
const int_popcount = { _0: ($_, a) => march_int_popcount(a) };
const int_abs     = { _0: ($_, a) => Math.abs(a) };
const unix_time   = { _0: ($_) => march_unix_time() };
const unix_time_ms = { _0: ($_) => march_unix_time_ms() };
const float_round = { _0: ($_, a) => march_float_round(a) };
const synth_cell_get$clo = { _0: ($_, ) => synth_cell_get() };
const synth_cell_put$clo = { _0: ($_, p0) => synth_cell_put(p0) };
const worklet_register$clo = { _0: ($_, p0, p1, p2, p3) => worklet_register(p0, p1, p2, p3) };

function __eq_Option(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "None": {
      return true;
    }
    case "Some": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Result(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Ok": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Err": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_List(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Nil": {
      return true;
    }
    case "Cons": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Hamt$HEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HEmpty": {
      return true;
    }
    case "HLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "HCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Map$Map(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HamtMap": {
      if (!__eq_HEntry(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Map$HEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HEmpty": {
      return true;
    }
    case "HLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "HCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_LinearMap$LinearMap(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LinearMapRep": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Map(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_LinearMap$LinearSlot(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LinearSlotRep": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Map(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_IOList$IOList(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Empty": {
      return true;
    }
    case "Str": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Segments": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Deque$Deque(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Deque": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$Safe(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Safe": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$TrustedHtml(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrustedHtml": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$TrustedAttr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrustedAttr": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$TrustedUrl(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrustedUrl": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$TrustedCss(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrustedCss": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$TrustedJs(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrustedJs": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Method(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Get": {
      return true;
    }
    case "Post": {
      return true;
    }
    case "Put": {
      return true;
    }
    case "Patch": {
      return true;
    }
    case "Delete": {
      return true;
    }
    case "Head": {
      return true;
    }
    case "Options": {
      return true;
    }
    case "Trace": {
      return true;
    }
    case "Connect": {
      return true;
    }
    case "Other": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Scheme(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SchemeHttp": {
      return true;
    }
    case "SchemeHttps": {
      return true;
    }
  }
  return true;
}

function __eq_Http$Status(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Status": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Header(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Header": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$UrlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "InvalidScheme": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MissingHost": {
      return true;
    }
    case "InvalidPort": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MalformedUrl": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Request(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Request": {
      if (!__eq_Method(a._0, b._0)) return false;
      if (!__eq_Scheme(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Option(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      if (!__eq_Option(a._5, b._5)) return false;
      if (!__eq_List(a._6, b._6)) return false;
      if (a._7 !== b._7) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Response(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Response": {
      if (!__eq_Status(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpTransport$TransportError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ConnectionRefused": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnTimeout": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnParseError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Closed": {
      return true;
    }
    case "SchemeNotSupported": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$TransportError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ConnectionRefused": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnTimeout": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnParseError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Closed": {
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$HttpError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HttpTransportError": {
      if (!__eq_TransportError(a._0, b._0)) return false;
      return true;
    }
    case "StepError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "TooManyRedirects": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$RequestStepEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RequestStepEntry": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$ResponseStepEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ResponseStepEntry": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$ErrorRecovery(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Recover": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Fail": {
      if (!__eq_HttpError(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$ErrorStepEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ErrorStepEntry": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$Client(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Client": {
      if (!__eq_List(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_Seq$Step(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Continue": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Halt": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Seq$Seq(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Seq": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_File$FileError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NotFound": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Permission": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "IsDirectory": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "NotEmpty": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "IoError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_File$FileKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RegularFile": {
      return true;
    }
    case "Directory": {
      return true;
    }
    case "Symlink": {
      return true;
    }
    case "OtherKind": {
      return true;
    }
  }
  return true;
}

function __eq_File$FileStat(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "FileStat": {
      if (a._0 !== b._0) return false;
      if (!__eq_FileKind(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_File$Seq(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Seq": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Sort$Heap(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HLeaf": {
      return true;
    }
    case "HNode": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Heap(a._2, b._2)) return false;
      if (!__eq_Heap(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Csv$CsvError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "FileError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CsvParseError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Csv$CsvRow(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CsvEof": {
      return true;
    }
    case "Row": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$WsFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TextFrame": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "BinaryFrame": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Ping": {
      return true;
    }
    case "Pong": {
      return true;
    }
    case "Close": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$WsSocket(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "WsSocket": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$SelectResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "WsData": {
      if (!__eq_WsFrame(a._0, b._0)) return false;
      return true;
    }
    case "ActorMsg": {
      return true;
    }
    case "Timeout": {
      return true;
    }
  }
  return true;
}

function __eq_HttpServer$Upgrade(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NoUpgrade": {
      return true;
    }
    case "WebSocketUpgrade": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpServer$Conn(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Conn": {
      if (a._0 !== b._0) return false;
      if (!__eq_Atom(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      if (!__eq_List(a._5, b._5)) return false;
      if (a._6 !== b._6) return false;
      if (a._7 !== b._7) return false;
      if (!__eq_List(a._8, b._8)) return false;
      if (a._9 !== b._9) return false;
      if (a._10 !== b._10) return false;
      if (!__eq_List(a._11, b._11)) return false;
      if (!__eq_Upgrade(a._12, b._12)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpServer$Server(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Server": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_Set$SEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SEmpty": {
      return true;
    }
    case "SLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "SBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "SCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Set$Set(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HamtSet": {
      if (a._0 !== b._0) return false;
      if (!__eq_SEntry(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HashMap$HEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HEmpty": {
      return true;
    }
    case "HLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "HCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HashMap$HashMap(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HamtHashMap": {
      if (!__eq_HEntry(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Array$TrieNode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrieEmpty": {
      return true;
    }
    case "TrieLeaf": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "TrieBranch": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Array$PVec(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PVec": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_TrieNode(a._2, b._2)) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_BigInt$BigInt(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BigInt": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Decimal$Decimal(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Decimal": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Duration$Duration(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Duration": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Bytes$Bytes(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Bytes": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Msgpack$Value(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Null": {
      return true;
    }
    case "Bool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Int": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Str": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Bin": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Array": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Map": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Compress$Error(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "InvalidInput": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "InsufficientOutput": {
      return true;
    }
    case "Io": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Compress$Gzip$Level(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BestSpeed": {
      return true;
    }
    case "Default": {
      return true;
    }
    case "BestCompression": {
      return true;
    }
    case "Custom": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Compress$Zstd$Level(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Fast": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Default": {
      return true;
    }
    case "Best": {
      return true;
    }
  }
  return true;
}

function __eq_Compress$Brotli$Mode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Generic": {
      return true;
    }
    case "Text": {
      return true;
    }
    case "Font": {
      return true;
    }
  }
  return true;
}

function __eq_Compress$Brotli$Level(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Level": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Parser$Expected(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ExpLit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ExpLabel": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ExpEof": {
      return true;
    }
  }
  return true;
}

function __eq_Parser$ParseErr(a, b) {
  if (a.pos !== b.pos) return false;
  if (!__eq_List(a.expected, b.expected)) return false;
  if (!__eq_List(a.context, b.context)) return false;
  return true;
}

function __eq_Parser$ParseReply(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ROk": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "RFail": {
      if (!__eq_ParseErr(a._0, b._0)) return false;
      return true;
    }
    case "RCut": {
      if (!__eq_ParseErr(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Parser$Parser(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Parser": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Toml$TomlValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TNull": {
      return true;
    }
    case "TDatetime": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TArray": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "TTable": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Toml$TomlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TomlError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlNode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Element": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
    case "Text": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CData": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Comment": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ProcessingInstruction": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlDoc(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "XmlDoc": {
      if (!__eq_Option(a._0, b._0)) return false;
      if (!__eq_XmlNode(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "XmlError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "XmlFrame": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Yaml$YamlValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "YStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YNull": {
      return true;
    }
    case "YSeq": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "YMap": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Yaml$YamlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "YamlError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Socket$SocketError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ConnectionFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "WriteFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvTimeout": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SocketOptionFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Dns$DnsError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NotFound": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ResolveError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Udp$UdpError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "OpenFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ResolveFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnectFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Udp$UdpSocket(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "UdpSocket": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Udp$UdpAddr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "UdpAddr": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Udp$UdpOptions(a, b) {
  if (a.reuse_addr !== b.reuse_addr) return false;
  if (a.reuse_port !== b.reuse_port) return false;
  if (a.broadcast !== b.broadcast) return false;
  if (a.gso !== b.gso) return false;
  if (a.gro !== b.gro) return false;
  if (a.recv_buffer !== b.recv_buffer) return false;
  if (a.send_buffer !== b.send_buffer) return false;
  return true;
}

function __eq_Udp$UdpStats(a, b) {
  if (a.rx_dropped !== b.rx_dropped) return false;
  if (a.tx_stalls !== b.tx_stalls) return false;
  return true;
}

function __eq_Process$ProcessResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ProcessResult": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Process$LiveProcess(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LiveProcess": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Cluster$NodeAddr(a, b) {
  if (a.host !== b.host) return false;
  if (a.port !== b.port) return false;
  return true;
}

function __eq_ClusterLoad$NodeLoad(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.cpu_count !== b.cpu_count) return false;
  if (a.cpu_load_milli !== b.cpu_load_milli) return false;
  if (a.mem_total_mb !== b.mem_total_mb) return false;
  if (a.mem_avail_mb !== b.mem_avail_mb) return false;
  if (a.sampled_at !== b.sampled_at) return false;
  return true;
}

function __eq_ConsistentHash$HashRing(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HashRing": {
      if (!__eq_List(a._0, b._0)) return false;
      if (!__eq_Map(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Logger$Level(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Debug": {
      return true;
    }
    case "Info": {
      return true;
    }
    case "Warn": {
      return true;
    }
    case "Error": {
      return true;
    }
  }
  return true;
}

function __eq_Logger$LogValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LAtom": {
      if (!__eq_Atom(a._0, b._0)) return false;
      return true;
    }
    case "LNull": {
      return true;
    }
  }
  return true;
}

function __eq_Logger$LogField(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LogField": {
      if (a._0 !== b._0) return false;
      if (!__eq_LogValue(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Logger$LogEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LogEntry": {
      if (!__eq_Level(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (!__eq_List(a._4, b._4)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Logger$Appender(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Appender": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Logger$AppenderCall(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "AppenderCall": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (!__eq_List(a._4, b._4)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Diagnostics$CrashKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Panic": {
      return true;
    }
    case "ActorCrashed": {
      return true;
    }
    case "TaskFailed": {
      return true;
    }
  }
  return true;
}

function __eq_Diagnostics$DiagnosticValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "DInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "DFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "DBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "DNull": {
      return true;
    }
  }
  return true;
}

function __eq_Diagnostics$SourceLocation(a, b) {
  if (a.file !== b.file) return false;
  if (a.line !== b.line) return false;
  return true;
}

function __eq_Diagnostics$StackFrame(a, b) {
  if (a.name !== b.name) return false;
  if (a.file !== b.file) return false;
  if (a.line !== b.line) return false;
  return true;
}

function __eq_Diagnostics$ProcessInfo(a, b) {
  if (a.pid !== b.pid) return false;
  if (a.supervised !== b.supervised) return false;
  return true;
}

function __eq_Diagnostics$CrashReport(a, b) {
  if (!__eq_CrashKind(a.kind, b.kind)) return false;
  if (a.message !== b.message) return false;
  if (!__eq_Option(a.location, b.location)) return false;
  if (!__eq_List(a.backtrace, b.backtrace)) return false;
  if (!__eq_ProcessInfo(a.process, b.process)) return false;
  if (!__eq_List(a.context, b.context)) return false;
  return true;
}

function __eq_Diagnostics$ObserverHandle(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ObserverHandle": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Diagnostics$DiagFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DiagFrame": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Diagnostics$DiagCrash(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DiagCrash": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (!__eq_List(a._5, b._5)) return false;
      if (a._6 !== b._6) return false;
      if (a._7 !== b._7) return false;
      return true;
    }
  }
  return true;
}

function __eq_Actor$InspectError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "InspectTimeout": {
      return true;
    }
    case "InspectDead": {
      return true;
    }
    case "InspectSelf": {
      return true;
    }
    case "InspectFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Flow$Stage(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Stage": {
      if (!__eq_Seq(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Json$JsonValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Null": {
      return true;
    }
    case "Bool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Number": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Str": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Array": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Object": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Json$JsonPathStep(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "JPathField": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "JPathIndex": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Json$DecodeError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DecodeError": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Json$JsonPath(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Key": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Index": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$Event(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "EvObjStart": {
      return true;
    }
    case "EvObjEnd": {
      return true;
    }
    case "EvArrStart": {
      return true;
    }
    case "EvArrEnd": {
      return true;
    }
    case "EvKey": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "EvStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "EvNum": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "EvNumRaw": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "EvBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "EvNull": {
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsonStreamError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "EMalformed": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "EDepthLimit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ETokenLimit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ETruncated": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsonLimits(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "JsonLimits": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsMode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MTop": {
      return true;
    }
    case "MDone": {
      return true;
    }
    case "MArrFirst": {
      return true;
    }
    case "MArrValue": {
      return true;
    }
    case "MArrNext": {
      return true;
    }
    case "MObjFirst": {
      return true;
    }
    case "MObjKey": {
      return true;
    }
    case "MObjColon": {
      return true;
    }
    case "MObjValue": {
      return true;
    }
    case "MObjNext": {
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsEsc(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SPlain": {
      return true;
    }
    case "SEsc": {
      return true;
    }
    case "SHex": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsPartial(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PNone": {
      return true;
    }
    case "PLit": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "PStr": {
      if (!__eq_List(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_JsEsc(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
    case "PNum": {
      if (!__eq_List(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsCfg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "JsCfg": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsState(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "StOk": {
      if (!__eq_JsCfg(a._0, b._0)) return false;
      if (!__eq_JsMode(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (!__eq_JsPartial(a._4, b._4)) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_JsonStream$JsFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "FArr": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "FObjK": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "FObjV": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Recon$ActorInfo(a, b) {
  if (a.pid !== b.pid) return false;
  if (a.type_name !== b.type_name) return false;
  if (!__eq_List(a.names, b.names)) return false;
  if (a.status !== b.status) return false;
  if (a.mbox !== b.mbox) return false;
  if (a.held !== b.held) return false;
  if (!__eq_Option(a.parent, b.parent)) return false;
  if (a.children !== b.children) return false;
  if (a.slices !== b.slices) return false;
  if (a.msgs_in !== b.msgs_in) return false;
  if (a.msgs_out !== b.msgs_out) return false;
  if (a.crashes !== b.crashes) return false;
  if (a.child_crashes !== b.child_crashes) return false;
  return true;
}

function __eq_Recon$Supervision(a, b) {
  if (a.policy !== b.policy) return false;
  if (a.limit !== b.limit) return false;
  if (a.window_secs !== b.window_secs) return false;
  if (a.held !== b.held) return false;
  return true;
}

function __eq_Recon$TopRow(a, b) {
  if (a.pid !== b.pid) return false;
  if (a.type_name !== b.type_name) return false;
  if (!__eq_List(a.names, b.names)) return false;
  if (a.status !== b.status) return false;
  if (a.value !== b.value) return false;
  if (a.mbox !== b.mbox) return false;
  if (a.stack_bytes !== b.stack_bytes) return false;
  if (a.link !== b.link) return false;
  if (!__eq_Option(a.parent, b.parent)) return false;
  if (a.parent_type !== b.parent_type) return false;
  if (!__eq_Option(a.spawned_by, b.spawned_by)) return false;
  if (a.children !== b.children) return false;
  if (a.crashes !== b.crashes) return false;
  if (a.child_crashes !== b.child_crashes) return false;
  if (!__eq_Option(a.supervision, b.supervision)) return false;
  return true;
}

function __eq_Recon$SupNode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SupNode": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Recon$NodeStats(a, b) {
  if (a.actors !== b.actors) return false;
  if (a.queued !== b.queued) return false;
  if (!__eq_Option(a.rss_bytes, b.rss_bytes)) return false;
  if (!__eq_Option(a.live_objects, b.live_objects)) return false;
  if (a.schedulers !== b.schedulers) return false;
  if (a.crashes_total !== b.crashes_total) return false;
  return true;
}

function __eq_Recon$CrashReport(a, b) {
  if (a.seq !== b.seq) return false;
  if (a.kind !== b.kind) return false;
  if (!__eq_Option(a.pid, b.pid)) return false;
  if (a.type_name !== b.type_name) return false;
  if (!__eq_Option(a.supervisor, b.supervisor)) return false;
  if (a.restart !== b.restart) return false;
  if (a.at_ms !== b.at_ms) return false;
  return true;
}

function __eq_Recon$EpochReport(a, b) {
  if (a.current !== b.current) return false;
  if (!__eq_List(a.pins, b.pins)) return false;
  return true;
}

function __eq_Recon$FnVersion(a, b) {
  if (a.name !== b.name) return false;
  if (a.impl_hash !== b.impl_hash) return false;
  if (!__eq_Option(a.baseline_hash, b.baseline_hash)) return false;
  if (a.patched !== b.patched) return false;
  if (a.epoch !== b.epoch) return false;
  if (a.activated_at_ms !== b.activated_at_ms) return false;
  return true;
}

function __eq_Diagnose$Finding(a, b) {
  if (a.id !== b.id) return false;
  if (a.severity !== b.severity) return false;
  if (!__eq_List(a.rows, b.rows)) return false;
  if (a.next !== b.next) return false;
  return true;
}

function __eq_Trace$Limit(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MaxEvents": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Rate": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Trace$EventKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Sent": {
      return true;
    }
    case "Received": {
      return true;
    }
    case "Spawned": {
      return true;
    }
    case "Exited": {
      return true;
    }
    case "Dropped": {
      return true;
    }
  }
  return true;
}

function __eq_Trace$Options(a, b) {
  if (!__eq_List(a.fns, b.fns)) return false;
  if (!__eq_List(a.events, b.events)) return false;
  if (!__eq_List(a.pids, b.pids)) return false;
  return true;
}

function __eq_Trace$ActorEvent(a, b) {
  if (!__eq_EventKind(a.kind, b.kind)) return false;
  if (a.pid !== b.pid) return false;
  if (!__eq_Option(a.peer, b.peer)) return false;
  if (!__eq_Option(a.msg_tag, b.msg_tag)) return false;
  if (!__eq_Option(a.reason, b.reason)) return false;
  if (a.epoch !== b.epoch) return false;
  if (a.at_ns !== b.at_ns) return false;
  return true;
}

function __eq_Trace$TraceId(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TraceId": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Trace$CallEvent(a, b) {
  if (a.caller !== b.caller) return false;
  if (a.fn_name !== b.fn_name) return false;
  if (a.epoch !== b.epoch) return false;
  if (a.at_ns !== b.at_ns) return false;
  return true;
}

function __eq_Trace$Batch(a, b) {
  if (!__eq_List(a.events, b.events)) return false;
  if (!__eq_List(a.actor_events, b.actor_events)) return false;
  if (a.recorded !== b.recorded) return false;
  if (a.dropped !== b.dropped) return false;
  if (a.rate_dropped !== b.rate_dropped) return false;
  if (a.queued !== b.queued) return false;
  if (a.done !== b.done) return false;
  if (!__eq_Option(a.why, b.why)) return false;
  return true;
}

function __eq_Trace$TraceError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LimitOutOfRange": {
      return true;
    }
    case "UnknownFunction": {
      return true;
    }
    case "TooManySessions": {
      return true;
    }
    case "NoSuchSession": {
      return true;
    }
    case "BadRequest": {
      return true;
    }
    case "PidsRequired": {
      return true;
    }
    case "UnknownPid": {
      return true;
    }
    case "Unavailable": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexAtom(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RALit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RAAny": {
      return true;
    }
    case "RAClass": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "RADigit": {
      return true;
    }
    case "RAWord": {
      return true;
    }
    case "RASpace": {
      return true;
    }
    case "RANotDigit": {
      return true;
    }
    case "RANotWord": {
      return true;
    }
    case "RANotSpace": {
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexQuant(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "QOne": {
      return true;
    }
    case "QZeroOrMore": {
      return true;
    }
    case "QOneOrMore": {
      return true;
    }
    case "QOptional": {
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexItem(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RegexItem": {
      if (!__eq_RegexAtom(a._0, b._0)) return false;
      if (!__eq_RegexQuant(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexPattern(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RegexPattern": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexOpts(a, b) {
  if (a.case_insensitive !== b.case_insensitive) return false;
  if (a.multiline !== b.multiline) return false;
  return true;
}

function __eq_DateTime$Date(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Date": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$Time(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Time": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$DateTime(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DateTime": {
      if (!__eq_Date(a._0, b._0)) return false;
      if (!__eq_Time(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$Tz(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Tz": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$LocalDateTime(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LocalDateTime": {
      if (!__eq_DateTime(a._0, b._0)) return false;
      if (!__eq_Tz(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Queue$Queue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Queue": {
      if (!__eq_List(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_AhoCorasick$AcNode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "AcNode": {
      if (!__eq_List(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_AhoCorasick$Automaton(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Automaton": {
      if (!__eq_Array$PVec(a._0, b._0)) return false;
      if (!__eq_Array$PVec(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_AhoCorasick$Match(a, b) {
  if (a.start !== b.start) return false;
  if (a.stop !== b.stop) return false;
  if (a.pattern_index !== b.pattern_index) return false;
  if (a.pattern !== b.pattern) return false;
  return true;
}

function __eq_Random$Rng(a, b) {
  if (a.s0 !== b.s0) return false;
  if (a.s1 !== b.s1) return false;
  if (a.s2 !== b.s2) return false;
  if (a.s3 !== b.s3) return false;
  return true;
}

function __eq_Gen$Thunk(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Thunk": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Gen$GenTree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GenTree": {
      if (a._0 !== b._0) return false;
      if (!__eq_Thunk(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Gen$GenRng(a, b) {
  if (a.s0 !== b.s0) return false;
  if (a.s1 !== b.s1) return false;
  if (a.s2 !== b.s2) return false;
  if (a.s3 !== b.s3) return false;
  return true;
}

function __eq_Gen$Generator(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Generator": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Check$CheckConfig(a, b) {
  if (a.num_runs !== b.num_runs) return false;
  if (!__eq_Option(a.seed, b.seed)) return false;
  if (a.max_shrink_steps !== b.max_shrink_steps) return false;
  if (a.max_size !== b.max_size) return false;
  return true;
}

function __eq_Stats$QuantileMethod(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "InvertedCdf": {
      return true;
    }
    case "AveragedInvertedCdf": {
      return true;
    }
    case "ClosestObservation": {
      return true;
    }
    case "InterpolatedInvertedCdf": {
      return true;
    }
    case "Hazen": {
      return true;
    }
    case "Weibull": {
      return true;
    }
    case "Linear": {
      return true;
    }
    case "MedianUnbiased": {
      return true;
    }
    case "NormalUnbiased": {
      return true;
    }
  }
  return true;
}

function __eq_Plot$Color(a, b) {
  if (a.r !== b.r) return false;
  if (a.g !== b.g) return false;
  if (a.b !== b.b) return false;
  return true;
}

function __eq_Plot$Style(a, b) {
  if (!__eq_Color(a.line_color, b.line_color)) return false;
  if (!__eq_Color(a.fill_color, b.fill_color)) return false;
  if (a.line_width !== b.line_width) return false;
  if (a.point_radius !== b.point_radius) return false;
  if (a.font_size !== b.font_size) return false;
  if (a.opacity !== b.opacity) return false;
  return true;
}

function __eq_Plot$SeriesKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Line": {
      return true;
    }
    case "Scatter": {
      return true;
    }
    case "Bar": {
      return true;
    }
    case "HistogramSeries": {
      return true;
    }
  }
  return true;
}

function __eq_Plot$Series(a, b) {
  if (!__eq_SeriesKind(a.kind, b.kind)) return false;
  if (!__eq_List(a.xs, b.xs)) return false;
  if (!__eq_List(a.ys, b.ys)) return false;
  if (!__eq_Option(a.label, b.label)) return false;
  if (!__eq_Style(a.style, b.style)) return false;
  return true;
}

function __eq_Plot$Axis(a, b) {
  if (!__eq_Option(a.label, b.label)) return false;
  if (!__eq_Option(a.data_min, b.data_min)) return false;
  if (!__eq_Option(a.data_max, b.data_max)) return false;
  if (a.tick_count !== b.tick_count) return false;
  return true;
}

function __eq_Plot$Plot(a, b) {
  if (!__eq_Option(a.title, b.title)) return false;
  if (!__eq_List(a.series, b.series)) return false;
  if (!__eq_Axis(a.x_axis, b.x_axis)) return false;
  if (!__eq_Axis(a.y_axis, b.y_axis)) return false;
  if (a.width !== b.width) return false;
  if (a.height !== b.height) return false;
  if (a.margin !== b.margin) return false;
  if (a.show_legend !== b.show_legend) return false;
  if (a.show_grid !== b.show_grid) return false;
  return true;
}

function __eq_DataFrame$Value(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "IntVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "FloatVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "StrVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "BoolVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "NullVal": {
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$Column(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "IntCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeIntArr(a._1, b._1)) return false;
      return true;
    }
    case "FloatCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeFloatArr(a._1, b._1)) return false;
      return true;
    }
    case "StrCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      return true;
    }
    case "BoolCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      return true;
    }
    case "NullableIntCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeIntArr(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
    case "NullableFloatCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeFloatArr(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
    case "NullableStrCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
    case "NullableBoolCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$Row(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Row": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$DataFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DataFrame": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$ColumnBuilder(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "IntBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "FloatBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "StrBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "BoolBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "NullBuilder": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$ColExpr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Col": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Eq": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Neq": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Lt": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Lte": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Gt": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Gte": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "And": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Or": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Not": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      return true;
    }
    case "Add": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Sub": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Mul": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Div": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "StrContains": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "StrStartsWith": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "StrEndsWith": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "IsNull": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      return true;
    }
    case "IsNotNull": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$SortDir(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Asc": {
      return true;
    }
    case "Desc": {
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$JoinKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Inner": {
      return true;
    }
    case "Left": {
      return true;
    }
    case "Right": {
      return true;
    }
    case "Outer": {
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$Plan(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Source": {
      if (!__eq_DataFrame(a._0, b._0)) return false;
      return true;
    }
    case "Select": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Filter": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "WithColumn": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "SortBy": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Limit": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Offset": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Rename": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "DropCols": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Join": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_Plan(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (!__eq_JoinKind(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$LazyFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LazyFrame": {
      if (!__eq_Plan(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$CsvWriteOpts(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CsvWriteOpts": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$AggExpr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Sum": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Mean": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Min": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Max": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Count": {
      return true;
    }
    case "CountDistinct": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Std": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Variance": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "First": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Last": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Median": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "AggAs": {
      if (!__eq_AggExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$GroupKey(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GroupKey": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$GroupedFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GroupedFrame": {
      if (!__eq_DataFrame(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$ColStats(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ColStats": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Option(a._3, b._3)) return false;
      if (!__eq_Option(a._4, b._4)) return false;
      if (!__eq_Option(a._5, b._5)) return false;
      if (!__eq_Option(a._6, b._6)) return false;
      if (!__eq_Option(a._7, b._7)) return false;
      if (!__eq_Option(a._8, b._8)) return false;
      if (!__eq_Option(a._9, b._9)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$WindowExpr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RowNum": {
      return true;
    }
    case "Rank": {
      if (a._0 !== b._0) return false;
      if (!__eq_SortDir(a._1, b._1)) return false;
      return true;
    }
    case "DenseRank": {
      if (a._0 !== b._0) return false;
      if (!__eq_SortDir(a._1, b._1)) return false;
      return true;
    }
    case "RunningSum": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RunningMean": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Lag": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Value(a._2, b._2)) return false;
      return true;
    }
    case "Lead": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Value(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsVersion(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Tls12": {
      return true;
    }
    case "Tls13": {
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsHandshakeFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsCertError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsReadError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsWriteError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsContextError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsReadTimeout": {
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsConfig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsConfig": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (!__eq_TlsVersion(a._4, b._4)) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsCtx(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsCtx": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsConn(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsConn": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_UUID$UUID(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "UUID": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$Socket(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Socket": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$HandleResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Reply": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "NoReply": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Stop": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$ChannelMailbox(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelIn": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "ChannelBroadcast": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "ChannelBroadcastFrom": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
    case "ChannelPush": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "ChannelLeave": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ChannelStop": {
      return true;
    }
  }
  return true;
}

function __eq_Channel$PubSubMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PubSubSubscribe": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PubSubUnsubscribe": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PubSubBroadcast": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$BroadcastMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BroadcastMsg": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$LeaveReason(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NormalLeave": {
      return true;
    }
    case "Disconnect": {
      return true;
    }
    case "Kicked": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$ChannelRoute(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelRoute": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$ChannelMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelMsg": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
  }
  return true;
}

function __eq_PubSub$PubSubState(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PubSubState": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelServer$JoinResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "JoinOk": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "JoinErr": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelServer$ChannelConfig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelConfig": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelSocket$SocketConfig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SocketConfig": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelSocket$ActiveChannels(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ActiveChannels": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Presence$PresenceMeta(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PresenceMeta": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Presence$PresenceEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PresenceEntry": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Presence$PresenceState(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PresenceState": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Config$Value(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CfgInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CfgFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CfgString": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CfgBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CfgAtom": {
      if (!__eq_Atom(a._0, b._0)) return false;
      return true;
    }
    case "CfgList": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Config$Codec(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Codec": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Config$Key(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Key": {
      if (a._0 !== b._0) return false;
      if (!__eq_Codec(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Config$Error(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "KeyMissing": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "KeyWrongType": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Cli$FlagArity(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BoolFlag": {
      return true;
    }
    case "ValueFlag": {
      return true;
    }
  }
  return true;
}

function __eq_Cli$FlagSpec(a, b) {
  if (a.long !== b.long) return false;
  if (!__eq_Option(a.short, b.short)) return false;
  if (!__eq_FlagArity(a.arity, b.arity)) return false;
  if (!__eq_Option(a.default, b.default)) return false;
  if (a.required !== b.required) return false;
  if (a.help !== b.help) return false;
  return true;
}

function __eq_Cli$CliError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "UnknownFlag": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MissingValue": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MissingRequired": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Cli$ParsedArgs(a, b) {
  if (!__eq_List(a.values, b.values)) return false;
  if (!__eq_List(a.positional, b.positional)) return false;
  return true;
}

function __eq_OrderedMap$Tree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Leaf": {
      return true;
    }
    case "Node": {
      if (!__eq_Tree(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Tree(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
  }
  return true;
}

function __eq_SortedSet$AvlTree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "AvlLeaf": {
      return true;
    }
    case "AvlNode": {
      if (!__eq_AvlTree(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_AvlTree(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_Range$IntRange(a, b) {
  if (a.start !== b.start) return false;
  if (a.stop !== b.stop) return false;
  if (a.step !== b.step) return false;
  return true;
}

function __eq_MlKem$KeyPair(a, b) {
  if (!__eq_Bytes(a.public_key, b.public_key)) return false;
  if (!__eq_Bytes(a.secret_key, b.secret_key)) return false;
  return true;
}

function __eq_MlDsa$KeyPair(a, b) {
  if (!__eq_Bytes(a.public_key, b.public_key)) return false;
  if (!__eq_Bytes(a.secret_key, b.secret_key)) return false;
  return true;
}

function __eq_Signal$Sig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Term": {
      return true;
    }
    case "Int": {
      return true;
    }
    case "Hup": {
      return true;
    }
    case "Usr1": {
      return true;
    }
    case "Usr2": {
      return true;
    }
  }
  return true;
}

function __eq_RRB$Vec(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Vec": {
      if (!__eq_Array$PVec(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_RRB$Slice(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Slice": {
      if (!__eq_Array$PVec(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Uri$URI(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "URI": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Option(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_Handle$Handle(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Handle": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_VectorClock$VectorClock(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "VectorClock": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_VectorClock$ClockOrder(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Before": {
      return true;
    }
    case "After": {
      return true;
    }
    case "Concurrent": {
      return true;
    }
    case "Equal": {
      return true;
    }
  }
  return true;
}

function __eq_CRDT$GCounter$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GCounter": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_CRDT$PNCounter$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PNCounter": {
      if (!__eq_Map(a._0, b._0)) return false;
      if (!__eq_Map(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_CRDT$LWWRegister$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LWWRegister": {
      if (a._0 !== b._0) return false;
      if (!__eq_VectorClock(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_CRDT$ORSet$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ORSet": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Merkle$MerkleTree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "MBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_MerkleTree(a._1, b._1)) return false;
      if (!__eq_MerkleTree(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_NodeCert$Cert(a, b) {
  if (a.node !== b.node) return false;
  if (!__eq_List(a.roles, b.roles)) return false;
  if (!__eq_List(a.flags, b.flags)) return false;
  if (a.not_after !== b.not_after) return false;
  if (a.issuer !== b.issuer) return false;
  if (a.pubkey !== b.pubkey) return false;
  if (a.serial !== b.serial) return false;
  return true;
}

function __eq_NodeCert$Signed(a, b) {
  if (!__eq_Cert(a.cert, b.cert)) return false;
  if (!__eq_List(a.body, b.body)) return false;
  if (!__eq_Bytes(a.signature, b.signature)) return false;
  return true;
}

function __eq_NodeCert$Revocation(a, b) {
  if (a.node !== b.node) return false;
  if (a.serial !== b.serial) return false;
  if (a.issued_at !== b.issued_at) return false;
  return true;
}

function __eq_NodeCert$SignedRevocation(a, b) {
  if (!__eq_Revocation(a.rev, b.rev)) return false;
  if (!__eq_List(a.body, b.body)) return false;
  if (!__eq_Bytes(a.signature, b.signature)) return false;
  return true;
}

function __eq_NodeCert$Credentials(a, b) {
  if (!__eq_Signed(a.signed, b.signed)) return false;
  if (!__eq_Bytes(a.secret_key, b.secret_key)) return false;
  if (!__eq_Bytes(a.operator_pubkey, b.operator_pubkey)) return false;
  if (a.revoked !== b.revoked) return false;
  return true;
}

function __eq_ClusterAuth$Auth(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Secret": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Certified": {
      if (!__eq_NodeCert$Credentials(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterAuth$FrameKeys(a, b) {
  if (!__eq_Bytes(a.tx_key, b.tx_key)) return false;
  if (!__eq_Bytes(a.rx_key, b.rx_key)) return false;
  return true;
}

function __eq_NodeIdentity$Identity(a, b) {
  if (a.name !== b.name) return false;
  if (a.node_id !== b.node_id) return false;
  if (a.incarnation !== b.incarnation) return false;
  return true;
}

function __eq_Handshake$HelloCert(a, b) {
  if (!__eq_List(a.cert, b.cert)) return false;
  if (!__eq_List(a.eph, b.eph)) return false;
  return true;
}

function __eq_Handshake$Hello(a, b) {
  if (!__eq_NodeIdentity$Identity(a.identity, b.identity)) return false;
  if (a.nonce !== b.nonce) return false;
  if (a.role !== b.role) return false;
  if (a.addr !== b.addr) return false;
  if (!__eq_Option(a.cert, b.cert)) return false;
  return true;
}

function __eq_GlobalPid$Pid(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.local_pid !== b.local_pid) return false;
  if (a.creation !== b.creation) return false;
  return true;
}

function __eq_RemoteCall$RemoteRef(a, b) {
  if (a.module_name !== b.module_name) return false;
  if (a.fn_name !== b.fn_name) return false;
  if (a.sig_hash !== b.sig_hash) return false;
  if (a.impl_hash !== b.impl_hash) return false;
  return true;
}

function __eq_RemoteCall$CallError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DeadlineExceeded": {
      return true;
    }
    case "NoConnection": {
      return true;
    }
    case "RemoteExit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TypeMismatch": {
      return true;
    }
    case "VersionSkew": {
      return true;
    }
    case "NoTarget": {
      return true;
    }
    case "Forbidden": {
      return true;
    }
  }
  return true;
}

function __eq_RemoteCall$Verdict(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Accept": {
      return true;
    }
    case "Reject": {
      if (!__eq_CallError(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_RemoteCall$ReplyResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Returned": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Failed": {
      if (!__eq_CallError(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_RemoteCall$CallRequest(a, b) {
  if (!__eq_RemoteRef(a.fref, b.fref)) return false;
  if (!__eq_List(a.args, b.args)) return false;
  if (!__eq_Pid(a.reply_to, b.reply_to)) return false;
  if (a.deadline !== b.deadline) return false;
  if (a.correlation !== b.correlation) return false;
  return true;
}

function __eq_RemoteCall$CallReply(a, b) {
  if (a.correlation !== b.correlation) return false;
  if (!__eq_ReplyResult(a.result, b.result)) return false;
  return true;
}

function __eq_NodeRpc$Target(a, b) {
  if (a.sig_hash !== b.sig_hash) return false;
  if (a.impl_hash !== b.impl_hash) return false;
  if (a.invoke !== b.invoke) return false;
  return true;
}

function __eq_NodeRpc$Targets(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Targets": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_PeerRegistry$Peer(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (!__eq_NodeIdentity$Identity(a.identity, b.identity)) return false;
  if (a.fd !== b.fd) return false;
  if (a.data_fd !== b.data_fd) return false;
  return true;
}

function __eq_PeerRegistry$Registry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Registry": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_NetKernel$MacKeys(a, b) {
  if (!__eq_Bytes(a.tx_key, b.tx_key)) return false;
  if (!__eq_Bytes(a.rx_key, b.rx_key)) return false;
  return true;
}

function __eq_NetKernel$Authed(a, b) {
  if (!__eq_NodeIdentity$Identity(a.identity, b.identity)) return false;
  if (a.role !== b.role) return false;
  if (a.addr !== b.addr) return false;
  if (!__eq_Option(a.cert, b.cert)) return false;
  if (a.mac !== b.mac) return false;
  return true;
}

function __eq_Membership$MemberStatus(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Alive": {
      return true;
    }
    case "Suspect": {
      return true;
    }
    case "Dead": {
      return true;
    }
  }
  return true;
}

function __eq_Membership$Member(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (!__eq_MemberStatus(a.status, b.status)) return false;
  if (a.incarnation !== b.incarnation) return false;
  if (a.creation !== b.creation) return false;
  if (a.name !== b.name) return false;
  if (a.addr !== b.addr) return false;
  return true;
}

function __eq_Membership$Members(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Members": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Swim$Config(a, b) {
  if (a.ack_timeout_ms !== b.ack_timeout_ms) return false;
  if (a.suspect_timeout_ms !== b.suspect_timeout_ms) return false;
  if (a.indirect_k !== b.indirect_k) return false;
  return true;
}

function __eq_Swim$Probe(a, b) {
  if (a.target !== b.target) return false;
  if (a.sent_at !== b.sent_at) return false;
  if (a.indirect_sent !== b.indirect_sent) return false;
  if (a.acked !== b.acked) return false;
  return true;
}

function __eq_Swim$State(a, b) {
  if (a.me !== b.me) return false;
  if (a.incarnation !== b.incarnation) return false;
  if (!__eq_Members(a.members, b.members)) return false;
  if (!__eq_Config(a.config, b.config)) return false;
  if (!__eq_Option(a.probe, b.probe)) return false;
  if (!__eq_Map(a.suspect_deadlines, b.suspect_deadlines)) return false;
  return true;
}

function __eq_Swim$Action(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SendPing": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendPingReq": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Gossip": {
      if (!__eq_Member(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_SwimDriver$State(a, b) {
  if (!__eq_Swim$State(a.swim, b.swim)) return false;
  if (!__eq_Random$Rng(a.rng, b.rng)) return false;
  if (a.period_ms !== b.period_ms) return false;
  if (a.period_end !== b.period_end) return false;
  if (!__eq_Map(a.peer_loads, b.peer_loads)) return false;
  if (a.anti_entropy_next !== b.anti_entropy_next) return false;
  return true;
}

function __eq_SwimDriver$Event(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PingAck": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "GossipFrame": {
      if (!__eq_Member(a._0, b._0)) return false;
      return true;
    }
    case "GossipWithLoad": {
      if (!__eq_Member(a._0, b._0)) return false;
      if (!__eq_NodeLoad(a._1, b._1)) return false;
      return true;
    }
    case "PeerDown": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnLost": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_SwimDriver$WireMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SwimPing": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SwimPingAck": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SwimPingReq": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "SwimGossip": {
      if (a._0 !== b._0) return false;
      if (!__eq_MemberStatus(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "SwimGossipLoad": {
      if (a._0 !== b._0) return false;
      if (!__eq_MemberStatus(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_NodeLoad(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_GlobalRegistry$Entry(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.pid !== b.pid) return false;
  if (!__eq_VectorClock(a.clock, b.clock)) return false;
  if (a.present !== b.present) return false;
  if (a.creation !== b.creation) return false;
  if (a.registrant !== b.registrant) return false;
  if (a.retired_at !== b.retired_at) return false;
  return true;
}

function __eq_GlobalRegistry$Names(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Names": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_NodeSend$SendError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NoConnection": {
      return true;
    }
    case "Refused": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_NodeSend$Delivery(a, b) {
  if (a.seq !== b.seq) return false;
  if (a.to_local_pid !== b.to_local_pid) return false;
  if (a.to_creation !== b.to_creation) return false;
  if (a.type_tag !== b.type_tag) return false;
  if (!__eq_List(a.payload, b.payload)) return false;
  if (a.schema !== b.schema) return false;
  if (a.from_node !== b.from_node) return false;
  return true;
}

function __eq_NodeQueue$Policy(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DropNew": {
      return true;
    }
    case "DropOld": {
      return true;
    }
    case "BlockSender": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Unbounded": {
      return true;
    }
  }
  return true;
}

function __eq_NodeQueue$EnqueueError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Backpressure": {
      return true;
    }
    case "NoConnection": {
      return true;
    }
    case "NotAuthorized": {
      return true;
    }
  }
  return true;
}

function __eq_NodeQueue$WriterState(a, b) {
  if (a.fd !== b.fd) return false;
  if (a.granted !== b.granted) return false;
  if (a.sent !== b.sent) return false;
  if (!__eq_Deque$Deque(a.pending, b.pending)) return false;
  if (!__eq_List(a.evicted, b.evicted)) return false;
  if (a.budget !== b.budget) return false;
  if (a.dead !== b.dead) return false;
  if (!__eq_Deque$Deque(a.waiting, b.waiting)) return false;
  if (!__eq_Deque$Deque(a.waiters, b.waiters)) return false;
  return true;
}

function __eq_NodeQueue__Writer_State(a, b) {
  if (a.budget !== b.budget) return false;
  if (a.dead !== b.dead) return false;
  if (!__eq_List(a.evicted, b.evicted)) return false;
  if (a.fd !== b.fd) return false;
  if (a.granted !== b.granted) return false;
  if (!__eq_Deque$Deque(a.pending, b.pending)) return false;
  if (a.sent !== b.sent) return false;
  if (!__eq_Deque$Deque(a.waiters, b.waiters)) return false;
  if (!__eq_Deque$Deque(a.waiting, b.waiting)) return false;
  return true;
}

function __eq_NodeQueue__Writer_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TakeEvicted": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Wait": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Configure": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Enqueue": {
      if (a._0 !== b._0) return false;
      if (!__eq_Bytes(a._1, b._1)) return false;
      return true;
    }
    case "EnqueueEvicting": {
      if (a._0 !== b._0) return false;
      if (!__eq_Bytes(a._1, b._1)) return false;
      return true;
    }
    case "Credit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Waiting": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Bytes(a._2, b._2)) return false;
      return true;
    }
    case "Withdraw": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Close": {
      return true;
    }
    case "CloseFd": {
      return true;
    }
  }
  return true;
}

function __eq_NodeQueue__Writer_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.budget !== b.budget) return false;
  if (a.dead !== b.dead) return false;
  if (!__eq_List(a.evicted, b.evicted)) return false;
  if (a.fd !== b.fd) return false;
  if (a.granted !== b.granted) return false;
  if (!__eq_Deque$Deque(a.pending, b.pending)) return false;
  if (a.sent !== b.sent) return false;
  if (!__eq_Deque$Deque(a.waiters, b.waiters)) return false;
  if (!__eq_Deque$Deque(a.waiting, b.waiting)) return false;
  return true;
}

function __eq_NodeQueue$WriterReq(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "EvictedReq": {
      return true;
    }
    case "WaitReq": {
      return true;
    }
  }
  return true;
}

function __eq_DistLink$DownReason(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Normal": {
      return true;
    }
    case "Killed": {
      return true;
    }
    case "Crash": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "NodeDown": {
      return true;
    }
  }
  return true;
}

function __eq_DistLink$MonitorRef(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MonitorRef": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_DistLink$PendingMonitor(a, b) {
  if (!__eq_MonitorRef(a.ref, b.ref)) return false;
  if (a.target_node !== b.target_node) return false;
  if (a.target_pid !== b.target_pid) return false;
  if (!__eq_GlobalPid$Pid(a.watcher_pid, b.watcher_pid)) return false;
  return true;
}

function __eq_DistLink$MonitorTable(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MonitorTable": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DistSupervisor$RestartStrategy(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Permanent": {
      return true;
    }
    case "Transient": {
      return true;
    }
    case "Temporary": {
      return true;
    }
  }
  return true;
}

function __eq_DistSupervisor$SupervisionStrategy(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "OneForOne": {
      return true;
    }
    case "OneForAll": {
      return true;
    }
    case "RestForOne": {
      return true;
    }
  }
  return true;
}

function __eq_DistSupervisor$RemoteChild(a, b) {
  if (!__eq_RemoteRef(a.fn_ref, b.fn_ref)) return false;
  if (a.node_id !== b.node_id) return false;
  if (!__eq_RestartStrategy(a.restart, b.restart)) return false;
  return true;
}

function __eq_DistSupervisor$ChildState(a, b) {
  if (!__eq_RemoteChild(a.spec, b.spec)) return false;
  if (!__eq_GlobalPid$Pid(a.global_pid, b.global_pid)) return false;
  if (!__eq_DistLink$MonitorRef(a.ref, b.ref)) return false;
  return true;
}

function __eq_DistSupervisor$State(a, b) {
  if (!__eq_SupervisionStrategy(a.sup_strategy, b.sup_strategy)) return false;
  if (!__eq_List(a.children, b.children)) return false;
  return true;
}

function __eq_Session$Ops(a, b) {
  if (a.register !== b.register) return false;
  if (a.emit !== b.emit) return false;
  if (a.suspend !== b.suspend) return false;
  if (a.close !== b.close) return false;
  if (a.fail !== b.fail) return false;
  if (a.on_cancel !== b.on_cancel) return false;
  if (a.leave !== b.leave) return false;
  if (a.on_crash !== b.on_crash) return false;
  if (a.suspend_at_boundary !== b.suspend_at_boundary) return false;
  if (a.on_drain !== b.on_drain) return false;
  return true;
}

function __eq_Session$Outcome(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Finished": {
      return true;
    }
    case "Drained": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Session$InProcess(a, b) {
  if (!__eq_Ops(a.ops, b.ops)) return false;
  if (a.drain !== b.drain) return false;
  if (a.take !== b.take) return false;
  if (a.crash !== b.crash) return false;
  if (a.queued !== b.queued) return false;
  if (a.step !== b.step) return false;
  if (a.drain_role !== b.drain_role) return false;
  if (a.undelivered !== b.undelivered) return false;
  if (a.drained !== b.drained) return false;
  if (a.sent !== b.sent) return false;
  if (a.consumed !== b.consumed) return false;
  if (a.returned !== b.returned) return false;
  if (a.close !== b.close) return false;
  return true;
}

function __eq_Session$InProcessState(a, b) {
  if (!__eq_Vault(a.handlers, b.handlers)) return false;
  if (!__eq_Vault(a.waiting, b.waiting)) return false;
  if (!__eq_Vault(a.cancel_hs, b.cancel_hs)) return false;
  if (!__eq_Vault(a.crash_hs, b.crash_hs)) return false;
  if (!__eq_Vault(a.drain_hs, b.drain_hs)) return false;
  if (!__eq_Vault(a.boundary, b.boundary)) return false;
  if (!__eq_Vault(a.draining, b.draining)) return false;
  if (!__eq_Vault(a.undeliv, b.undeliv)) return false;
  if (!__eq_Vault(a.gone, b.gone)) return false;
  if (!__eq_Vault(a.meta, b.meta)) return false;
  if (!__eq_Vault(a.roles, b.roles)) return false;
  if (!__eq_Vault(a.queue, b.queue)) return false;
  if (a.trace !== b.trace) return false;
  return true;
}

function __eq_Session$Theory$SessionGlobal(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GEnd": {
      return true;
    }
    case "GMsg": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_SessionGlobal(a._3, b._3)) return false;
      return true;
    }
    case "GChoice": {
      if (a._0 !== b._0) return false;
      if (!__eq_SessionGBranches(a._1, b._1)) return false;
      return true;
    }
    case "GLoop": {
      if (!__eq_SessionGlobal(a._0, b._0)) return false;
      if (!__eq_SessionGlobal(a._1, b._1)) return false;
      return true;
    }
    case "GVar": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Session$Theory$SessionGBranches(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GBNil": {
      return true;
    }
    case "GBCons": {
      if (a._0 !== b._0) return false;
      if (!__eq_SessionGlobal(a._1, b._1)) return false;
      if (!__eq_SessionGBranches(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Session$Theory$SessionLocal(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LEnd": {
      return true;
    }
    case "LSend": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_SessionLocal(a._2, b._2)) return false;
      return true;
    }
    case "LRecv": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_SessionLocal(a._2, b._2)) return false;
      return true;
    }
    case "LChoose": {
      if (!__eq_SessionLBranches(a._0, b._0)) return false;
      return true;
    }
    case "LOffer": {
      if (!__eq_SessionLBranches(a._0, b._0)) return false;
      return true;
    }
    case "LRec": {
      if (!__eq_SessionLocal(a._0, b._0)) return false;
      return true;
    }
    case "LVar": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Session$Theory$SessionLBranches(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LBNil": {
      return true;
    }
    case "LBCons": {
      if (a._0 !== b._0) return false;
      if (!__eq_SessionLocal(a._1, b._1)) return false;
      if (!__eq_SessionLBranches(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode$CnConfig(a, b) {
  if (a.name !== b.name) return false;
  if (a.listen_port !== b.listen_port) return false;
  if (a.advertise !== b.advertise) return false;
  if (!__eq_List(a.seeds, b.seeds)) return false;
  if (a.secret !== b.secret) return false;
  if (a.creation !== b.creation) return false;
  if (!__eq_Swim$Config(a.swim, b.swim)) return false;
  if (a.period_ms !== b.period_ms) return false;
  if (a.tick_ms !== b.tick_ms) return false;
  if (a.redial_min_ms !== b.redial_min_ms) return false;
  if (a.redial_max_ms !== b.redial_max_ms) return false;
  if (a.dial_timeout_ms !== b.dial_timeout_ms) return false;
  if (a.handshake_timeout_ms !== b.handshake_timeout_ms) return false;
  if (!__eq_ClusterAuth$Auth(a.auth, b.auth)) return false;
  if (!__eq_List(a.revocations, b.revocations)) return false;
  if (!__eq_Option(a.cert_files, b.cert_files)) return false;
  if (a.tombstone_grace_ms !== b.tombstone_grace_ms) return false;
  return true;
}

function __eq_ClusterNode$CertFiles(a, b) {
  if (a.cert !== b.cert) return false;
  if (a.key !== b.key) return false;
  if (a.poll_ms !== b.poll_ms) return false;
  return true;
}

function __eq_ClusterNode$NodeInfo(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.name !== b.name) return false;
  if (a.addr !== b.addr) return false;
  if (a.creation !== b.creation) return false;
  if (a.incarnation !== b.incarnation) return false;
  return true;
}

function __eq_ClusterNode$NodeEvent(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NodeUp": {
      if (!__eq_NodeInfo(a._0, b._0)) return false;
      return true;
    }
    case "NodeSuspect": {
      if (!__eq_NodeInfo(a._0, b._0)) return false;
      return true;
    }
    case "NodeDead": {
      if (!__eq_NodeInfo(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "NodeRejoined": {
      if (!__eq_NodeInfo(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode$SecurityEvent(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HandshakeRejected": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "FrameRejected": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "RawSendRefused": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "CertReplaced": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "CertRefused": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode$CnLink(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.gen !== b.gen) return false;
  if (a.cfd !== b.cfd) return false;
  if (a.dfd !== b.dfd) return false;
  if (a.dialer !== b.dialer) return false;
  if (a.cw !== b.cw) return false;
  if (a.creation !== b.creation) return false;
  if (!__eq_Bytes(a.binding, b.binding)) return false;
  if (a.cu_sent !== b.cu_sent) return false;
  if (a.cu_seen !== b.cu_seen) return false;
  return true;
}

function __eq_ClusterNode$CnHalf(a, b) {
  if (a.cfd !== b.cfd) return false;
  if (a.dfd !== b.dfd) return false;
  if (a.name !== b.name) return false;
  if (a.addr !== b.addr) return false;
  if (a.creation !== b.creation) return false;
  return true;
}

function __eq_ClusterNode$CnState(a, b) {
  if (!__eq_CnConfig(a.cfg, b.cfg)) return false;
  if (a.me !== b.me) return false;
  if (!__eq_SwimDriver$State(a.driver, b.driver)) return false;
  if (!__eq_Map(a.links, b.links)) return false;
  if (!__eq_Map(a.halves, b.halves)) return false;
  if (a.gen !== b.gen) return false;
  if (!__eq_Map(a.dialing, b.dialing)) return false;
  if (!__eq_Map(a.backoff, b.backoff)) return false;
  if (!__eq_List(a.pending, b.pending)) return false;
  if (!__eq_Map(a.relays, b.relays)) return false;
  if (!__eq_List(a.refused, b.refused)) return false;
  if (!__eq_Map(a.seed_ids, b.seed_ids)) return false;
  if (!__eq_List(a.rejoining, b.rejoining)) return false;
  if (a.stopped !== b.stopped) return false;
  if (!__eq_GlobalRegistry$Names(a.reg, b.reg)) return false;
  if (!__eq_Map(a.regs, b.regs)) return false;
  if (!__eq_Map(a.vis, b.vis)) return false;
  if (!__eq_Map(a.certs, b.certs)) return false;
  if (!__eq_List(a.revs, b.revs)) return false;
  if (!__eq_Map(a.cert_dead, b.cert_dead)) return false;
  if (a.rotated !== b.rotated) return false;
  if (a.reg_swept_at !== b.reg_swept_at) return false;
  if (a.remembered !== b.remembered) return false;
  if (a.reg_synced !== b.reg_synced) return false;
  return true;
}

function __eq_ClusterNode$NameEvent(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Bound": {
      if (a._0 !== b._0) return false;
      if (!__eq_GlobalPid$Pid(a._1, b._1)) return false;
      return true;
    }
    case "Unbound": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Lost": {
      if (a._0 !== b._0) return false;
      if (!__eq_GlobalPid$Pid(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode$RegisterError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Taken": {
      if (!__eq_GlobalPid$Pid(a._0, b._0)) return false;
      return true;
    }
    case "Stopped": {
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode$CnEffect(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Send": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Dial": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Install": {
      if (!__eq_CnLink(a._0, b._0)) return false;
      return true;
    }
    case "Drop": {
      if (!__eq_CnLink(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Discard": {
      if (!__eq_CnLink(a._0, b._0)) return false;
      return true;
    }
    case "Emit": {
      if (!__eq_NodeEvent(a._0, b._0)) return false;
      return true;
    }
    case "Named": {
      if (a._0 !== b._0) return false;
      if (!__eq_NameEvent(a._1, b._1)) return false;
      return true;
    }
    case "Unwatch": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode__CtlWriter_State(a, b) {
  if (a.dead !== b.dead) return false;
  if (a.fd !== b.fd) return false;
  return true;
}

function __eq_ClusterNode__CtlWriter_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CtlUse": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CtlWrite": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "CtlStop": {
      return true;
    }
    case "CtlClose": {
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode__CtlWriter_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.dead !== b.dead) return false;
  if (a.fd !== b.fd) return false;
  return true;
}

function __eq_ClusterNode$CnHandle(a, b) {
  if (a.pid !== b.pid) return false;
  if (a.name !== b.name) return false;
  if (a.node_id !== b.node_id) return false;
  if (a.advertise !== b.advertise) return false;
  if (!__eq_Vault(a.members, b.members)) return false;
  if (!__eq_Vault(a.subs, b.subs)) return false;
  if (!__eq_Vault(a.meta, b.meta)) return false;
  if (!__eq_Vault(a.names, b.names)) return false;
  if (!__eq_Vault(a.claims, b.claims)) return false;
  if (!__eq_Vault(a.watches, b.watches)) return false;
  if (!__eq_Vault(a.links, b.links)) return false;
  if (!__eq_Vault(a.qs, b.qs)) return false;
  if (!__eq_Vault(a.causes, b.causes)) return false;
  if (!__eq_Vault(a.routes, b.routes)) return false;
  if (!__eq_Vault(a.closes, b.closes)) return false;
  if (!__eq_Vault(a.downs, b.downs)) return false;
  if (!__eq_Vault(a.fired, b.fired)) return false;
  if (!__eq_Vault(a.failed, b.failed)) return false;
  if (!__eq_Vault(a.sfailed, b.sfailed)) return false;
  if (!__eq_Vault(a.certs, b.certs)) return false;
  if (!__eq_Vault(a.sec, b.sec)) return false;
  if (!__eq_Vault(a.revs, b.revs)) return false;
  if (!__eq_Bytes(a.op_pub, b.op_pub)) return false;
  if (!__eq_Vault(a.auth, b.auth)) return false;
  if (!__eq_Vault(a.strs, b.strs)) return false;
  if (!__eq_Vault(a.registrants, b.registrants)) return false;
  return true;
}

function __eq_ClusterNode__RegWatch_State(a, b) {
  if (a.n !== b.n) return false;
  return true;
}

function __eq_ClusterNode__RegWatch_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "WatchPid": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode__RegWatch_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.n !== b.n) return false;
  return true;
}

function __eq_ClusterNode__ClusterNodeActor_State(a, b) {
  if (!__eq_CnHandle(a.h, b.h)) return false;
  if (!__eq_CnState(a.st, b.st)) return false;
  if (a.started !== b.started) return false;
  return true;
}

function __eq_ClusterNode__ClusterNodeActor_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Boot": {
      if (!__eq_CnState(a._0, b._0)) return false;
      if (!__eq_CnHandle(a._1, b._1)) return false;
      return true;
    }
    case "Tick": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Accepted": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      if (!__eq_Option(a._6, b._6)) return false;
      return true;
    }
    case "Dialed": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      if (a._6 !== b._6) return false;
      if (!__eq_Option(a._7, b._7)) return false;
      return true;
    }
    case "SeedIsSelf": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "DialFailed": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "CtlFrame": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
    case "ReplaceCert": {
      if (!__eq_NodeCert$Signed(a._0, b._0)) return false;
      if (!__eq_Bytes(a._1, b._1)) return false;
      return true;
    }
    case "LinkClosed": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Register": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "Revoke": {
      if (!__eq_NodeCert$SignedRevocation(a._0, b._0)) return false;
      return true;
    }
    case "Unregister": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LocalDown": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MoveReader": {
      if (a._0 !== b._0) return false;
      if (!__eq_CnLink(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
    case "MoveTicker": {
      return true;
    }
    case "MoveAcceptor": {
      return true;
    }
    case "Shutdown": {
      return true;
    }
  }
  return true;
}

function __eq_ClusterNode__ClusterNodeActor_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (!__eq_CnHandle(a.h, b.h)) return false;
  if (!__eq_CnState(a.st, b.st)) return false;
  if (a.started !== b.started) return false;
  return true;
}

function __eq_ClusterNode$NodeActorState(a, b) {
  if (!__eq_CnState(a.st, b.st)) return false;
  if (!__eq_CnHandle(a.h, b.h)) return false;
  if (a.started !== b.started) return false;
  return true;
}

function __eq_ClusterNode$ClusterOps(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.stop !== b.stop) return false;
  if (a.subscribe !== b.subscribe) return false;
  if (a.unsubscribe !== b.unsubscribe) return false;
  if (a.members !== b.members) return false;
  if (a.all_members !== b.all_members) return false;
  if (a.addr_of !== b.addr_of) return false;
  if (a.name_of !== b.name_of) return false;
  if (a.link_count !== b.link_count) return false;
  if (a.register !== b.register) return false;
  if (a.unregister !== b.unregister) return false;
  if (a.lookup !== b.lookup) return false;
  if (a.registrant !== b.registrant) return false;
  if (a.names !== b.names) return false;
  if (a.watch !== b.watch) return false;
  if (a.unwatch !== b.unwatch) return false;
  if (a.stale_bindings !== b.stale_bindings) return false;
  if (a.creation !== b.creation) return false;
  if (a.next_id !== b.next_id) return false;
  if (a.queue_for !== b.queue_for) return false;
  if (a.session_queue_for !== b.session_queue_for) return false;
  if (a.send_msg !== b.send_msg) return false;
  if (a.route !== b.route) return false;
  if (a.route_type !== b.route_type) return false;
  if (a.route_session !== b.route_session) return false;
  if (a.unroute !== b.unroute) return false;
  if (a.on_peer_closed !== b.on_peer_closed) return false;
  if (a.off_peer_closed !== b.off_peer_closed) return false;
  if (a.on_delivery_failed !== b.on_delivery_failed) return false;
  if (a.on_session_failed !== b.on_session_failed) return false;
  if (a.off_session_failed !== b.off_session_failed) return false;
  if (a.monitor_remote !== b.monitor_remote) return false;
  if (a.demonitor_remote !== b.demonitor_remote) return false;
  if (a.peer_cert !== b.peer_cert) return false;
  if (a.own_cert !== b.own_cert) return false;
  if (a.frames_rejected !== b.frames_rejected) return false;
  if (a.raw_refused !== b.raw_refused) return false;
  if (a.revoke !== b.revoke) return false;
  if (a.revocations !== b.revocations) return false;
  if (a.replace_cert !== b.replace_cert) return false;
  if (a.on_security_event !== b.on_security_event) return false;
  if (a.off_security_event !== b.off_security_event) return false;
  if (a.registry_synced !== b.registry_synced) return false;
  if (a.rejoined_at !== b.rejoined_at) return false;
  if (a.attach_session !== b.attach_session) return false;
  if (a.handshake !== b.handshake) return false;
  return true;
}

function __eq_SessionNode$Link(a, b) {
  if (a.role !== b.role) return false;
  if (a.data_fd !== b.data_fd) return false;
  if (a.control_fd !== b.control_fd) return false;
  if (!__eq_GlobalPid$Pid(a.peer, b.peer)) return false;
  if (a.q !== b.q) return false;
  if (!__eq_Task(a.control, b.control)) return false;
  return true;
}

function __eq_SessionNode$EndpointState(a, b) {
  if (a.n !== b.n) return false;
  if (a.links !== b.links) return false;
  if (a.ended !== b.ended) return false;
  if (!__eq_List(a.failed, b.failed)) return false;
  if (!__eq_List(a.waiters, b.waiters)) return false;
  return true;
}

function __eq_SessionNode$Party(a, b) {
  if (a.my_role !== b.my_role) return false;
  if (a.node_id !== b.node_id) return false;
  if (!__eq_Vault(a.handlers, b.handlers)) return false;
  if (!__eq_Vault(a.waiting, b.waiting)) return false;
  if (!__eq_Vault(a.pending, b.pending)) return false;
  if (!__eq_Vault(a.meta, b.meta)) return false;
  if (!__eq_Vault(a.forward, b.forward)) return false;
  if (!__eq_Vault(a.why, b.why)) return false;
  if (!__eq_Vault(a.gone, b.gone)) return false;
  if (!__eq_Vault(a.cancel_hs, b.cancel_hs)) return false;
  if (!__eq_Vault(a.crash_hs, b.crash_hs)) return false;
  if (!__eq_Vault(a.forward_cancel, b.forward_cancel)) return false;
  if (!__eq_Vault(a.forward_crash, b.forward_crash)) return false;
  if (!__eq_Vault(a.heard, b.heard)) return false;
  if (!__eq_Vault(a.drain_hs, b.drain_hs)) return false;
  if (!__eq_Pid(a.ep, b.ep)) return false;
  if (!__eq_List(a.links, b.links)) return false;
  if (a.on_close !== b.on_close) return false;
  return true;
}

function __eq_SessionNode__HostWatch_State(a, b) {
  if (a.n !== b.n) return false;
  return true;
}

function __eq_SessionNode__HostWatch_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Watch": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_SessionNode__HostWatch_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.n !== b.n) return false;
  return true;
}

function __eq_SessionNode__Endpoint_State(a, b) {
  if (a.ended !== b.ended) return false;
  if (!__eq_List(a.failed, b.failed)) return false;
  if (a.links !== b.links) return false;
  if (a.n !== b.n) return false;
  if (!__eq_List(a.waiters, b.waiters)) return false;
  return true;
}

function __eq_SessionNode__Endpoint_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Deliver": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Bytes(a._3, b._3)) return false;
      return true;
    }
    case "AwaitOutcome": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Expect": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LinkEnded": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Drain": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PeerGone": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HostDown": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "ReleaseEpoch": {
      return true;
    }
    case "Leave": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "Early": {
      if (!__eq_Vault(a._0, b._0)) return false;
      if (!__eq_Party(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Bytes(a._3, b._3)) return false;
      return true;
    }
    case "Ready": {
      if (!__eq_Party(a._0, b._0)) return false;
      return true;
    }
    case "DeliverDraining": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Bytes(a._3, b._3)) return false;
      return true;
    }
    case "Returned": {
      if (!__eq_Party(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Bytes(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_SessionNode__Endpoint_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.ended !== b.ended) return false;
  if (!__eq_List(a.failed, b.failed)) return false;
  if (a.links !== b.links) return false;
  if (a.n !== b.n) return false;
  if (!__eq_List(a.waiters, b.waiters)) return false;
  return true;
}

function __eq_SessionNode$EndpointReq(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DeliverReq": {
      return true;
    }
    case "OutcomeReq": {
      return true;
    }
  }
  return true;
}

function __eq_SessionNode$Addr(a, b) {
  if (a.role !== b.role) return false;
  if (a.host !== b.host) return false;
  if (a.port !== b.port) return false;
  return true;
}

function __eq_SessionNode$Addrs(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "List": {
      if (!__eq_Addr(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_SessionNode$RunError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Cancelled": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Protocol": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "HostGone": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Left": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Listen": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Accept": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Connect": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "NoOffer": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "AlreadyOffered": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Unauthorized": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_SessionNode$OfferCount(a, b) {
  if (a.active !== b.active) return false;
  return true;
}

function __eq_SessionNode$Offer(a, b) {
  if (!__eq_Cap(a.node, b.node)) return false;
  if (a.proto !== b.proto) return false;
  if (a.fingerprint !== b.fingerprint) return false;
  if (!__eq_List(a.roles, b.roles)) return false;
  if (!__eq_List(a.compat, b.compat)) return false;
  if (a.my_role !== b.my_role) return false;
  if (a.capacity !== b.capacity) return false;
  if (a.name !== b.name) return false;
  if (a.id !== b.id) return false;
  if (!__eq_Vault(a.flags, b.flags)) return false;
  if (!__eq_Vault(a.strs, b.strs)) return false;
  if (a.start !== b.start) return false;
  if (!__eq_Pid(a.worker, b.worker)) return false;
  return true;
}

function __eq_SessionNode__OfferActor_State(a, b) {
  if (a.active !== b.active) return false;
  return true;
}

function __eq_SessionNode__OfferActor_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Invite": {
      if (!__eq_Offer(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (!__eq_GlobalPid$Pid(a._4, b._4)) return false;
      if (a._5 !== b._5) return false;
      if (a._6 !== b._6) return false;
      return true;
    }
    case "Withdraw": {
      if (!__eq_Offer(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Ended": {
      if (!__eq_Offer(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Close": {
      if (!__eq_Offer(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_SessionNode__OfferActor_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.active !== b.active) return false;
  return true;
}

function __eq_SessionNode__ApInbox_State(a, b) {
  if (a.n !== b.n) return false;
  return true;
}

function __eq_SessionNode__ApInbox_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Nop": {
      return true;
    }
  }
  return true;
}

function __eq_SessionNode__ApInbox_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.n !== b.n) return false;
  return true;
}

function __eq_SessionNode$ApWait(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Answered": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "OfferGone": {
      return true;
    }
    case "NoAnswer": {
      return true;
    }
  }
  return true;
}

function __eq_SessionNode$ApMix(a, b) {
  if (a.fp !== b.fp) return false;
  if (!__eq_List(a.rows, b.rows)) return false;
  if (a.me !== b.me) return false;
  if (a.other !== b.other) return false;
  if (a.older !== b.older) return false;
  if (!__eq_List(a.filled, b.filled)) return false;
  return true;
}

function __eq_Topology$TopoPlacement(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PlaceEverywhere": {
      return true;
    }
    case "PlaceOn": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "PlaceCount": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "PlaceCountOn": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PlaceNowhere": {
      return true;
    }
  }
  return true;
}

function __eq_Topology$TopoOpened(a, b) {
  if (!__eq_SessionNode$Offer(a.ap, b.ap)) return false;
  if (a.alive !== b.alive) return false;
  if (a.capacity !== b.capacity) return false;
  if (a.stop !== b.stop) return false;
  return true;
}

function __eq_Topology$TopoRole(a, b) {
  if (a.name !== b.name) return false;
  if (!__eq_TopoPlacement(a.place, b.place)) return false;
  if (a.capacity !== b.capacity) return false;
  if (a.pinned !== b.pinned) return false;
  if (a.open !== b.open) return false;
  return true;
}

function __eq_Topology$TopoAnchorState(a, b) {
  if (a.topology_anchor_marks !== b.topology_anchor_marks) return false;
  return true;
}

function __eq_Topology__Anchor_State(a, b) {
  if (a.topology_anchor_marks !== b.topology_anchor_marks) return false;
  return true;
}

function __eq_Topology__Anchor_Msg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Nop": {
      return true;
    }
    case "Respawn": {
      if (!__eq_Cap(a._0, b._0)) return false;
      if (!__eq_TopoState(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Topology__Anchor_Actor(a, b) {
  if (a.$d_dispatch !== b.$d_dispatch) return false;
  if (a.$e_alive !== b.$e_alive) return false;
  if (a.topology_anchor_marks !== b.topology_anchor_marks) return false;
  return true;
}

function __eq_Topology$TopoState(a, b) {
  if (!__eq_Vault(a.meta, b.meta)) return false;
  if (!__eq_Vault(a.strs, b.strs)) return false;
  if (!__eq_Vault(a.offers, b.offers)) return false;
  if (!__eq_Vault(a.draining, b.draining)) return false;
  if (!__eq_Vault(a.roles, b.roles)) return false;
  if (!__eq_Vault(a.anchor, b.anchor)) return false;
  return true;
}

function __eq_Topology$TopoDesired(a, b) {
  if (a.d_name !== b.d_name) return false;
  if (!__eq_TopoPlacement(a.d_place, b.d_place)) return false;
  if (a.d_capacity !== b.d_capacity) return false;
  return true;
}

function __eq_Control$CtlHosts(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HostsCanary": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "HostsRest": {
      return true;
    }
    case "HostsAll": {
      return true;
    }
  }
  return true;
}

function __eq_Control$CtlAction(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DoActivate": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "DoTopology": {
      return true;
    }
    case "DoDrain": {
      return true;
    }
    case "DoCerts": {
      return true;
    }
  }
  return true;
}

function __eq_Control$CtlGate(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GateNone": {
      return true;
    }
    case "GateHealthy": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Control$CtlStep(a, b) {
  if (a.id !== b.id) return false;
  if (!__eq_List(a.pools, b.pools)) return false;
  if (!__eq_CtlHosts(a.hosts, b.hosts)) return false;
  if (!__eq_CtlAction(a.action, b.action)) return false;
  if (!__eq_CtlGate(a.gate, b.gate)) return false;
  if (a.batch !== b.batch) return false;
  return true;
}

function __eq_Control$CtlBuild(a, b) {
  if (a.name !== b.name) return false;
  if (a.base !== b.base) return false;
  if (a.manifest !== b.manifest) return false;
  return true;
}

function __eq_Control$CtlDrain(a, b) {
  if (a.epoch !== b.epoch) return false;
  if (a.soft_ms !== b.soft_ms) return false;
  if (a.hard_ms !== b.hard_ms) return false;
  return true;
}

function __eq_Control$CtlLine(a, b) {
  if (a.step !== b.step) return false;
  if (a.text !== b.text) return false;
  return true;
}

function __eq_Control$CtlCert(a, b) {
  if (a.node !== b.node) return false;
  if (a.cert !== b.cert) return false;
  return true;
}

function __eq_Control$CtlRelease(a, b) {
  if (a.seq !== b.seq) return false;
  if (a.parent !== b.parent) return false;
  if (a.env !== b.env) return false;
  if (a.topology !== b.topology) return false;
  if (!__eq_List(a.builds, b.builds)) return false;
  if (!__eq_List(a.steps, b.steps)) return false;
  if (!__eq_List(a.lines, b.lines)) return false;
  if (!__eq_List(a.certs, b.certs)) return false;
  if (!__eq_List(a.revokes, b.revokes)) return false;
  if (!__eq_Option(a.drain, b.drain)) return false;
  if (a.signature !== b.signature) return false;
  return true;
}

function __eq_Control$CtlMember(a, b) {
  if (a.node !== b.node) return false;
  if (!__eq_List(a.pools, b.pools)) return false;
  return true;
}

function __eq_Control$CtlVersion(a, b) {
  if (a.build !== b.build) return false;
  if (a.manifest !== b.manifest) return false;
  return true;
}

function __eq_Control$CtlFailure(a, b) {
  if (a.seq !== b.seq) return false;
  if (a.step !== b.step) return false;
  if (a.why !== b.why) return false;
  return true;
}

function __eq_Control$AgentReport(a, b) {
  if (a.node !== b.node) return false;
  if (a.seq !== b.seq) return false;
  if (a.versions !== b.versions) return false;
  if (a.topology !== b.topology) return false;
  if (a.drained !== b.drained) return false;
  if (a.healthy !== b.healthy) return false;
  if (a.failed_seq !== b.failed_seq) return false;
  if (a.failed_step !== b.failed_step) return false;
  if (a.failed_why !== b.failed_why) return false;
  if (a.detail !== b.detail) return false;
  if (a.pools !== b.pools) return false;
  if (a.certs !== b.certs) return false;
  return true;
}

function __eq_Control$StepOrder(a, b) {
  if (a.seq !== b.seq) return false;
  if (a.release !== b.release) return false;
  if (a.step !== b.step) return false;
  if (a.node !== b.node) return false;
  if (a.action !== b.action) return false;
  if (a.want !== b.want) return false;
  if (a.artifacts !== b.artifacts) return false;
  if (a.lines !== b.lines) return false;
  return true;
}

function __eq_Control$StepResult(a, b) {
  if (a.seq !== b.seq) return false;
  if (a.step !== b.step) return false;
  if (a.node !== b.node) return false;
  if (a.ok !== b.ok) return false;
  if (a.detail !== b.detail) return false;
  return true;
}

function __eq_Control$CtlObs(a, b) {
  if (!__eq_AgentReport(a.report, b.report)) return false;
  if (!__eq_Option(a.healthy_since, b.healthy_since)) return false;
  return true;
}

function __eq_Control$CtlDecision(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RolloutApply": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "RolloutWait": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "RolloutHalted": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "RolloutComplete": {
      return true;
    }
    case "RolloutBehind": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Control$CtlLeader(a, b) {
  if (!__eq_Option(a.release, b.release)) return false;
  if (!__eq_List(a.obs, b.obs)) return false;
  if (!__eq_List(a.inflight, b.inflight)) return false;
  if (!__eq_Option(a.halted, b.halted)) return false;
  return true;
}

function __eq_Control$AgentOps(a, b) {
  if (a.report !== b.report) return false;
  if (a.has !== b.has) return false;
  if (a.request !== b.request) return false;
  return true;
}

function __eq_Control$CertOps(a, b) {
  if (a.name !== b.name) return false;
  if (!__eq_Bytes(a.deploy_key, b.deploy_key)) return false;
  if (a.serial !== b.serial) return false;
  if (a.replace !== b.replace) return false;
  if (a.revoke !== b.revoke) return false;
  if (a.floor !== b.floor) return false;
  return true;
}

function __eq_Control$CtlChunk(a, b) {
  if (a.offset !== b.offset) return false;
  if (a.data !== b.data) return false;
  if (a.last !== b.last) return false;
  return true;
}

function __eq_Control$CtlNext(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NextOrder": {
      if (!__eq_StepOrder(a._0, b._0)) return false;
      return true;
    }
    case "NextPoll": {
      return true;
    }
    case "NextBye": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Control$ControlOps(a, b) {
  if (a.report !== b.report) return false;
  if (a.stepped !== b.stepped) return false;
  if (a.next !== b.next) return false;
  if (a.head !== b.head) return false;
  return true;
}

function __eq_Js$Dom$Node(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Js$Dom$Event(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Js$Canvas$Context(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Js$Canvas$Image(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Js$Audio$Ctx(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Arcade$Vec2$Vec2(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  return true;
}

function __eq_Putt$Aim$AimTuning(a, b) {
  if (a.dead !== b.dead) return false;
  if (a.full !== b.full) return false;
  if (a.dot_every !== b.dot_every) return false;
  return true;
}

function __eq_Putt$Aim$AimPreview(a, b) {
  if (!__eq_PuttShot(a.shot, b.shot)) return false;
  if (!__eq_List(a.dots, b.dots)) return false;
  if (!__eq_Vec2(a.ends, b.ends)) return false;
  if (a.reach !== b.reach) return false;
  if (a.holes !== b.holes) return false;
  if (a.bounces !== b.bounces) return false;
  return true;
}

function __eq_Putt$Course$PuttBox(a, b) {
  if (!__eq_Vec2(a.lo, b.lo)) return false;
  if (!__eq_Vec2(a.hi, b.hi)) return false;
  return true;
}

function __eq_Putt$Course$PuttSlope(a, b) {
  if (!__eq_PuttBox(a.area, b.area)) return false;
  if (!__eq_Vec2(a.pull, b.pull)) return false;
  return true;
}

function __eq_Putt$Course$PuttHole(a, b) {
  if (a.title !== b.title) return false;
  if (a.par !== b.par) return false;
  if (a.width !== b.width) return false;
  if (a.length !== b.length) return false;
  if (!__eq_Vec2(a.tee, b.tee)) return false;
  if (!__eq_Vec2(a.cup, b.cup)) return false;
  if (!__eq_List(a.blocks, b.blocks)) return false;
  if (!__eq_List(a.sands, b.sands)) return false;
  if (!__eq_List(a.waters, b.waters)) return false;
  if (!__eq_List(a.slopes, b.slopes)) return false;
  if (a.gust !== b.gust) return false;
  return true;
}

function __eq_Arcade$Synth$SynthWave(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "WaveSine": {
      return true;
    }
    case "WaveSquare": {
      return true;
    }
    case "WaveTri": {
      return true;
    }
    case "WaveNoise": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Synth$SynthVoice(a, b) {
  if (!__eq_SynthWave(a.wave, b.wave)) return false;
  if (a.freq !== b.freq) return false;
  if (a.freq_end !== b.freq_end) return false;
  if (a.glide_floor !== b.glide_floor) return false;
  if (a.amp !== b.amp) return false;
  if (a.decay !== b.decay) return false;
  if (a.life !== b.life) return false;
  if (a.delay !== b.delay) return false;
  if (a.t !== b.t) return false;
  if (a.phase !== b.phase) return false;
  return true;
}

function __eq_Arcade$Synth$SynthTuning(a, b) {
  if (a.rate !== b.rate) return false;
  if (a.max_voices !== b.max_voices) return false;
  if (a.seed !== b.seed) return false;
  if (a.rumble_follow !== b.rumble_follow) return false;
  if (a.lowpass_follow !== b.lowpass_follow) return false;
  if (a.rumble_gain !== b.rumble_gain) return false;
  if (a.drum_step !== b.drum_step) return false;
  if (a.drum_amp !== b.drum_amp) return false;
  if (a.drum_decay !== b.drum_decay) return false;
  if (a.min_glide !== b.min_glide) return false;
  if (a.attack_time !== b.attack_time) return false;
  if (a.square_level !== b.square_level) return false;
  if (a.default_glide !== b.default_glide) return false;
  return true;
}

function __eq_Arcade$Synth$SynthConsts(a, b) {
  if (!__eq_F32Consts(a.round, b.round)) return false;
  if (a.dt !== b.dt) return false;
  if (a.pi !== b.pi) return false;
  if (a.rumble_follow !== b.rumble_follow) return false;
  if (a.lowpass_follow !== b.lowpass_follow) return false;
  if (a.rumble_gain !== b.rumble_gain) return false;
  if (a.drum_step !== b.drum_step) return false;
  if (a.drum_amp !== b.drum_amp) return false;
  if (a.drum_decay !== b.drum_decay) return false;
  if (a.min_glide !== b.min_glide) return false;
  if (a.attack_time !== b.attack_time) return false;
  if (a.square_level !== b.square_level) return false;
  if (a.default_glide !== b.default_glide) return false;
  if (a.max_voices !== b.max_voices) return false;
  return true;
}

function __eq_Arcade$Synth$Synth(a, b) {
  if (!__eq_List(a.voices, b.voices)) return false;
  if (a.lowpass !== b.lowpass) return false;
  if (a.rumble !== b.rumble) return false;
  if (a.drum_clock !== b.drum_clock) return false;
  if (a.seed !== b.seed) return false;
  if (a.rumble_target !== b.rumble_target) return false;
  if (a.drum !== b.drum) return false;
  if (!__eq_SynthConsts(a.c, b.c)) return false;
  return true;
}

function __eq_Arcade$Synth$Mix(a, b) {
  if (a.level !== b.level) return false;
  if (a.mix_seed !== b.mix_seed) return false;
  if (!__eq_List(a.kept, b.kept)) return false;
  return true;
}

function __eq_Putt$Cues$PuttCue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PcTap": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "PcWall": {
      return true;
    }
    case "PcBlock": {
      return true;
    }
    case "PcSand": {
      return true;
    }
    case "PcLip": {
      return true;
    }
    case "PcDrop": {
      return true;
    }
    case "PcSplash": {
      return true;
    }
    case "PcHoleOut": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "PcCourseOut": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Physics$Sim$SimClock(a, b) {
  if (a.t !== b.t) return false;
  if (a.step !== b.step) return false;
  return true;
}

function __eq_Arcade$Physics$Sim$Timed(a, b) {
  if (a.at !== b.at) return false;
  if (a.ev !== b.ev) return false;
  return true;
}

function __eq_Arcade$Physics$Sim$Sampled(a, b) {
  if (a.sampled_at !== b.sampled_at) return false;
  if (a.point !== b.point) return false;
  return true;
}

function __eq_Arcade$Physics$Sim$Turn(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TurnOn": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TurnStop": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TurnDone": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Putt$Roll$PuttTuning(a, b) {
  if (a.dt !== b.dt) return false;
  if (a.max_time !== b.max_time) return false;
  if (a.ball_radius !== b.ball_radius) return false;
  if (a.cup_radius !== b.cup_radius) return false;
  if (a.capture_speed !== b.capture_speed) return false;
  if (a.rest_speed !== b.rest_speed) return false;
  if (a.green_drag !== b.green_drag) return false;
  if (a.sand_drag !== b.sand_drag) return false;
  if (a.wall_bounce !== b.wall_bounce) return false;
  if (a.block_bounce !== b.block_bounce) return false;
  if (a.trail_every !== b.trail_every) return false;
  if (a.wind_max !== b.wind_max) return false;
  if (a.min_power !== b.min_power) return false;
  if (a.max_power !== b.max_power) return false;
  if (a.power_per_speed !== b.power_per_speed) return false;
  if (a.stroke_cap !== b.stroke_cap) return false;
  return true;
}

function __eq_Putt$Roll$PuttBump(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BumpWall": {
      return true;
    }
    case "BumpBlock": {
      return true;
    }
    case "BumpSand": {
      return true;
    }
    case "BumpLip": {
      return true;
    }
    case "BumpCup": {
      return true;
    }
    case "BumpWater": {
      return true;
    }
  }
  return true;
}

function __eq_Putt$Roll$PuttRoll(a, b) {
  if (!__eq_SimClock(a.clock, b.clock)) return false;
  if (!__eq_Vec2(a.at, b.at)) return false;
  if (!__eq_Vec2(a.vel, b.vel)) return false;
  if (a.in_sand !== b.in_sand) return false;
  if (a.over_cup !== b.over_cup) return false;
  if (!__eq_List(a.bumps, b.bumps)) return false;
  if (!__eq_List(a.trail, b.trail)) return false;
  return true;
}

function __eq_Putt$Roll$PuttRollEnd(a, b) {
  if (!__eq_Vec2(a.rest, b.rest)) return false;
  if (a.holed !== b.holed) return false;
  if (a.took !== b.took) return false;
  if (!__eq_List(a.met, b.met)) return false;
  if (!__eq_List(a.path, b.path)) return false;
  return true;
}

function __eq_Putt$Roll$PuttCourt(a, b) {
  if (!__eq_PuttTuning(a.tune, b.tune)) return false;
  if (!__eq_PuttHole(a.hole, b.hole)) return false;
  if (!__eq_Vec2(a.wind, b.wind)) return false;
  if (!__eq_Vec2(a.struck_from, b.struck_from)) return false;
  return true;
}

function __eq_Putt$Rules$PuttPhase(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PuttAiming": {
      return true;
    }
    case "PuttHoleDone": {
      return true;
    }
    case "PuttCourseDone": {
      return true;
    }
  }
  return true;
}

function __eq_Putt$Rules$PuttShot(a, b) {
  if (!__eq_Vec2(a.aim, b.aim)) return false;
  if (a.power !== b.power) return false;
  return true;
}

function __eq_Putt$Rules$PuttAction(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PuttStrike": {
      if (!__eq_PuttShot(a._0, b._0)) return false;
      return true;
    }
    case "PuttNext": {
      return true;
    }
  }
  return true;
}

function __eq_Putt$Rules$PuttError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PuttNotAiming": {
      return true;
    }
    case "PuttHoleUnfinished": {
      return true;
    }
    case "PuttCourseOver": {
      return true;
    }
    case "PuttNoAim": {
      return true;
    }
    case "PuttPowerOut": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Putt$Rules$PuttState(a, b) {
  if (!__eq_Rng(a.rng, b.rng)) return false;
  if (!__eq_U64(a.seed, b.seed)) return false;
  if (a.hole !== b.hole) return false;
  if (!__eq_Vec2(a.ball, b.ball)) return false;
  if (a.strokes !== b.strokes) return false;
  if (!__eq_Vec2(a.wind, b.wind)) return false;
  if (!__eq_List(a.card, b.card)) return false;
  if (!__eq_PuttPhase(a.phase, b.phase)) return false;
  return true;
}

function __eq_Putt$Rules$PuttEvent(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PuttStruck": {
      if (!__eq_PuttShot(a._0, b._0)) return false;
      return true;
    }
    case "PuttMet": {
      if (!__eq_Timed(a._0, b._0)) return false;
      return true;
    }
    case "PuttRested": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PuttHoled": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PuttPickedUp": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PuttTeedOff": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "PuttFinished": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Putt$Rules$PuttTurn(a, b) {
  if (!__eq_PuttState(a.after, b.after)) return false;
  if (!__eq_List(a.told, b.told)) return false;
  if (!__eq_List(a.rolled, b.rolled)) return false;
  return true;
}

function __eq_Putt$Rules$PuttRules(a, b) {
  if (!__eq_Numerics(a.num, b.num)) return false;
  if (!__eq_PuttTuning(a.tune, b.tune)) return false;
  return true;
}

function __eq_Arcade$Web$Audio$AudioSetup(a, b) {
  if (a.setup_rate !== b.setup_rate) return false;
  if (a.setup_gain !== b.setup_gain) return false;
  if (a.setup_worklet_url !== b.setup_worklet_url) return false;
  if (a.setup_processor !== b.setup_processor) return false;
  if (a.setup_global !== b.setup_global) return false;
  return true;
}

function __eq_Arcade$Canvas$FillRule(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RuleNonZero": {
      return true;
    }
    case "RuleEvenOdd": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Canvas$ColourStop(a, b) {
  if (a.stop_at !== b.stop_at) return false;
  if (a.stop_css !== b.stop_css) return false;
  return true;
}

function __eq_Arcade$Canvas$CanvasCall(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CvSave": {
      return true;
    }
    case "CvRestore": {
      return true;
    }
    case "CvSetTransform": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
    case "CvComposite": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvBeginPath": {
      return true;
    }
    case "CvMoveTo": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "CvLineTo": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "CvQuadTo": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
    case "CvCubicTo": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
    case "CvClosePath": {
      return true;
    }
    case "CvArc": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
    case "CvFillStyle": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvRadialStyle": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      if (!__eq_List(a._6, b._6)) return false;
      return true;
    }
    case "CvFill": {
      if (!__eq_FillRule(a._0, b._0)) return false;
      return true;
    }
    case "CvClip": {
      if (!__eq_FillRule(a._0, b._0)) return false;
      return true;
    }
    case "CvFillRect": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
    case "CvStrokeStyle": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvLineWidth": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvLineCap": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvLineJoin": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvStroke": {
      return true;
    }
    case "CvFont": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CvTextCentred": {
      return true;
    }
    case "CvFillText": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "CvStrokeText": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Canvas$Painting(a, b) {
  if (!__eq_List(a.rev, b.rev)) return false;
  if (a.open_clips !== b.open_clips) return false;
  if (a.dpr !== b.dpr) return false;
  if (a.view_w !== b.view_w) return false;
  if (a.view_h !== b.view_h) return false;
  if (a.sweep !== b.sweep) return false;
  return true;
}

function __eq_Arcade$Draw$Rgba(a, b) {
  if (a.red !== b.red) return false;
  if (a.green !== b.green) return false;
  if (a.blue !== b.blue) return false;
  if (a.alpha !== b.alpha) return false;
  return true;
}

function __eq_Arcade$Draw$LineEnd(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ButtEnd": {
      return true;
    }
    case "RoundEnd": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Draw$Corner(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MitreCorner": {
      return true;
    }
    case "RoundCorner": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Draw$Blend(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Over": {
      return true;
    }
    case "Lighter": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Draw$PathStep(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MoveTo": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      return true;
    }
    case "LineTo": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      return true;
    }
    case "QuadTo": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      if (!__eq_Vec2(a._1, b._1)) return false;
      return true;
    }
    case "CubicTo": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      if (!__eq_Vec2(a._1, b._1)) return false;
      if (!__eq_Vec2(a._2, b._2)) return false;
      return true;
    }
    case "ClosePath": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Draw$Shape(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Poly": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Holed": {
      if (!__eq_List(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Polys": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Disc": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Outline": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Draw$Affine(a, b) {
  if (a.a !== b.a) return false;
  if (a.b !== b.b) return false;
  if (a.c !== b.c) return false;
  if (a.d !== b.d) return false;
  if (a.e !== b.e) return false;
  if (a.f !== b.f) return false;
  return true;
}

function __eq_Arcade$Draw$GradientStop(a, b) {
  if (a.offset !== b.offset) return false;
  if (!__eq_Rgba(a.colour, b.colour)) return false;
  return true;
}

function __eq_Arcade$Draw$Radial(a, b) {
  if (!__eq_Vec2(a.inner, b.inner)) return false;
  if (a.inner_radius !== b.inner_radius) return false;
  if (!__eq_Vec2(a.outer, b.outer)) return false;
  if (a.outer_radius !== b.outer_radius) return false;
  if (!__eq_List(a.stops, b.stops)) return false;
  if (!__eq_Affine(a.frame, b.frame)) return false;
  return true;
}

function __eq_Arcade$Draw$Paint(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Flat": {
      if (!__eq_Rgba(a._0, b._0)) return false;
      return true;
    }
    case "RadialPaint": {
      if (!__eq_Radial(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Draw$Pen(a, b) {
  if (!__eq_Rgba(a.ink, b.ink)) return false;
  if (a.width !== b.width) return false;
  if (!__eq_LineEnd(a.ends, b.ends)) return false;
  if (!__eq_Corner(a.corners, b.corners)) return false;
  return true;
}

function __eq_Arcade$Draw$Lettering(a, b) {
  if (a.words !== b.words) return false;
  if (a.font !== b.font) return false;
  if (!__eq_Vec2(a.middle, b.middle)) return false;
  if (!__eq_Rgba(a.fill, b.fill)) return false;
  if (!__eq_Option(a.edge, b.edge)) return false;
  if (!__eq_Affine(a.frame, b.frame)) return false;
  return true;
}

function __eq_Arcade$Draw$DrawOp(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ClearTo": {
      if (!__eq_Rgba(a._0, b._0)) return false;
      return true;
    }
    case "FillShape": {
      if (!__eq_Shape(a._0, b._0)) return false;
      if (!__eq_Paint(a._1, b._1)) return false;
      if (!__eq_Blend(a._2, b._2)) return false;
      return true;
    }
    case "StrokeShape": {
      if (!__eq_Shape(a._0, b._0)) return false;
      if (!__eq_Pen(a._1, b._1)) return false;
      if (!__eq_Blend(a._2, b._2)) return false;
      return true;
    }
    case "DrawText": {
      if (!__eq_Lettering(a._0, b._0)) return false;
      return true;
    }
    case "PushClip": {
      if (!__eq_Shape(a._0, b._0)) return false;
      return true;
    }
    case "PopClip": {
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Float32$F32Consts(a, b) {
  if (a.split !== b.split) return false;
  if (a.tiny !== b.tiny) return false;
  if (a.subnormal_shift !== b.subnormal_shift) return false;
  if (a.overflow !== b.overflow) return false;
  if (a.infinity !== b.infinity) return false;
  return true;
}

function __eq_Arcade$Numerics$Numerics(a, b) {
  if (a.pi !== b.pi) return false;
  if (a.tau !== b.tau) return false;
  if (a.unit53 !== b.unit53) return false;
  if (a.floor_u1 !== b.floor_u1) return false;
  if (a.infinity !== b.infinity) return false;
  if (a.nan !== b.nan) return false;
  return true;
}

function __eq_Arcade$U64$U64(a, b) {
  if (a.hi !== b.hi) return false;
  if (a.lo !== b.lo) return false;
  return true;
}

function __eq_Arcade$Rng$Rng(a, b) {
  if (!__eq_U64(a.word, b.word)) return false;
  return true;
}

function __eq_Arcade$SynthFeed$AudioCmd(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CmdPlay": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CmdRumble": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CmdDrum": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Arcade$SynthFeed$Levels(a, b) {
  if (a.lvl_rumble !== b.lvl_rumble) return false;
  if (a.lvl_drum !== b.lvl_drum) return false;
  return true;
}

function __eq_Arcade$Vec3$Vec3(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.z !== b.z) return false;
  return true;
}

function __eq_Arcade$Physics$Gesture$TrackPoint(a, b) {
  if (a.gt !== b.gt) return false;
  if (a.gx !== b.gx) return false;
  if (a.gy !== b.gy) return false;
  return true;
}

function __eq_Arcade$Physics$Gesture$GestureLimits(a, b) {
  if (a.min_velocities !== b.min_velocities) return false;
  if (a.min_peak !== b.min_peak) return false;
  if (a.sure_peak !== b.sure_peak) return false;
  if (a.min_release !== b.min_release) return false;
  if (a.start_fraction !== b.start_fraction) return false;
  if (a.min_duration !== b.min_duration) return false;
  if (a.release_window !== b.release_window) return false;
  if (a.accel_window !== b.accel_window) return false;
  return true;
}

function __eq_Arcade$Physics$Gesture$GestureMetrics(a, b) {
  if (a.top_speed !== b.top_speed) return false;
  if (a.top_at !== b.top_at) return false;
  if (a.began_at !== b.began_at) return false;
  if (a.ended_at !== b.ended_at) return false;
  if (a.duration !== b.duration) return false;
  if (a.lift_speed !== b.lift_speed) return false;
  if (a.accel_up !== b.accel_up) return false;
  if (a.accel_side !== b.accel_side) return false;
  if (a.unit_accel !== b.unit_accel) return false;
  if (a.rms_jerk !== b.rms_jerk) return false;
  if (a.norm_jerk !== b.norm_jerk) return false;
  if (!__eq_TrackPoint(a.began_point, b.began_point)) return false;
  if (!__eq_TrackPoint(a.top_point, b.top_point)) return false;
  return true;
}

function Arcade$Synth$consts_of(t) {
  {
    let r;
    {
      let $t47569_i5542;
      {
        const $t47568_i5541 = march_int_ovf(-(126), 3);
        $t47569_i5542 = Arcade$Float32$pow2($t47568_i5541, 1.);
      }
      {
        let $t47571_i5544;
        {
          const $t47570_i5543 = march_int_ovf(-(97), 3);
          $t47571_i5544 = Arcade$Float32$pow2($t47570_i5543, 1.5);
        }
        {
          let $t47574_i5547;
          {
            const $t47572_i5545 = Arcade$Float32$pow2(128, 1.);
            {
              const $t47573_i5546 = Arcade$Float32$pow2(103, 1.);
              $t47574_i5547 = ($t47572_i5545 - $t47573_i5546);
            }
          }
          {
            let $t47576_i5549;
            {
              const $t47575_i5548 = Arcade$Float32$pow2(1023, 1.);
              $t47576_i5549 = ($t47575_i5548 * 2.);
            }
            r = ({ split: 536870913., tiny: $t47569_i5542, subnormal_shift: $t47571_i5544, overflow: $t47574_i5547, infinity: $t47576_i5549 });
          }
        }
      }
    }
    {
      let n;
      {
        const $t47616_i5534 = Arcade$Numerics$float_of_text("3.141592653589793");
        {
          const $t47617_i5535 = Arcade$Numerics$float_of_text("6.283185307179586");
          {
            const $t47618_i5536 = Arcade$Numerics$float_of_text("1.1102230246251565e-16");
            {
              let $t47620_i5538;
              {
                const $t47619_i5537 = Arcade$Numerics$float_of_text("1e308");
                $t47620_i5538 = ($t47619_i5537 * 10.);
              }
              {
                let $t47622_i5540;
                {
                  const $t47621_i5539 = (-1.);
                  $t47622_i5540 = Math.sqrt($t47621_i5539);
                }
                n = ({ pi: $t47616_i5534, tau: $t47617_i5535, unit53: $t47618_i5536, floor_u1: 1e-12, infinity: $t47620_i5538, nan: $t47622_i5540 });
              }
            }
          }
        }
      }
      {
        let $t46251;
        {
          let $t46250;
          {
            const $t46249 = t.rate;
            $t46250 = (1. / $t46249);
          }
          $t46251 = Arcade$Float32$f32(r, $t46250);
        }
        {
          let $t46253;
          {
            const $t46252 = n.pi;
            {
              const nearest_i5530 = Arcade$Float32$f32(r, $t46252);
              {
                const $t47593_i5531 = (nearest_i5530 > $t46252);
                if ($t47593_i5531 === true) {
                  {
                    let $t47595_i5533;
                    {
                      const $t47594_i5532 = march_int_ovf(-(22), 3);
                      $t47595_i5533 = Arcade$Float32$pow2($t47594_i5532, 1.);
                    }
                    $t46253 = (nearest_i5530 - $t47595_i5533);
                  }
                } else {
                  $t46253 = nearest_i5530;
                }
              }
            }
          }
          {
            let $t46255;
            {
              const $t46254 = t.rumble_follow;
              $t46255 = Arcade$Float32$f32(r, $t46254);
            }
            {
              let $t46257;
              {
                const $t46256 = t.lowpass_follow;
                $t46257 = Arcade$Float32$f32(r, $t46256);
              }
              {
                let $t46259;
                {
                  const $t46258 = t.rumble_gain;
                  $t46259 = Arcade$Float32$f32(r, $t46258);
                }
                {
                  let $t46261;
                  {
                    const $t46260 = t.drum_step;
                    $t46261 = Arcade$Float32$f32(r, $t46260);
                  }
                  {
                    const $t46262 = t.drum_amp;
                    {
                      const $t46263 = t.drum_decay;
                      {
                        let $t46265;
                        {
                          const $t46264 = t.min_glide;
                          $t46265 = Arcade$Float32$f32(r, $t46264);
                        }
                        {
                          let $t46267;
                          {
                            const $t46266 = t.attack_time;
                            $t46267 = Arcade$Float32$f32(r, $t46266);
                          }
                          {
                            let $t46269;
                            {
                              const $t46268 = t.square_level;
                              $t46269 = Arcade$Float32$f32(r, $t46268);
                            }
                            {
                              let $t46271;
                              {
                                const $t46270 = t.default_glide;
                                $t46271 = Arcade$Float32$f32(r, $t46270);
                              }
                              {
                                const $t46272 = t.max_voices;
                                {
                                  const $rc_2510 = ({ round: r, dt: $t46251, pi: $t46253, rumble_follow: $t46255, lowpass_follow: $t46257, rumble_gain: $t46259, drum_step: $t46261, drum_amp: $t46262, drum_decay: $t46263, min_glide: $t46265, attack_time: $t46267, square_level: $t46269, default_glide: $t46271, max_voices: $t46272 });
                                  return $rc_2510;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Synth$consts_of$clo = { _0: ($_, t) => Arcade$Synth$consts_of(t) };

function Arcade$Synth$f32(c, x) {
  {
    const $t46274 = c.round;
    return Arcade$Float32$f32($t46274, x);
  }
}
const Arcade$Synth$f32$clo = { _0: ($_, c, x) => Arcade$Synth$f32(c, x) };

function Arcade$Synth$voice(c, w, f, to, glide, amp, decay, delay) {
  {
    let d;
    d = Arcade$Synth$f32(c, decay);
    {
      let $t46285;
      $t46285 = Arcade$Synth$f32(c, f);
      {
        let $t46286;
        $t46286 = Arcade$Synth$f32(c, to);
        {
          let $t46289;
          {
            let $t46287;
            $t46287 = Arcade$Synth$f32(c, glide);
            {
              const $t46288 = c.min_glide;
              {
                const $t47597_i5567 = ($t46288 >= $t46287);
                if ($t47597_i5567 === true) {
                  $t46289 = $t46288;
                } else {
                  $t46289 = $t46287;
                }
              }
            }
          }
          {
            let $t46290;
            $t46290 = Arcade$Synth$f32(c, amp);
            {
              let $t46292;
              {
                const $t46291 = (d * 6.);
                $t46292 = Arcade$Synth$f32(c, $t46291);
              }
              {
                const $t46293 = Arcade$Synth$f32(c, delay);
                return ({ wave: w, freq: $t46285, freq_end: $t46286, glide_floor: $t46289, amp: $t46290, decay: d, life: $t46292, delay: $t46293, t: 0., phase: 0. });
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Synth$voice$clo = { _0: ($_, c, w, f, to, glide, amp, decay, delay) => Arcade$Synth$voice(c, w, f, to, glide, amp, decay, delay) };

function Arcade$Synth$arpeggio_from($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4, $tco_a5, $tco_a6, $tco_a7) {
  __tco: for (;;) {
    const c = $tco_a0;
    const notes = $tco_a1;
    const i = $tco_a2;
    const step = $tco_a3;
    const amp = $tco_a4;
    const decay = $tco_a5;
    const w = $tco_a6;
    const acc = $tco_a7;
    switch (notes.$) {
      case "Nil": {
        {
          const $t1095_i5569 = { $: "Nil" };
          return List$reverse_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave(acc, $t1095_i5569);
        }
        break;
      }
      case "Cons": {
        const $f46307 = notes._0;
        const $f46308 = notes._1;
        {
          const rest = $f46308;
          {
            const f = $f46307;
            {
              const $t46303 = ((i + 1) < 4611686018427387904 && (i + 1) >= -4611686018427387904 ? (i + 1) : march_int_ovf((i + 1), 0));
              {
                let $t46305;
                {
                  let $t46304;
                  {
                    const c_i14457 = c;
                    {
                      let $t46299_i14462;
                      {
                        const $t46297_i14460 = i;
                        {
                          let $t46298_i14461;
                          $t46298_i14461 = Arcade$Synth$f32(c, step);
                          $t46299_i14462 = ($t46297_i14460 * $t46298_i14461);
                        }
                      }
                      $t46304 = Arcade$Synth$f32(c, $t46299_i14462);
                    }
                  }
                  {
                    const $t46295_i5576 = c.default_glide;
                    $t46305 = Arcade$Synth$voice(c, w, f, f, $t46295_i5576, amp, decay, $t46304);
                  }
                }
                {
                  const $t46306 = { $: "Cons", _0: $t46305, _1: acc };
                  {
                    $tco_a0 = c;
                    $tco_a1 = rest;
                    $tco_a2 = $t46303;
                    $tco_a3 = step;
                    $tco_a4 = amp;
                    $tco_a5 = decay;
                    $tco_a6 = w;
                    $tco_a7 = $t46306;
                    continue __tco;
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const Arcade$Synth$arpeggio_from$clo = { _0: ($_, c, notes, i, step, amp, decay, w, acc) => Arcade$Synth$arpeggio_from(c, notes, i, step, amp, decay, w, acc) };

function Arcade$Synth$bell(c, pitch, loudness, delay) {
  {
    let f;
    f = Arcade$Synth$f32(c, pitch);
    {
      let amp;
      amp = Arcade$Synth$f32(c, loudness);
      {
        let $t46315;
        {
          const $t46314 = { $: "WaveSine" };
          {
            const $t46295_i5597 = c.default_glide;
            $t46315 = Arcade$Synth$voice(c, $t46314, f, f, $t46295_i5597, amp, 0.5, delay);
          }
        }
        {
          let $t46321;
          {
            const $t46316 = { $: "WaveSine" };
            {
              let $t46318;
              {
                let $t46317;
                $t46317 = Arcade$Synth$f32(c, 2.76);
                $t46318 = (f * $t46317);
              }
              {
                let $t46320;
                {
                  let $t46319;
                  $t46319 = Arcade$Synth$f32(c, 0.35);
                  $t46320 = (amp * $t46319);
                }
                {
                  const $t46295_i5590 = c.default_glide;
                  $t46321 = Arcade$Synth$voice(c, $t46316, $t46318, $t46318, $t46295_i5590, $t46320, 0.25, delay);
                }
              }
            }
          }
          {
            let $t46327;
            {
              const $t46322 = { $: "WaveSine" };
              {
                let $t46324;
                {
                  let $t46323;
                  $t46323 = Arcade$Synth$f32(c, 5.4);
                  $t46324 = (f * $t46323);
                }
                {
                  let $t46326;
                  {
                    let $t46325;
                    $t46325 = Arcade$Synth$f32(c, 0.15);
                    $t46326 = (amp * $t46325);
                  }
                  {
                    const $t46295_i5583 = c.default_glide;
                    $t46327 = Arcade$Synth$voice(c, $t46322, $t46324, $t46324, $t46295_i5583, $t46326, 0.12, delay);
                  }
                }
              }
            }
            {
              const $t46328 = { $: "Nil" };
              {
                const $t46329 = { $: "Cons", _0: $t46327, _1: $t46328 };
                {
                  const $t46330 = { $: "Cons", _0: $t46321, _1: $t46329 };
                  return { $: "Cons", _0: $t46315, _1: $t46330 };
                }
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Synth$bell$clo = { _0: ($_, c, pitch, loudness, delay) => Arcade$Synth$bell(c, pitch, loudness, delay) };

function Arcade$Synth$next_seed(seed) {
  {
    let $t46343;
    {
      const $t46342 = ((seed * 1664525) < 4611686018427387904 && (seed * 1664525) >= -4611686018427387904 ? (seed * 1664525) : march_int_ovf((seed * 1664525), 2));
      $t46343 = (($t46342 + 1013904223) < 4611686018427387904 && ($t46342 + 1013904223) >= -4611686018427387904 ? ($t46342 + 1013904223) : march_int_ovf(($t46342 + 1013904223), 0));
    }
    return ($t46343 % 4294967296);
  }
}
const Arcade$Synth$next_seed$clo = { _0: ($_, seed) => Arcade$Synth$next_seed(seed) };

function Arcade$Synth$noise_of(seed) {
  {
    let $t46347;
    {
      let $t46346;
      {
        let $t46345;
        {
          const $t46344 = ((seed - seed % 512) / 512);
          $t46345 = $t46344;
        }
        $t46346 = ($t46345 / 8388608.);
      }
      $t46347 = ($t46346 * 2.);
    }
    return ($t46347 - 1.);
  }
}
const Arcade$Synth$noise_of$clo = { _0: ($_, seed) => Arcade$Synth$noise_of(seed) };

function Arcade$Synth$oscillate(c, w, phase, seed) {
  switch (w.$) {
    case "WaveSine": {
      {
        let $t46352;
        {
          let $t46351;
          {
            let $t46350;
            {
              const $t46348 = (phase * 2.);
              {
                const $t46349 = c.pi;
                $t46350 = ($t46348 * $t46349);
              }
            }
            $t46351 = Arcade$Synth$f32(c, $t46350);
          }
          {
            const c_i12887 = c;
            {
              const $t46275_i12889 = c.round;
              {
                const $t47590_i5552_i12892 = Math.sin($t46351);
                $t46352 = Arcade$Float32$f32($t46275_i12889, $t47590_i5552_i12892);
              }
            }
          }
        }
        return { _0: $t46352, _1: seed };
      }
      break;
    }
    case "WaveSquare": {
      {
        let $t46355;
        {
          const $t46353 = (phase < 0.5);
          if ($t46353 === true) {
            $t46355 = c.square_level;
          } else {
            {
              const $t46354 = c.square_level;
              $t46355 = (0. - $t46354);
            }
          }
        }
        return { _0: $t46355, _1: seed };
      }
      break;
    }
    case "WaveTri": {
      {
        let centred;
        {
          const $t46356 = (phase - 0.5);
          centred = Arcade$Synth$f32(c, $t46356);
        }
        {
          let folded;
          {
            const $t46357 = (centred < 0.);
            if ($t46357 === true) {
              folded = (0. - centred);
            } else {
              folded = centred;
            }
          }
          {
            let $t46361;
            {
              let $t46360;
              {
                let $t46359;
                {
                  const $t46358 = (4. * folded);
                  $t46359 = Arcade$Synth$f32(c, $t46358);
                }
                $t46360 = ($t46359 - 1.);
              }
              $t46361 = Arcade$Synth$f32(c, $t46360);
            }
            return { _0: $t46361, _1: seed };
          }
        }
      }
      break;
    }
    case "WaveNoise": {
      {
        const next = Arcade$Synth$next_seed(seed);
        {
          const $t46362 = Arcade$Synth$noise_of(next);
          return { _0: $t46362, _1: next };
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Synth$oscillate$clo = { _0: ($_, c, w, phase, seed) => Arcade$Synth$oscillate(c, w, phase, seed) };

function Arcade$Synth$sound_voice(c, v, m) {
  {
    let f;
    {
      let $t46375;
      {
        const $t46363 = v.freq;
        {
          let $t46374;
          {
            let $t46373;
            {
              let $t46367;
              {
                let $t46366;
                {
                  const $t46364 = v.freq_end;
                  {
                    const $t46365 = v.freq;
                    $t46366 = ($t46364 - $t46365);
                  }
                }
                $t46367 = Arcade$Synth$f32(c, $t46366);
              }
              {
                let $t46372;
                {
                  let $t46371;
                  {
                    let $t46370;
                    {
                      const $t46368 = v.t;
                      {
                        const $t46369 = v.glide_floor;
                        $t46370 = ($t46368 / $t46369);
                      }
                    }
                    $t46371 = Arcade$Synth$f32(c, $t46370);
                  }
                  {
                    const $t47598_i5606 = ($t46371 < 1.);
                    if ($t47598_i5606 === true) {
                      $t46372 = $t46371;
                    } else {
                      $t46372 = 1.;
                    }
                  }
                }
                $t46373 = ($t46367 * $t46372);
              }
            }
            $t46374 = Arcade$Synth$f32(c, $t46373);
          }
          $t46375 = ($t46363 + $t46374);
        }
      }
      f = Arcade$Synth$f32(c, $t46375);
    }
    {
      let stepped;
      {
        let $t46380;
        {
          const $t46376 = v.phase;
          {
            let $t46379;
            {
              let $t46378;
              {
                const $t46377 = c.dt;
                $t46378 = (f * $t46377);
              }
              $t46379 = Arcade$Synth$f32(c, $t46378);
            }
            $t46380 = ($t46376 + $t46379);
          }
        }
        stepped = Arcade$Synth$f32(c, $t46380);
      }
      {
        let phase;
        {
          const $t46381 = (stepped > 1.);
          if ($t46381 === true) {
            {
              const $t46382 = (stepped - 1.);
              phase = Arcade$Synth$f32(c, $t46382);
            }
          } else {
            phase = stepped;
          }
        }
        {
          let $p46410;
          {
            const $t46383 = v.wave;
            {
              const $t46384 = m.mix_seed;
              $p46410 = Arcade$Synth$oscillate(c, $t46383, phase, $t46384);
            }
          }
          {
            const osc = $p46410._0;
            {
              const seed = $p46410._1;
              {
                let attack;
                {
                  let $t46388;
                  {
                    let $t46387;
                    {
                      const $t46385 = v.t;
                      {
                        const $t46386 = c.attack_time;
                        $t46387 = ($t46385 / $t46386);
                      }
                    }
                    $t46388 = Arcade$Synth$f32(c, $t46387);
                  }
                  {
                    const $t47598_i5603 = ($t46388 < 1.);
                    if ($t47598_i5603 === true) {
                      attack = $t46388;
                    } else {
                      attack = 1.;
                    }
                  }
                }
                {
                  let envelope;
                  {
                    let $t46393;
                    {
                      let $t46392;
                      {
                        let $t46390;
                        {
                          const $t46389 = v.t;
                          $t46390 = (0. - $t46389);
                        }
                        {
                          const $t46391 = v.decay;
                          $t46392 = ($t46390 / $t46391);
                        }
                      }
                      $t46393 = Arcade$Synth$f32(c, $t46392);
                    }
                    {
                      const c_i12893 = c;
                      {
                        const $t46276_i12895 = c.round;
                        {
                          const $t47591_i5555_i12898 = Math.exp($t46393);
                          envelope = Arcade$Float32$f32($t46276_i12895, $t47591_i5555_i12898);
                        }
                      }
                    }
                  }
                  {
                    let level;
                    {
                      let $t46402;
                      {
                        const $t46394 = m.level;
                        {
                          let $t46401;
                          {
                            let $t46400;
                            {
                              let $t46399;
                              {
                                let $t46398;
                                {
                                  let $t46397;
                                  {
                                    let $t46396;
                                    {
                                      const $t46395 = v.amp;
                                      $t46396 = (osc * $t46395);
                                    }
                                    $t46397 = Arcade$Synth$f32(c, $t46396);
                                  }
                                  $t46398 = ($t46397 * attack);
                                }
                                $t46399 = Arcade$Synth$f32(c, $t46398);
                              }
                              $t46400 = ($t46399 * envelope);
                            }
                            $t46401 = Arcade$Synth$f32(c, $t46400);
                          }
                          $t46402 = ($t46394 + $t46401);
                        }
                      }
                      level = Arcade$Synth$f32(c, $t46402);
                    }
                    {
                      let t;
                      {
                        let $t46405;
                        {
                          const $t46403 = v.t;
                          {
                            const $t46404 = c.dt;
                            $t46405 = ($t46403 + $t46404);
                          }
                        }
                        t = Arcade$Synth$f32(c, $t46405);
                      }
                      {
                        let $t46407;
                        {
                          const $t46406 = v.life;
                          $t46407 = (t > $t46406);
                        }
                        {
                          let kept;
                          if ($t46407 === true) {
                            {
                              const $rc_2515 = m.kept;
                              kept = $rc_2515;
                            }
                          } else {
                            {
                              const $t46408 = ({ ...v, t: t, phase: phase });
                              {
                                const $t46409 = m.kept;
                                kept = { $: "Cons", _0: $t46408, _1: $t46409 };
                              }
                            }
                          }
                          {
                            const $rc_2517 = ({ level: level, mix_seed: seed, kept: kept });
                            return $rc_2517;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Synth$sound_voice$clo = { _0: ($_, c, v, m) => Arcade$Synth$sound_voice(c, v, m) };

function Arcade$Synth$mix_voices($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const c = $tco_a0;
    const vs = $tco_a1;
    const m = $tco_a2;
    switch (vs.$) {
      case "Nil": {
        return m;
        break;
      }
      case "Cons": {
        const $f46422 = vs._0;
        const $f46423 = vs._1;
        {
          const rest = $f46423;
          {
            const v = $f46422;
            {
              let $t46412;
              {
                const $t46411 = v.delay;
                $t46412 = ($t46411 > 0.);
              }
              if ($t46412 === true) {
                {
                  let $t46420;
                  {
                    let $t46417;
                    {
                      let $t46416;
                      {
                        let $t46415;
                        {
                          const $t46413 = v.delay;
                          {
                            const $t46414 = c.dt;
                            $t46415 = ($t46413 - $t46414);
                          }
                        }
                        $t46416 = Arcade$Synth$f32(c, $t46415);
                      }
                      $t46417 = ({ ...v, delay: $t46416 });
                    }
                    {
                      const $t46418 = m.kept;
                      {
                        let $t46419;
                        $t46419 = { $: "Cons", _0: $t46417, _1: $t46418 };
                        $t46420 = ({ ...m, kept: $t46419 });
                      }
                    }
                  }
                  {
                    $tco_a0 = c;
                    $tco_a1 = rest;
                    $tco_a2 = $t46420;
                    continue __tco;
                  }
                }
              } else {
                {
                  let $t46421;
                  $t46421 = Arcade$Synth$sound_voice(c, v, m);
                  {
                    $tco_a0 = c;
                    $tco_a1 = rest;
                    $tco_a2 = $t46421;
                    continue __tco;
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const Arcade$Synth$mix_voices$clo = { _0: ($_, c, vs, m) => Arcade$Synth$mix_voices(c, vs, m) };

function Arcade$Synth$drum_roll(s) {
  {
    const $t46428 = s.drum;
    if ($t46428 === true) {
      {
        const c = s.c;
        {
          let clock;
          {
            let $t46431;
            {
              const $t46429 = s.drum_clock;
              {
                const $t46430 = c.dt;
                $t46431 = ($t46429 + $t46430);
              }
            }
            clock = Arcade$Synth$f32(c, $t46431);
          }
          {
            let $t46433;
            {
              const $t46432 = c.drum_step;
              $t46433 = (clock > $t46432);
            }
            if ($t46433 === true) {
              {
                const $t46434 = s.voices;
                {
                  let $t46438;
                  {
                    const $t46435 = { $: "WaveNoise" };
                    {
                      const $t46436 = c.drum_amp;
                      {
                        const $t46437 = c.drum_decay;
                        $t46438 = Arcade$Synth$voice(c, $t46435, 0., 0., 1., $t46436, $t46437, 0.);
                      }
                    }
                  }
                  {
                    const $t46439 = { $: "Nil" };
                    {
                      const $t46440 = { $: "Cons", _0: $t46438, _1: $t46439 };
                      {
                        let $t46441;
                        $t46441 = List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($t46434, $t46440);
                        {
                          const $rc_2519 = ({ ...s, drum_clock: 0., voices: $t46441 });
                          return $rc_2519;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              {
                const $rc_2518 = ({ ...s, drum_clock: clock });
                return $rc_2518;
              }
            }
          }
        }
      }
    } else {
      return s;
    }
  }
}
const Arcade$Synth$drum_roll$clo = { _0: ($_, s) => Arcade$Synth$drum_roll(s) };

function Arcade$Synth$next_sample(s) {
  {
    const c = s.c;
    {
      let rumble;
      {
        let $t46450;
        {
          const $t46442 = s.rumble;
          {
            let $t46449;
            {
              let $t46448;
              {
                let $t46446;
                {
                  let $t46445;
                  {
                    const $t46443 = s.rumble_target;
                    {
                      const $t46444 = s.rumble;
                      $t46445 = ($t46443 - $t46444);
                    }
                  }
                  $t46446 = Arcade$Synth$f32(c, $t46445);
                }
                {
                  const $t46447 = c.rumble_follow;
                  $t46448 = ($t46446 * $t46447);
                }
              }
              $t46449 = Arcade$Synth$f32(c, $t46448);
            }
            $t46450 = ($t46442 + $t46449);
          }
        }
        rumble = Arcade$Synth$f32(c, $t46450);
      }
      {
        let seed;
        {
          const $t46451 = s.seed;
          seed = Arcade$Synth$next_seed($t46451);
        }
        {
          let lowpass;
          {
            let $t46460;
            {
              const $t46452 = s.lowpass;
              {
                let $t46459;
                {
                  let $t46458;
                  {
                    let $t46456;
                    {
                      let $t46455;
                      {
                        const $t46453 = Arcade$Synth$noise_of(seed);
                        {
                          const $t46454 = s.lowpass;
                          $t46455 = ($t46453 - $t46454);
                        }
                      }
                      $t46456 = Arcade$Synth$f32(c, $t46455);
                    }
                    {
                      const $t46457 = c.lowpass_follow;
                      $t46458 = ($t46456 * $t46457);
                    }
                  }
                  $t46459 = Arcade$Synth$f32(c, $t46458);
                }
                $t46460 = ($t46452 + $t46459);
              }
            }
            lowpass = Arcade$Synth$f32(c, $t46460);
          }
          {
            let level;
            {
              let $t46465;
              {
                let $t46464;
                {
                  let $t46462;
                  {
                    const $t46461 = (lowpass * rumble);
                    $t46462 = Arcade$Synth$f32(c, $t46461);
                  }
                  {
                    const $t46463 = c.rumble_gain;
                    $t46464 = ($t46462 * $t46463);
                  }
                }
                $t46465 = Arcade$Synth$f32(c, $t46464);
              }
              {
                const $t47596_i5616 = ($t46465 === 0.);
                if ($t47596_i5616 === true) {
                  level = 0.;
                } else {
                  level = $t46465;
                }
              }
            }
            {
              let drummed;
              {
                const $t46466 = ({ ...s, rumble: rumble, lowpass: lowpass, seed: seed });
                drummed = Arcade$Synth$drum_roll($t46466);
              }
              {
                let m;
                {
                  const $t46467 = drummed.voices;
                  {
                    let $t46469;
                    {
                      const $t46468 = { $: "Nil" };
                      $t46469 = ({ level: level, mix_seed: seed, kept: $t46468 });
                    }
                    m = Arcade$Synth$mix_voices(c, $t46467, $t46469);
                  }
                }
                {
                  let out;
                  {
                    const $t46470 = (-1.);
                    {
                      let $t46472;
                      {
                        const $t46471 = m.level;
                        {
                          const $t47598_i5614 = ($t46471 < 1.);
                          if ($t47598_i5614 === true) {
                            $t46472 = $t46471;
                          } else {
                            $t46472 = 1.;
                          }
                        }
                      }
                      {
                        const $t47597_i5611 = ($t46472 >= $t46470);
                        if ($t47597_i5611 === true) {
                          out = $t46472;
                        } else {
                          out = $t46470;
                        }
                      }
                    }
                  }
                  {
                    let $t46476;
                    {
                      const $t46473 = m.mix_seed;
                      {
                        const $t46474 = m.kept;
                        {
                          let $t46475;
                          {
                            const $t1095_i5608 = { $: "Nil" };
                            $t46475 = List$reverse_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($t46474, $t1095_i5608);
                          }
                          $t46476 = ({ ...drummed, seed: $t46473, voices: $t46475 });
                        }
                      }
                    }
                    {
                      const $rc_2521 = { _0: out, _1: $t46476 };
                      return $rc_2521;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Synth$next_sample$clo = { _0: ($_, s) => Arcade$Synth$next_sample(s) };

function Arcade$Synth$render_into($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const s = $tco_a0;
    const n = $tco_a1;
    const acc = $tco_a2;
    {
      const $t46477 = (n > 0);
      if ($t46477 === true) {
        {
          const $p46480 = Arcade$Synth$next_sample(s);
          {
            const x = $p46480._0;
            {
              const next = $p46480._1;
              {
                const $t46478 = ((n - 1) < 4611686018427387904 && (n - 1) >= -4611686018427387904 ? (n - 1) : march_int_ovf((n - 1), 1));
                {
                  const $t46479 = { $: "Cons", _0: x, _1: acc };
                  {
                    $tco_a0 = next;
                    $tco_a1 = $t46478;
                    $tco_a2 = $t46479;
                    continue __tco;
                  }
                }
              }
            }
          }
        }
      } else {
        {
          let $t46481;
          {
            const $t1095_i5618 = { $: "Nil" };
            $t46481 = List$reverse_onto$List_Float$List_Float(acc, $t1095_i5618);
          }
          return { _0: $t46481, _1: s };
        }
      }
    }
    return undefined;
  }
}
const Arcade$Synth$render_into$clo = { _0: ($_, s, n, acc) => Arcade$Synth$render_into(s, n, acc) };

function Putt$Cues$voices(c, cue) {
  switch (cue.$) {
    case "PcTap": {
      const $f46523 = cue._0;
      {
        const power = $f46523;
        {
          let $t46488;
          {
            const $t46483 = { $: "WaveTri" };
            {
              let $t46485;
              {
                const $t46484 = (power * 120.);
                $t46485 = (880. + $t46484);
              }
              {
                let $t46487;
                {
                  const $t46486 = (power * 0.05);
                  $t46487 = (0.12 + $t46486);
                }
                {
                  const $t46294_i5630 = c.default_glide;
                  $t46488 = Arcade$Synth$voice(c, $t46483, $t46485, $t46485, $t46294_i5630, $t46487, 0.05, 0.);
                }
              }
            }
          }
          {
            let $t46490;
            {
              const $t46489 = { $: "WaveNoise" };
              {
                const $t46294_i5624 = c.default_glide;
                $t46490 = Arcade$Synth$voice(c, $t46489, 2000., 2000., $t46294_i5624, 0.08, 0.02, 0.);
              }
            }
            {
              const $t46491 = { $: "Nil" };
              {
                const $t46492 = { $: "Cons", _0: $t46490, _1: $t46491 };
                return { $: "Cons", _0: $t46488, _1: $t46492 };
              }
            }
          }
        }
      }
      break;
    }
    case "PcWall": {
      {
        let $t46494;
        {
          const $t46493 = { $: "WaveSquare" };
          {
            const $t46294_i5636 = c.default_glide;
            $t46494 = Arcade$Synth$voice(c, $t46493, 220., 220., $t46294_i5636, 0.12, 0.06, 0.);
          }
        }
        {
          const $t46495 = { $: "Nil" };
          return { $: "Cons", _0: $t46494, _1: $t46495 };
        }
      }
      break;
    }
    case "PcBlock": {
      {
        let $t46497;
        {
          const $t46496 = { $: "WaveTri" };
          {
            const $t46294_i5642 = c.default_glide;
            $t46497 = Arcade$Synth$voice(c, $t46496, 160., 160., $t46294_i5642, 0.2, 0.08, 0.);
          }
        }
        {
          const $t46498 = { $: "Nil" };
          return { $: "Cons", _0: $t46497, _1: $t46498 };
        }
      }
      break;
    }
    case "PcSand": {
      {
        let $t46500;
        {
          const $t46499 = { $: "WaveNoise" };
          {
            const $t46294_i5648 = c.default_glide;
            $t46500 = Arcade$Synth$voice(c, $t46499, 400., 400., $t46294_i5648, 0.08, 0.15, 0.);
          }
        }
        {
          const $t46501 = { $: "Nil" };
          return { $: "Cons", _0: $t46500, _1: $t46501 };
        }
      }
      break;
    }
    case "PcLip": {
      {
        let $t46503;
        {
          const $t46502 = { $: "WaveSine" };
          {
            const $t46296_i5655 = c.default_glide;
            $t46503 = Arcade$Synth$voice(c, $t46502, 700., 500., $t46296_i5655, 0.15, 0.1, 0.);
          }
        }
        {
          const $t46504 = { $: "Nil" };
          return { $: "Cons", _0: $t46503, _1: $t46504 };
        }
      }
      break;
    }
    case "PcDrop": {
      {
        let $t46506;
        {
          const $t46505 = { $: "WaveSine" };
          $t46506 = Arcade$Synth$voice(c, $t46505, 300., 120., 0.12, 0.4, 0.15, 0.);
        }
        {
          const $t46507 = Arcade$Synth$bell(c, 1046., 0.25, 0.1);
          return { $: "Cons", _0: $t46506, _1: $t46507 };
        }
      }
      break;
    }
    case "PcSplash": {
      {
        let $t46509;
        {
          const $t46508 = { $: "WaveNoise" };
          {
            const $t46294_i5675 = c.default_glide;
            $t46509 = Arcade$Synth$voice(c, $t46508, 900., 900., $t46294_i5675, 0.25, 0.3, 0.);
          }
        }
        {
          let $t46511;
          {
            const $t46510 = { $: "WaveSine" };
            $t46511 = Arcade$Synth$voice(c, $t46510, 420., 140., 0.25, 0.2, 0.25, 0.);
          }
          {
            const $t46512 = { $: "Nil" };
            {
              const $t46513 = { $: "Cons", _0: $t46511, _1: $t46512 };
              return { $: "Cons", _0: $t46509, _1: $t46513 };
            }
          }
        }
      }
      break;
    }
    case "PcHoleOut": {
      const $f46524 = cue._0;
      {
        const over = $f46524;
        return Putt$Cues$hole_out(c, over);
      }
      break;
    }
    case "PcCourseOut": {
      {
        const $t46514 = { $: "Nil" };
        {
          const $t46515 = { $: "Cons", _0: 1318., _1: $t46514 };
          {
            const $t46516 = { $: "Cons", _0: 1046., _1: $t46515 };
            {
              const $t46517 = { $: "Cons", _0: 784., _1: $t46516 };
              {
                const $t46518 = { $: "Cons", _0: 659., _1: $t46517 };
                {
                  const $t46519 = { $: "Cons", _0: 523., _1: $t46518 };
                  {
                    const $t46520 = { $: "WaveTri" };
                    {
                      let $t46521;
                      {
                        const $t46313_i5682 = { $: "Nil" };
                        $t46521 = Arcade$Synth$arpeggio_from(c, $t46519, 0, 0.09, 0.2, 0.3, $t46520, $t46313_i5682);
                      }
                      {
                        const $t46522 = Arcade$Synth$bell(c, 1568., 0.25, 0.45);
                        return List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($t46521, $t46522);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Putt$Cues$voices$clo = { _0: ($_, c, cue) => Putt$Cues$voices(c, cue) };

function Putt$Cues$hole_out(c, over) {
  {
    const $t46525 = (over < 0);
    if ($t46525 === true) {
      {
        const $t46526 = { $: "Nil" };
        {
          const $t46527 = { $: "Cons", _0: 1568., _1: $t46526 };
          {
            const $t46528 = { $: "Cons", _0: 1175., _1: $t46527 };
            {
              const $t46529 = { $: "Cons", _0: 988., _1: $t46528 };
              {
                const $t46530 = { $: "Cons", _0: 784., _1: $t46529 };
                {
                  const $t46531 = { $: "WaveTri" };
                  {
                    const $t46313_i5703 = { $: "Nil" };
                    return Arcade$Synth$arpeggio_from(c, $t46530, 0, 0.08, 0.2, 0.25, $t46531, $t46313_i5703);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      {
        const $t46532 = (over === 0);
        {
          const $jp1159_$t46533 = { $: "Nil" };
          if ($t46532 === true) {
            {
              const $t46534 = { $: "Cons", _0: 1175., _1: $jp1159_$t46533 };
              {
                const $t46535 = { $: "Cons", _0: 988., _1: $t46534 };
                {
                  const $t46536 = { $: "Cons", _0: 784., _1: $t46535 };
                  {
                    const $t46537 = { $: "WaveTri" };
                    {
                      const $t46313_i5696 = { $: "Nil" };
                      return Arcade$Synth$arpeggio_from(c, $t46536, 0, 0.08, 0.18, 0.2, $t46537, $t46313_i5696);
                    }
                  }
                }
              }
            }
          } else {
            {
              const $t46539 = { $: "Cons", _0: 349., _1: $jp1159_$t46533 };
              {
                const $t46540 = { $: "Cons", _0: 392., _1: $t46539 };
                {
                  const $t46541 = { $: "WaveSquare" };
                  {
                    const $t46313_i5689 = { $: "Nil" };
                    return Arcade$Synth$arpeggio_from(c, $t46540, 0, 0.12, 0.15, 0.2, $t46541, $t46313_i5689);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Cues$hole_out$clo = { _0: ($_, c, over) => Putt$Cues$hole_out(c, over) };

function Arcade$Float32$pow2($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const e = $tco_a0;
    const acc = $tco_a1;
    {
      const $t47562 = (e > 0);
      if ($t47562 === true) {
        {
          const $t47563 = ((e - 1) < 4611686018427387904 && (e - 1) >= -4611686018427387904 ? (e - 1) : march_int_ovf((e - 1), 1));
          {
            const $t47564 = (acc * 2.);
            {
              $tco_a0 = $t47563;
              $tco_a1 = $t47564;
              continue __tco;
            }
          }
        }
      } else {
        {
          const $t47565 = (e < 0);
          if ($t47565 === true) {
            {
              const $t47566 = ((e + 1) < 4611686018427387904 && (e + 1) >= -4611686018427387904 ? (e + 1) : march_int_ovf((e + 1), 0));
              {
                const $t47567 = (acc * 0.5);
                {
                  $tco_a0 = $t47566;
                  $tco_a1 = $t47567;
                  continue __tco;
                }
              }
            }
          } else {
            return acc;
          }
        }
      }
    }
    return undefined;
  }
}
const Arcade$Float32$pow2$clo = { _0: ($_, e, acc) => Arcade$Float32$pow2(e, acc) };

function Arcade$Float32$f32(c, x) {
  {
    let ax;
    {
      const $t47577 = (x < 0.);
      if ($t47577 === true) {
        ax = (0. - x);
      } else {
        ax = x;
      }
    }
    {
      let $t47579;
      {
        const $t47578 = c.overflow;
        $t47579 = (ax >= $t47578);
      }
      if ($t47579 === true) {
        {
          const $t47580 = (x < 0.);
          if ($t47580 === true) {
            {
              const $t47581 = c.infinity;
              return (0. - $t47581);
            }
          } else {
            {
              const $rc_2597 = c.infinity;
              return $rc_2597;
            }
          }
        }
      } else {
        {
          let $t47583;
          {
            const $t47582 = c.tiny;
            $t47583 = (ax < $t47582);
          }
          if ($t47583 === true) {
            {
              let r;
              {
                let $t47585;
                {
                  const $t47584 = c.subnormal_shift;
                  $t47585 = (x + $t47584);
                }
                {
                  const $t47586 = c.subnormal_shift;
                  r = ($t47585 - $t47586);
                }
              }
              {
                const $t47587 = (r === 0.);
                if ($t47587 === true) {
                  return (x * 0.);
                } else {
                  return r;
                }
              }
            }
          } else {
            {
              let p;
              {
                const $t47588 = c.split;
                p = (x * $t47588);
              }
              {
                const $t47589 = (p - x);
                return (p - $t47589);
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Float32$f32$clo = { _0: ($_, c, x) => Arcade$Float32$f32(c, x) };

function Arcade$Numerics$float_of_text(text) {
  {
    const $t47614 = march_string_to_float(text);
    switch ($t47614.$) {
      case "Some": {
        const $f47615 = $t47614._0;
        {
          const x = $f47615;
          return x;
        }
        break;
      }
      case "None": {
        undefined;
        return (() => { throw new Error("panic"); })();
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Arcade$Numerics$float_of_text$clo = { _0: ($_, text) => Arcade$Numerics$float_of_text(text) };

function main(_f) {
  {
    const $t48170 = { $: "$Clo_$lam0_main$0_main", _0: $lam0_main$apply$0_main };
    {
      const $t48172 = { $: "$Clo_$lam1_main$1_main", _0: $lam1_main$apply$1_main };
      {
        const processor_i13276 = "putt-synth";
        {
          const reset_i13278 = $t48170;
          {
            const serve_i13279 = $t48172;
            {
              const $rc_2581_i13280 = worklet_register$clo._0(worklet_register$clo, "putt-synth", 44100., reset_i13278, serve_i13279);
              return $rc_2581_i13280;
            }
          }
        }
      }
    }
  }
}
const main$clo = { _0: ($_, _f) => main(_f) };

function panic(msg) {
  return (() => { throw new Error(msg); })();
}
const panic$clo = { _0: ($_, msg) => panic(msg) };

function List$drop$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const n = $tco_a1;
    {
      const $t1353 = (n <= 0);
      if ($t1353 === true) {
        return xs;
      } else {
        switch (xs.$) {
          case "Nil": {
            return { $: "Nil" };
            break;
          }
          case "Cons": {
            const $f1355 = xs._0;
            const $f1356 = xs._1;
            {
              const t = $f1356;
              {
                const $t1354 = ((n - 1) < 4611686018427387904 && (n - 1) >= -4611686018427387904 ? (n - 1) : march_int_ovf((n - 1), 1));
                {
                  $tco_a0 = t;
                  $tco_a1 = $t1354;
                  continue __tco;
                }
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      }
    }
    return undefined;
  }
}
const List$drop$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int$clo = { _0: ($_, xs, n) => List$drop$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int(xs, n) };

function List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave(xs, ys) {
  switch (xs.$) {
    case "Nil": {
      return ys;
      break;
    }
    case "Cons": {
      const $f1104 = xs._0;
      const $f1105 = xs._1;
      {
        const t = $f1105;
        {
          const h = $f1104;
          {
            const $trmc11 = { $: "Cons", _0: h, _1: null };
            List$append$dps$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave(t, ys, $trmc11);
            return $trmc11;
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$clo = { _0: ($_, xs, ys) => List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave(xs, ys) };

function List$reverse_onto$List_Float$List_Float($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const lst = $tco_a0;
    const acc = $tco_a1;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1097 = lst._0;
        const $f1098 = lst._1;
        {
          const t = $f1098;
          {
            const h = $f1097;
            {
              const $t1096 = { $: "Cons", _0: h, _1: acc };
              {
                $tco_a0 = t;
                $tco_a1 = $t1096;
                continue __tco;
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const List$reverse_onto$List_Float$List_Float$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_Float$List_Float(lst, acc) };

function List$length_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const lst = $tco_a0;
    const acc = $tco_a1;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1089 = lst._0;
        const $f1090 = lst._1;
        {
          const t = $f1090;
          {
            const $t1088 = ((acc + 1) < 4611686018427387904 && (acc + 1) >= -4611686018427387904 ? (acc + 1) : march_int_ovf((acc + 1), 0));
            {
              $tco_a0 = t;
              $tco_a1 = $t1088;
              continue __tco;
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const List$length_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int$clo = { _0: ($_, lst, acc) => List$length_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int(lst, acc) };

function List$reverse_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const lst = $tco_a0;
    const acc = $tco_a1;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1097 = lst._0;
        const $f1098 = lst._1;
        {
          const t = $f1098;
          {
            const h = $f1097;
            {
              const $t1096 = { $: "Cons", _0: h, _1: acc };
              {
                $tco_a0 = t;
                $tco_a1 = $t1096;
                continue __tco;
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const List$reverse_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave(lst, acc) };

function List$append$dps$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const ys = $tco_a1;
    const $dst = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return ($dst._1 = ys, undefined);
        break;
      }
      case "Cons": {
        const $f1104 = xs._0;
        const $f1105 = xs._1;
        {
          const t = $f1105;
          {
            const h = $f1104;
            {
              const $trmc10 = { $: "Cons", _0: h, _1: null };
              ($dst._1 = $trmc10, undefined);
              {
                $tco_a0 = t;
                $tco_a1 = ys;
                $tco_a2 = $trmc10;
                continue __tco;
              }
            }
          }
        }
        break;
      }
      default: {
        {
          const $trmc8 = (() => { throw new Error("non-exhaustive pattern match"); })();
          return ($dst._1 = $trmc8, undefined);
        }
      }
    }
    return undefined;
  }
}
const List$append$dps$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave(xs, ys, $dst) };

function Arcade$SynthFeed$obey_all$Fn_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_PuttCue_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$R_c_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_drum_Bool_drum_clock_Float_lowpass_Float_rumble_Float_rumble_target_Float_seed_Int_voices_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_AudioCmd_PuttCue($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const voices = $tco_a0;
    const s = $tco_a1;
    const cmds = $tco_a2;
    switch (cmds.$) {
      case "Nil": {
        return s;
        break;
      }
      case "Cons": {
        const $f47881 = cmds._0;
        const $f47882 = cmds._1;
        {
          const rest = $f47882;
          {
            const cmd = $f47881;
            {
              let $t47880;
              {
                const voices_i13525 = voices;
                {
                  const s_i13526 = s;
                  {
                    const cmd_i13527 = cmd;
                    switch (cmd_i13527.$) {
                      case "CmdPlay": {
                        const $f47877_i13528 = cmd_i13527._0;
                        {
                          const c_i13529 = $f47877_i13528;
                          {
                            const $t47875_i13530 = s.c;
                            {
                              const $t47876_i13531 = voices_i13525._0(voices_i13525, $t47875_i13530, c_i13529);
                              {
                                const s_i14463 = s;
                                {
                                  const $t46336_i14465 = s.voices;
                                  {
                                    let all_voices_i14466;
                                    all_voices_i14466 = List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($t46336_i14465, $t47876_i13531);
                                    {
                                      let over_i14470;
                                      {
                                        let $t46337_i14467;
                                        {  };
                                        $t46337_i14467 = List$length_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int(all_voices_i14466, 0);
                                        {
                                          let $t46339_i14469;
                                          {
                                            const $t46338_i14468 = s.c;
                                            $t46339_i14469 = $t46338_i14468.max_voices;
                                          }
                                          over_i14470 = (($t46337_i14467 - $t46339_i14469) < 4611686018427387904 && ($t46337_i14467 - $t46339_i14469) >= -4611686018427387904 ? ($t46337_i14467 - $t46339_i14469) : march_int_ovf(($t46337_i14467 - $t46339_i14469), 1));
                                        }
                                      }
                                      {
                                        const $t46340_i14471 = (over_i14470 > 0);
                                        {
                                          let $t46341_i14472;
                                          if ($t46340_i14471 === true) {
                                            $t46341_i14472 = List$drop$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int(all_voices_i14466, over_i14470);
                                          } else {
                                            $t46341_i14472 = all_voices_i14466;
                                          }
                                          {
                                            const $rc_2514_i14473 = ({ ...s, voices: $t46341_i14472 });
                                            $t47880 = $rc_2514_i14473;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        break;
                      }
                      case "CmdRumble": {
                        const $f47878_i13532 = cmd_i13527._0;
                        {
                          const level_i13533 = $f47878_i13532;
                          {
                            const s_i14474 = s;
                            {
                              let $t46283_i14477;
                              {
                                const $t46282_i14476 = s.c;
                                $t46283_i14477 = Arcade$Synth$f32($t46282_i14476, level_i13533);
                              }
                              {
                                const $rc_2511_i14478 = ({ ...s, rumble_target: $t46283_i14477 });
                                $t47880 = $rc_2511_i14478;
                              }
                            }
                          }
                        }
                        break;
                      }
                      case "CmdDrum": {
                        const $f47879_i13534 = cmd_i13527._0;
                        {
                          const on__i13535 = $f47879_i13534;
                          {
                            const s_i14479 = s;
                            {
                              const $rc_2512_i14481 = ({ ...s, drum: on__i13535 });
                              $t47880 = $rc_2512_i14481;
                            }
                          }
                        }
                        break;
                      }
                      default: {
                        throw new Error("non-exhaustive pattern match");
                        break;
                      }
                    }
                  }
                }
              }
              {
                $tco_a0 = voices;
                $tco_a1 = $t47880;
                $tco_a2 = rest;
                continue __tco;
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const Arcade$SynthFeed$obey_all$Fn_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_PuttCue_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$R_c_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_drum_Bool_drum_clock_Float_lowpass_Float_rumble_Float_rumble_target_Float_seed_Int_voices_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_AudioCmd_PuttCue$clo = { _0: ($_, voices, s, cmds) => Arcade$SynthFeed$obey_all$Fn_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_PuttCue_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$R_c_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_drum_Bool_drum_clock_Float_lowpass_Float_rumble_Float_rumble_target_Float_seed_Int_voices_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_AudioCmd_PuttCue(voices, s, cmds) };

function $lam0_main$apply$0_main($clo) {
  {
    let $t47228_i14326;
    {
      const $t46281_i5832_i14325 = ({ rate: 44100., max_voices: 48, seed: 22222, rumble_follow: 0.0008, lowpass_follow: 0.035, rumble_gain: 0.9, drum_step: 0.055, drum_amp: 0.13, drum_decay: 0.03, min_glide: 0.0001, attack_time: 0.003, square_level: 0.6, default_glide: 0.1 });
      {
        const $t46278_i14451 = { $: "Nil" };
        {
          const $t46280_i14453 = Arcade$Synth$consts_of($t46281_i5832_i14325);
          $t47228_i14326 = ({ voices: $t46278_i14451, lowpass: 0., rumble: 0., drum_clock: 0., seed: 22222, rumble_target: 0., drum: false, c: $t46280_i14453 });
        }
      }
    }
    {
      const $rc_2580_i14327 = synth_cell_put$clo._0(synth_cell_put$clo, $t47228_i14326);
      return $rc_2580_i14327;
    }
  }
}
const $lam0_main$apply$0_main$clo = { _0: ($_, $clo) => $lam0_main$apply$0_main($clo) };

function $lam1_main$apply$1_main($clo, cmds) {
  {
    const voices_i14328 = Putt$Cues$voices$clo;
    {
      let $p47231_i14337;
      {
        const $t47229_i14330 = synth_cell_get();
        {
          const voices_i6392_i14332 = voices_i14328;
          {
            const $t47887_i6396_i14336 = Arcade$SynthFeed$obey_all$Fn_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_PuttCue_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$R_c_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_drum_Bool_drum_clock_Float_lowpass_Float_rumble_Float_rumble_target_Float_seed_Int_voices_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_AudioCmd_PuttCue(voices_i6392_i14332, $t47229_i14330, cmds);
            {
              const $t46482_i14456 = { $: "Nil" };
              $p47231_i14337 = Arcade$Synth$render_into($t47887_i6396_i14336, 128, $t46482_i14456);
            }
          }
        }
      }
      {
        const out_i14338 = $p47231_i14337._0;
        {
          const next_i14339 = $p47231_i14337._1;
          synth_cell_put$clo._0(synth_cell_put$clo, next_i14339);
          return out_i14338;
        }
      }
    }
  }
}
const $lam1_main$apply$1_main$clo = { _0: ($_, $clo, cmds) => $lam1_main$apply$1_main($clo, cmds) };

export { main };
main();
//# sourceMappingURL=putt_synth_worklet.mjs.map
