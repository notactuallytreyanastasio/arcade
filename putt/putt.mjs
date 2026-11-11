import { march_float_round, march_float_to_string, march_int_and, march_int_div, march_int_div_euclid, march_int_div_floor, march_int_mod, march_int_mod_euclid, march_int_mod_floor, march_int_not, march_int_or, march_int_ovf, march_int_popcount, march_int_shl, march_int_shr, march_int_wrapping_add, march_int_wrapping_mul, march_int_wrapping_sub, march_int_xor, march_string_byte_length, march_string_concat3, march_string_concat_n, march_string_join, march_string_pad_left, march_string_to_float, march_unix_time, march_unix_time_ms } from "./march_runtime.mjs";

import { canvas2d_fill_gradient, canvas2d_gradient_stop, canvas2d_radial, canvas2d_arc_full, canvas2d_text_centred, canvas2d_line_join, canvas2d_line_cap, canvas2d_clip_rule, canvas2d_fill_rule, canvas2d_composite, canvas2d_set_transform } from "./arcade_canvas2d.mjs";
import { audio_levels_put, audio_levels_get, audio_send, audio_install } from "./arcade_audio.mjs";
import { march_dom_set_attribute as dom_set_attribute, march_dom_append_child as dom_append_child, march_dom_create_element as dom_create_element, march_dom_body as dom_body, march_dom_get_element_by_id as dom_get_element_by_id } from "./march_dom.mjs";
import { synth_cell_put, synth_cell_get } from "./arcade_synth_cell.mjs";
import { glue_mark, glue_on_visibility, glue_seed_limbs, glue_size_canvas, glue_device_pixel_ratio, glue_view_size, glue_request_frame } from "./arcade_glue.mjs";
import { cell_get, cell_put } from "./arcade_cell.mjs";
import { march_canvas_stroke_text as canvas_stroke_text, march_canvas_fill_text as canvas_fill_text, march_canvas_stroke as canvas_stroke, march_canvas_bezier_curve_to as canvas_bezier_curve_to, march_canvas_quadratic_curve_to as canvas_quadratic_curve_to, march_canvas_line_to as canvas_line_to, march_canvas_move_to as canvas_move_to, march_canvas_close_path as canvas_close_path, march_canvas_begin_path as canvas_begin_path, march_canvas_fill_rect as canvas_fill_rect, march_canvas_set_font as canvas_set_font, march_canvas_set_line_width as canvas_set_line_width, march_canvas_set_stroke_style as canvas_set_stroke_style, march_canvas_set_fill_style as canvas_set_fill_style, march_canvas_restore as canvas_restore, march_canvas_save as canvas_save, march_canvas_get_context as canvas_get_context } from "./march_canvas.mjs";
import { input_on_pointer } from "./arcade_input.mjs";


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
const dom_get_element_by_id$clo = { _0: ($_, p0) => dom_get_element_by_id(p0) };
const dom_body$clo = { _0: ($_, ) => dom_body() };
const dom_create_element$clo = { _0: ($_, p0) => dom_create_element(p0) };
const dom_append_child$clo = { _0: ($_, p0, p1) => dom_append_child(p0, p1) };
const dom_set_attribute$clo = { _0: ($_, p0, p1, p2) => dom_set_attribute(p0, p1, p2) };
const canvas_get_context$clo = { _0: ($_, p0) => canvas_get_context(p0) };
const canvas_save$clo = { _0: ($_, p0) => canvas_save(p0) };
const canvas_restore$clo = { _0: ($_, p0) => canvas_restore(p0) };
const canvas_set_fill_style$clo = { _0: ($_, p0, p1) => canvas_set_fill_style(p0, p1) };
const canvas_set_stroke_style$clo = { _0: ($_, p0, p1) => canvas_set_stroke_style(p0, p1) };
const canvas_set_line_width$clo = { _0: ($_, p0, p1) => canvas_set_line_width(p0, p1) };
const canvas_set_font$clo = { _0: ($_, p0, p1) => canvas_set_font(p0, p1) };
const canvas_fill_rect$clo = { _0: ($_, p0, p1, p2, p3, p4) => canvas_fill_rect(p0, p1, p2, p3, p4) };
const canvas_begin_path$clo = { _0: ($_, p0) => canvas_begin_path(p0) };
const canvas_close_path$clo = { _0: ($_, p0) => canvas_close_path(p0) };
const canvas_move_to$clo = { _0: ($_, p0, p1, p2) => canvas_move_to(p0, p1, p2) };
const canvas_line_to$clo = { _0: ($_, p0, p1, p2) => canvas_line_to(p0, p1, p2) };
const canvas_quadratic_curve_to$clo = { _0: ($_, p0, p1, p2, p3, p4) => canvas_quadratic_curve_to(p0, p1, p2, p3, p4) };
const canvas_bezier_curve_to$clo = { _0: ($_, p0, p1, p2, p3, p4, p5, p6) => canvas_bezier_curve_to(p0, p1, p2, p3, p4, p5, p6) };
const canvas_stroke$clo = { _0: ($_, p0) => canvas_stroke(p0) };
const canvas_fill_text$clo = { _0: ($_, p0, p1, p2, p3) => canvas_fill_text(p0, p1, p2, p3) };
const canvas_stroke_text$clo = { _0: ($_, p0, p1, p2, p3) => canvas_stroke_text(p0, p1, p2, p3) };
const audio_install$clo = { _0: ($_, p0, p1, p2, p3, p4, p5, p6) => audio_install(p0, p1, p2, p3, p4, p5, p6) };
const audio_send$clo = { _0: ($_, p0) => audio_send(p0) };
const audio_levels_get$clo = { _0: ($_, ) => audio_levels_get() };
const audio_levels_put$clo = { _0: ($_, p0) => audio_levels_put(p0) };
const canvas2d_set_transform$clo = { _0: ($_, p0, p1, p2, p3, p4, p5, p6) => canvas2d_set_transform(p0, p1, p2, p3, p4, p5, p6) };
const canvas2d_composite$clo = { _0: ($_, p0, p1) => canvas2d_composite(p0, p1) };
const canvas2d_fill_rule$clo = { _0: ($_, p0, p1) => canvas2d_fill_rule(p0, p1) };
const canvas2d_clip_rule$clo = { _0: ($_, p0, p1) => canvas2d_clip_rule(p0, p1) };
const canvas2d_line_cap$clo = { _0: ($_, p0, p1) => canvas2d_line_cap(p0, p1) };
const canvas2d_line_join$clo = { _0: ($_, p0, p1) => canvas2d_line_join(p0, p1) };
const canvas2d_text_centred$clo = { _0: ($_, p0) => canvas2d_text_centred(p0) };
const canvas2d_arc_full$clo = { _0: ($_, p0, p1, p2, p3, p4) => canvas2d_arc_full(p0, p1, p2, p3, p4) };
const canvas2d_radial$clo = { _0: ($_, p0, p1, p2, p3, p4, p5, p6) => canvas2d_radial(p0, p1, p2, p3, p4, p5, p6) };
const canvas2d_gradient_stop$clo = { _0: ($_, p0, p1) => canvas2d_gradient_stop(p0, p1) };
const canvas2d_fill_gradient$clo = { _0: ($_, p0) => canvas2d_fill_gradient(p0) };
const cell_put$clo = { _0: ($_, p0) => cell_put(p0) };
const cell_get$clo = { _0: ($_, ) => cell_get() };
const glue_request_frame$clo = { _0: ($_, p0) => glue_request_frame(p0) };
const glue_view_size$clo = { _0: ($_, ) => glue_view_size() };
const glue_device_pixel_ratio$clo = { _0: ($_, ) => glue_device_pixel_ratio() };
const glue_size_canvas$clo = { _0: ($_, p0, p1, p2, p3) => glue_size_canvas(p0, p1, p2, p3) };
const glue_seed_limbs$clo = { _0: ($_, ) => glue_seed_limbs() };
const glue_on_visibility$clo = { _0: ($_, p0) => glue_on_visibility(p0) };
const glue_mark$clo = { _0: ($_, p0, p1) => glue_mark(p0, p1) };
const input_on_pointer$clo = { _0: ($_, p0, p1, p2, p3, p4) => input_on_pointer(p0, p1, p2, p3, p4) };
const synth_cell_get$clo = { _0: ($_, ) => synth_cell_get() };
const synth_cell_put$clo = { _0: ($_, p0) => synth_cell_put(p0) };

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

function __eq_Putt$Hud$HudMoment(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HudWaiting": {
      return true;
    }
    case "HudPulling": {
      if (!__eq_Vec2(a._0, b._0)) return false;
      return true;
    }
    case "HudRolling": {
      return true;
    }
  }
  return true;
}

function __eq_Putt$Hud$HudBox(a, b) {
  if (a.left !== b.left) return false;
  if (a.top !== b.top) return false;
  if (a.right !== b.right) return false;
  if (a.bottom !== b.bottom) return false;
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

function __eq_Arcade$Web$Runtime$WebHooks(a, b) {
  if (!__eq_Numerics(a.hook_num, b.hook_num)) return false;
  if (a.hook_boot !== b.hook_boot) return false;
  if (a.hook_update !== b.hook_update) return false;
  if (a.hook_perform !== b.hook_perform) return false;
  if (a.hook_tick !== b.hook_tick) return false;
  if (a.hook_resize !== b.hook_resize) return false;
  if (a.hook_down !== b.hook_down) return false;
  if (a.hook_move !== b.hook_move) return false;
  if (a.hook_up !== b.hook_up) return false;
  if (!__eq_Option(a.hook_cancel, b.hook_cancel)) return false;
  if (a.hook_listen !== b.hook_listen) return false;
  if (a.hook_visible !== b.hook_visible) return false;
  if (a.hook_scene !== b.hook_scene) return false;
  if (a.hook_overlay !== b.hook_overlay) return false;
  if (a.hook_settle !== b.hook_settle) return false;
  if (a.hook_marks !== b.hook_marks) return false;
  return true;
}

function __eq_Arcade$Web$Runtime$WebRun(a, b) {
  if (a.run_model !== b.run_model) return false;
  if (!__eq_Js$Dom$Node(a.run_canvas, b.run_canvas)) return false;
  if (!__eq_Js$Canvas$Context(a.run_ctx, b.run_ctx)) return false;
  if (a.run_width !== b.run_width) return false;
  if (a.run_height !== b.run_height) return false;
  if (a.run_dpr !== b.run_dpr) return false;
  return true;
}

function __eq_Arcade$Vec3$Vec3(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.z !== b.z) return false;
  return true;
}

function __eq_Arcade$Camera$Pose(a, b) {
  if (!__eq_Vec3(a.eye, b.eye)) return false;
  if (!__eq_Vec3(a.target, b.target)) return false;
  if (!__eq_Vec3(a.up, b.up)) return false;
  return true;
}

function __eq_Arcade$Camera$Lens(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Perspective": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Orthographic": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Camera$Rig(a, b) {
  if (!__eq_Pose(a.pose, b.pose)) return false;
  if (!__eq_Lens(a.lens, b.lens)) return false;
  return true;
}

function __eq_Arcade$Camera$Viewport(a, b) {
  if (a.width !== b.width) return false;
  if (a.height !== b.height) return false;
  return true;
}

function __eq_Arcade$Camera$Projection(a, b) {
  if (!__eq_Vec3(a.eye, b.eye)) return false;
  if (!__eq_Vec3(a.forward, b.forward)) return false;
  if (!__eq_Vec3(a.right, b.right)) return false;
  if (!__eq_Vec3(a.up, b.up)) return false;
  if (!__eq_Lens(a.lens, b.lens)) return false;
  if (a.half !== b.half) return false;
  if (a.aspect !== b.aspect) return false;
  if (a.width !== b.width) return false;
  if (a.height !== b.height) return false;
  return true;
}

function __eq_Arcade$Camera$Seen(a, b) {
  if (a.across !== b.across) return false;
  if (a.rise !== b.rise) return false;
  if (a.depth !== b.depth) return false;
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

function __eq_Arcade$Float32$F32Consts(a, b) {
  if (a.split !== b.split) return false;
  if (a.tiny !== b.tiny) return false;
  if (a.subnormal_shift !== b.subnormal_shift) return false;
  if (a.overflow !== b.overflow) return false;
  if (a.infinity !== b.infinity) return false;
  return true;
}

function __eq_Arcade$Html$Prop(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Prop": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Arcade$Html$Html(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Tag": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
    case "Words": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
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

function __eq_Arcade$Svg$OpenClip(a, b) {
  if (!__eq_List(a.before_rev, b.before_rev)) return false;
  if (a.clip_id !== b.clip_id) return false;
  if (!__eq_Shape(a.clip_shape, b.clip_shape)) return false;
  return true;
}

function __eq_Arcade$Svg$Built(a, b) {
  if (!__eq_List(a.made_rev, b.made_rev)) return false;
  if (!__eq_List(a.open_clips, b.open_clips)) return false;
  if (!__eq_List(a.left, b.left)) return false;
  if (a.next_clip !== b.next_clip) return false;
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

function __eq_PuttPlayback(a, b) {
  if (!__eq_PuttState(a.from_state, b.from_state)) return false;
  if (!__eq_PuttTurn(a.turn, b.turn)) return false;
  if (a.began !== b.began) return false;
  if (a.reached !== b.reached) return false;
  return true;
}

function __eq_PuttDrag(a, b) {
  if (!__eq_Vec2(a.pressed, b.pressed)) return false;
  if (!__eq_Vec2(a.now, b.now)) return false;
  return true;
}

function __eq_PuttModel(a, b) {
  if (!__eq_PuttRules(a.rs, b.rs)) return false;
  if (!__eq_AimTuning(a.aim, b.aim)) return false;
  if (!__eq_PuttState(a.game, b.game)) return false;
  if (a.view_w !== b.view_w) return false;
  if (a.view_h !== b.view_h) return false;
  if (!__eq_Option(a.drag, b.drag)) return false;
  if (!__eq_Option(a.shown, b.shown)) return false;
  if (a.putts !== b.putts) return false;
  return true;
}

function __eq_PuttMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PmTick": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "PmResize": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PmDown": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "PmMove": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "PmUp": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "PmCancel": {
      return true;
    }
    case "PmVisible": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_PuttFx(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PfAudio": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Held(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HeldModel": {
      if (!__eq_PuttModel(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function $mutco_Putt$Hud$scored($tco_tag, $tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    switch ($tco_tag) {
    case 0: {
      const pars = $tco_a0;
      const strokes = $tco_a1;
      const acc = $tco_a2;
      {
        const $t47216 = { _0: pars, _1: strokes };
        const $f47225 = $t47216._0;
        const $f47226 = $t47216._1;
        switch ($f47225.$) {
          case "Cons": {
            const $f47231 = $f47225._0;
            const $f47232 = $f47225._1;
            {
              let $jp_clo47258;
              $jp_clo47258 = { $: "$Clo_$jp13_Putt_Hud_scored$0_Putt_Hud_scored", _0: $jp13_Putt_Hud_scored$apply$0_Putt_Hud_scored, _1: $f47226, _2: $f47232, _3: acc };
              switch ($f47226.$) {
                case "Cons": {
                  const $f47259 = $f47226._0;
                  const $f47260 = $f47226._1;
                  switch ($f47259.$) {
                    case "Some": {
                      const $f47263 = $f47259._0;
                      {
                        const rest = $f47260;
                        {
                          const n = $f47263;
                          {
                            const more = $f47232;
                            {
                              const p = $f47231;
                              {
                                let ink;
                                {
                                  const $t47217 = (n < p);
                                  if ($t47217 === true) {
                                    ink = Arcade$Draw$hex(8311626);
                                  } else {
                                    {
                                      const $t47218 = (n === p);
                                      if ($t47218 === true) {
                                        ink = Arcade$Draw$hex(16119280);
                                      } else {
                                        ink = Arcade$Draw$hex(16747646);
                                      }
                                    }
                                  }
                                }
                                {
                                  const $t47219 = String(n);
                                  {
                                    const $t47220 = { _0: $t47219, _1: ink };
                                    {
                                      const $t47221 = { $: "Cons", _0: $t47220, _1: acc };
                                      {
                                        $tco_tag = 0;
                                        $tco_a0 = more;
                                        $tco_a1 = rest;
                                        $tco_a2 = $t47221;
                                        continue __tco;
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
                      {
                        $tco_tag = 1;
                        $tco_a0 = $jp_clo47258;
                        continue __tco;
                      }
                    }
                  }
                  break;
                }
                default: {
                  {
                    $tco_tag = 1;
                    $tco_a0 = $jp_clo47258;
                    continue __tco;
                  }
                }
              }
            }
            break;
          }
          default: {
            {
              const $t1095_i6011 = { $: "Nil" };
              return List$reverse_onto$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int(acc, $t1095_i6011);
            }
          }
        }
      }
      return undefined;
    }
    case 1: {
      const $clo = $tco_a0;
      {
        const $f47226 = $clo._1;
        {
          const $f47232 = $clo._2;
          {
            const acc = $clo._3;
            {
              let $jp_clo47244;
              $jp_clo47244 = { $: "$Clo_$jp7_Putt_Hud_scored$1_Putt_Hud_scored", _0: $jp7_Putt_Hud_scored$apply$1_Putt_Hud_scored, _1: acc };
              switch ($f47226.$) {
                case "Cons": {
                  const $f47245 = $f47226._0;
                  const $f47246 = $f47226._1;
                  switch ($f47245.$) {
                    case "None": {
                      {
                        const rest = $f47246;
                        {
                          let more;
                          more = $f47232;
                          {
                            let $t47222;
                            {
                              const $t46909_i9597 = Arcade$Draw$hex(16119280);
                              $t47222 = Arcade$Draw$with_alpha($t46909_i9597, 0.7);
                            }
                            {
                              const $t47223 = { _0: "-", _1: $t47222 };
                              {
                                let $t47224;
                                $t47224 = { $: "Cons", _0: $t47223, _1: acc };
                                {
                                  $tco_tag = 0;
                                  $tco_a0 = more;
                                  $tco_a1 = rest;
                                  $tco_a2 = $t47224;
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
                      return $jp7_Putt_Hud_scored$apply$1_Putt_Hud_scored($jp_clo47244);
                    }
                  }
                  break;
                }
                default: {
                  return $jp7_Putt_Hud_scored$apply$1_Putt_Hud_scored($jp_clo47244);
                }
              }
            }
          }
        }
      }
      return undefined;
    }
    }
    throw new Error("mutual-TCO dispatch: bad tag");
  }
}
function Putt$Hud$scored(pars, strokes, acc) {
  return $mutco_Putt$Hud$scored(0, pars, strokes, acc);
}
const Putt$Hud$scored$clo = { _0: ($_, pars, strokes, acc) => Putt$Hud$scored(pars, strokes, acc) };

function $jp13_Putt_Hud_scored$apply$0_Putt_Hud_scored($clo) {
  return $mutco_Putt$Hud$scored(1, $clo, undefined, undefined);
}
const $jp13_Putt_Hud_scored$apply$0_Putt_Hud_scored$clo = { _0: ($_, $clo) => $jp13_Putt_Hud_scored$apply$0_Putt_Hud_scored($clo) };

function Arcade$Vec2$add(a, b) {
  {
    let $t45912;
    {
      const $t45910 = a.x;
      {
        const $t45911 = b.x;
        $t45912 = ($t45910 + $t45911);
      }
    }
    {
      let $t45915;
      {
        const $t45913 = a.y;
        {
          const $t45914 = b.y;
          $t45915 = ($t45913 + $t45914);
        }
      }
      return ({ x: $t45912, y: $t45915 });
    }
  }
}
const Arcade$Vec2$add$clo = { _0: ($_, a, b) => Arcade$Vec2$add(a, b) };

function Arcade$Vec2$sub(a, b) {
  {
    let $t45918;
    {
      const $t45916 = a.x;
      {
        const $t45917 = b.x;
        $t45918 = ($t45916 - $t45917);
      }
    }
    {
      let $t45921;
      {
        const $t45919 = a.y;
        {
          const $t45920 = b.y;
          $t45921 = ($t45919 - $t45920);
        }
      }
      return ({ x: $t45918, y: $t45921 });
    }
  }
}
const Arcade$Vec2$sub$clo = { _0: ($_, a, b) => Arcade$Vec2$sub(a, b) };

function Arcade$Vec2$scale(a, k) {
  {
    let $t45923;
    {
      const $t45922 = a.x;
      $t45923 = ($t45922 * k);
    }
    {
      let $t45925;
      {
        const $t45924 = a.y;
        $t45925 = ($t45924 * k);
      }
      return ({ x: $t45923, y: $t45925 });
    }
  }
}
const Arcade$Vec2$scale$clo = { _0: ($_, a, k) => Arcade$Vec2$scale(a, k) };

function Arcade$Vec2$dot(a, b) {
  {
    let $t45932;
    {
      const $t45930 = a.x;
      {
        const $t45931 = b.x;
        $t45932 = ($t45930 * $t45931);
      }
    }
    {
      let $t45935;
      {
        const $t45933 = a.y;
        {
          const $t45934 = b.y;
          $t45935 = ($t45933 * $t45934);
        }
      }
      return ($t45932 + $t45935);
    }
  }
}
const Arcade$Vec2$dot$clo = { _0: ($_, a, b) => Arcade$Vec2$dot(a, b) };

function Arcade$Vec2$length(a) {
  {
    let $t45942;
    {
      let $t45938;
      {
        const $t45936 = a.x;
        {
          const $t45937 = a.x;
          $t45938 = ($t45936 * $t45937);
        }
      }
      {
        let $t45941;
        {
          const $t45939 = a.y;
          {
            const $t45940 = a.y;
            $t45941 = ($t45939 * $t45940);
          }
        }
        $t45942 = ($t45938 + $t45941);
      }
    }
    return Math.sqrt($t45942);
  }
}
const Arcade$Vec2$length$clo = { _0: ($_, a) => Arcade$Vec2$length(a) };

function Arcade$Vec2$normalized(a) {
  {
    let l;
    l = Arcade$Vec2$length(a);
    {
      const $t45943 = (l === 0.);
      if ($t45943 === true) {
        return ({ x: 0., y: 0. });
      } else {
        {
          let $t45945;
          {
            const $t45944 = a.x;
            $t45945 = ($t45944 / l);
          }
          {
            let $t45947;
            {
              const $t45946 = a.y;
              $t45947 = ($t45946 / l);
            }
            return ({ x: $t45945, y: $t45947 });
          }
        }
      }
    }
  }
}
const Arcade$Vec2$normalized$clo = { _0: ($_, a) => Arcade$Vec2$normalized(a) };

function Putt$Aim$strength(a, pulled) {
  {
    let $t45953;
    {
      let $t45949;
      {
        const $t45948 = a.dead;
        $t45949 = (pulled - $t45948);
      }
      {
        let $t45952;
        {
          const $t45950 = a.full;
          {
            const $t45951 = a.dead;
            $t45952 = ($t45950 - $t45951);
          }
        }
        $t45953 = ($t45949 / $t45952);
      }
    }
    {
      let $t48417_i5180;
      {
        const $t48415_i15407 = (0. >= $t45953);
        if ($t48415_i15407 === true) {
          $t48417_i5180 = 0.;
        } else {
          $t48417_i5180 = $t45953;
        }
      }
      {
        const $t48416_i15404 = (1. < $t48417_i5180);
        if ($t48416_i15404 === true) {
          return 1.;
        } else {
          return $t48417_i5180;
        }
      }
    }
  }
}
const Putt$Aim$strength$clo = { _0: ($_, a, pulled) => Putt$Aim$strength(a, pulled) };

function Putt$Aim$shot_of_pull(rs, a, pull) {
  {
    let pulled;
    pulled = Arcade$Vec2$length(pull);
    {
      let $t45963;
      {
        const $t45962 = a.dead;
        $t45963 = (pulled > $t45962);
      }
      if ($t45963 === true) {
        {
          let $t45972;
          {
            let $t45969;
            {
              let $t45967;
              {
                let $t45965;
                {
                  const $t45964 = pull.x;
                  $t45965 = (-$t45964);
                }
                {
                  const $t45966 = pull.y;
                  $t45967 = ({ x: $t45965, y: $t45966 });
                }
              }
              {
                const $t45968 = (1. / pulled);
                $t45969 = Arcade$Vec2$scale($t45967, $t45968);
              }
            }
            {
              let $t45971;
              {
                const $t45970 = Putt$Aim$strength(a, pulled);
                {
                  const rs_i13650 = rs;
                  {
                    let $t45955_i13653;
                    {
                      const $t45954_i13652 = rs.tune;
                      $t45955_i13653 = $t45954_i13652.min_power;
                    }
                    {
                      let $t45961_i13659;
                      {
                        let $t45960_i13658;
                        {
                          let $t45957_i13655;
                          {
                            const $t45956_i13654 = rs.tune;
                            $t45957_i13655 = $t45956_i13654.max_power;
                          }
                          {
                            let $t45959_i13657;
                            {
                              const $t45958_i13656 = rs.tune;
                              $t45959_i13657 = $t45958_i13656.min_power;
                            }
                            $t45960_i13658 = ($t45957_i13655 - $t45959_i13657);
                          }
                        }
                        $t45961_i13659 = ($t45970 * $t45960_i13658);
                      }
                      $t45971 = ($t45955_i13653 + $t45961_i13659);
                    }
                  }
                }
              }
              $t45972 = ({ aim: $t45969, power: $t45971 });
            }
          }
          return { $: "Some", _0: $t45972 };
        }
      } else {
        return { $: "None" };
      }
    }
  }
}
const Putt$Aim$shot_of_pull$clo = { _0: ($_, rs, a, pull) => Putt$Aim$shot_of_pull(rs, a, pull) };

function Putt$Aim$first_bounce($tco_a0) {
  __tco: for (;;) {
    const met = $tco_a0;
    switch (met.$) {
      case "Nil": {
        return { $: "None" };
        break;
      }
      case "Cons": {
        const $f45997 = met._0;
        const $f45998 = met._1;
        {
          const rest = $f45998;
          {
            const m = $f45997;
            {
              const $t45994 = m.ev;
              switch ($t45994.$) {
                case "BumpWall": {
                  {
                    const $t45995 = m.at;
                    return { $: "Some", _0: $t45995 };
                  }
                  break;
                }
                case "BumpBlock": {
                  {
                    const $t45996 = m.at;
                    return { $: "Some", _0: $t45996 };
                  }
                  break;
                }
                case "BumpSand": {
                  {
                    $tco_a0 = rest;
                    continue __tco;
                  }
                  break;
                }
                case "BumpLip": {
                  {
                    $tco_a0 = rest;
                    continue __tco;
                  }
                  break;
                }
                case "BumpCup": {
                  {
                    $tco_a0 = rest;
                    continue __tco;
                  }
                  break;
                }
                case "BumpWater": {
                  {
                    $tco_a0 = rest;
                    continue __tco;
                  }
                  break;
                }
                default: {
                  return (() => { throw new Error("non-exhaustive pattern match"); })();
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
const Putt$Aim$first_bounce$clo = { _0: ($_, met) => Putt$Aim$first_bounce(met) };

function Putt$Aim$leg($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const path = $tco_a0;
    const until = $tco_a1;
    const acc = $tco_a2;
    switch (path.$) {
      case "Nil": {
        {
          const $t1095_i5190 = { $: "Nil" };
          return List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float(acc, $t1095_i5190);
        }
        break;
      }
      case "Cons": {
        const $f46007 = path._0;
        const $f46008 = path._1;
        {
          const rest = $f46008;
          {
            const p = $f46007;
            {
              let $t46004;
              {
                const $t46003 = p.sampled_at;
                $t46004 = ($t46003 <= until);
              }
              if ($t46004 === true) {
                {
                  const $t46005 = p.point;
                  {
                    let $t46006;
                    $t46006 = { $: "Cons", _0: $t46005, _1: acc };
                    {
                      $tco_a0 = rest;
                      $tco_a1 = until;
                      $tco_a2 = $t46006;
                      continue __tco;
                    }
                  }
                }
              } else {
                {
                  const $t1095_i5192 = { $: "Nil" };
                  return List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float(acc, $t1095_i5192);
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
const Putt$Aim$leg$clo = { _0: ($_, path, until, acc) => Putt$Aim$leg(path, until, acc) };

function Putt$Aim$run($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const from = $tco_a0;
    const ps = $tco_a1;
    const acc = $tco_a2;
    switch (ps.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f46016 = ps._0;
        const $f46017 = ps._1;
        {
          const rest = $f46017;
          {
            const p = $f46016;
            {
              let $t46015;
              {
                let $t46014;
                {
                  let $t46013;
                  $t46013 = Arcade$Vec2$sub(p, from);
                  $t46014 = Arcade$Vec2$length($t46013);
                }
                $t46015 = (acc + $t46014);
              }
              {
                $tco_a0 = p;
                $tco_a1 = rest;
                $tco_a2 = $t46015;
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
const Putt$Aim$run$clo = { _0: ($_, from, ps, acc) => Putt$Aim$run(from, ps, acc) };

function Putt$Aim$last_point($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const from = $tco_a0;
    const ps = $tco_a1;
    switch (ps.$) {
      case "Nil": {
        return from;
        break;
      }
      case "Cons": {
        const $f46022 = ps._0;
        const $f46023 = ps._1;
        {
          const rest = $f46023;
          {
            const p = $f46022;
            {
              $tco_a0 = p;
              $tco_a1 = rest;
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
const Putt$Aim$last_point$clo = { _0: ($_, from, ps) => Putt$Aim$last_point(from, ps) };

function Putt$Aim$thinned($tco_a0, $tco_a1, $tco_a2, $tco_a3) {
  __tco: for (;;) {
    const ps = $tco_a0;
    const every = $tco_a1;
    const i = $tco_a2;
    const acc = $tco_a3;
    switch (ps.$) {
      case "Nil": {
        {
          const $t1095_i5194 = { $: "Nil" };
          return List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float(acc, $t1095_i5194);
        }
        break;
      }
      case "Cons": {
        const $f46033 = ps._0;
        const $f46034 = ps._1;
        switch ($f46034.$) {
          case "Nil": {
            {
              const $t1095_i5196 = { $: "Nil" };
              return List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float(acc, $t1095_i5196);
            }
            break;
          }
          default: {
            {
              const rest = $f46034;
              {
                const p = $f46033;
                {
                  let $t46029;
                  {
                    const $t46028 = (i % every);
                    $t46029 = ($t46028 === 0);
                  }
                  {
                    const $jp1150_$t46030 = ((i + 1) < 4611686018427387904 && (i + 1) >= -4611686018427387904 ? (i + 1) : march_int_ovf((i + 1), 0));
                    if ($t46029 === true) {
                      {
                        const $t46031 = { $: "Cons", _0: p, _1: acc };
                        {
                          $tco_a0 = rest;
                          $tco_a1 = every;
                          $tco_a2 = $jp1150_$t46030;
                          $tco_a3 = $t46031;
                          continue __tco;
                        }
                      }
                    } else {
                      {
                        $tco_a0 = rest;
                        $tco_a1 = every;
                        $tco_a2 = $jp1150_$t46030;
                        $tco_a3 = acc;
                        continue __tco;
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
    return undefined;
  }
}
const Putt$Aim$thinned$clo = { _0: ($_, ps, every, i, acc) => Putt$Aim$thinned(ps, every, i, acc) };

function Putt$Aim$preview(rs, a, h, ball, shot) {
  {
    let end_;
    {
      const $t46043 = rs.tune;
      {
        const $t46044 = ({ x: 0., y: 0. });
        {
          let $t46048;
          {
            let $t46046;
            {
              const $t46045 = shot.aim;
              $t46046 = Arcade$Vec2$normalized($t46045);
            }
            {
              const $t46047 = shot.power;
              $t46048 = Arcade$Vec2$scale($t46046, $t46047);
            }
          }
          end_ = Putt$Roll$roll($t46043, h, $t46044, ball, $t46048);
        }
      }
    }
    {
      let cut;
      {
        const $t46049 = end_.met;
        cut = Putt$Aim$first_bounce($t46049);
      }
      {
        let until;
        switch (cut.$) {
          case "Some": {
            const $f46050 = cut._0;
            {
              let t;
              t = $f46050;
              until = t;
            }
            break;
          }
          case "None": {
            until = end_.took;
            break;
          }
          default: {
            throw new Error("non-exhaustive pattern match");
            break;
          }
        }
        {
          const $t46051 = end_.path;
          {
            const $t46052 = { $: "Nil" };
            {
              let $t46053;
              $t46053 = Putt$Aim$leg($t46051, until, $t46052);
              {
                let points;
                switch ($t46053.$) {
                  case "Nil": {
                    points = { $: "Nil" };
                    break;
                  }
                  case "Cons": {
                    const $f46054 = $t46053._0;
                    const $f46055 = $t46053._1;
                    {
                      const after_ball = $f46055;
                      points = after_ball;
                    }
                    break;
                  }
                  default: {
                    throw new Error("non-exhaustive pattern match");
                    break;
                  }
                }
                {
                  const $t46060 = a.dot_every;
                  {
                    const $t46061 = { $: "Nil" };
                    {
                      let $t46062;
                      $t46062 = Putt$Aim$thinned(points, $t46060, 1, $t46061);
                      {
                        let $t46063;
                        $t46063 = Putt$Aim$last_point(ball, points);
                        {
                          const $t46064 = Putt$Aim$run(ball, points, 0.);
                          {
                            let $t46067;
                            {
                              const $t46065 = end_.holed;
                              {
                                let $t46066;
                                switch (cut.$) {
                                  case "None": {
                                    $t46066 = true;
                                    break;
                                  }
                                  case "Some": {
                                    const $f967_i13663 = cut._0;
                                    $t46066 = false;
                                    break;
                                  }
                                  default: {
                                    throw new Error("non-exhaustive pattern match");
                                    break;
                                  }
                                }
                                $t46067 = ($t46065 && $t46066);
                              }
                            }
                            {
                              let $t46068;
                              {
                                let $rc_2501;
                                switch (cut.$) {
                                  case "Some": {
                                    const $f966_i13661 = cut._0;
                                    $rc_2501 = true;
                                    break;
                                  }
                                  case "None": {
                                    $rc_2501 = false;
                                    break;
                                  }
                                  default: {
                                    throw new Error("non-exhaustive pattern match");
                                    break;
                                  }
                                }
                                $t46068 = $rc_2501;
                              }
                              {
                                let $rc_2503;
                                $rc_2503 = ({ shot: shot, dots: $t46062, ends: $t46063, reach: $t46064, holes: $t46067, bounces: $t46068 });
                                return $rc_2503;
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
const Putt$Aim$preview$clo = { _0: ($_, rs, a, h, ball, shot) => Putt$Aim$preview(rs, a, h, ball, shot) };

function Putt$Course$inside(b, p) {
  {
    let $t46084;
    {
      let $t46079;
      {
        let $t46074;
        {
          const $t46071 = p.x;
          {
            let $t46073;
            {
              const $t46072 = b.lo;
              $t46073 = $t46072.x;
            }
            $t46074 = ($t46071 >= $t46073);
          }
        }
        {
          let $t46078;
          {
            const $t46075 = p.x;
            {
              let $t46077;
              {
                const $t46076 = b.hi;
                $t46077 = $t46076.x;
              }
              $t46078 = ($t46075 <= $t46077);
            }
          }
          $t46079 = ($t46074 && $t46078);
        }
      }
      {
        let $t46083;
        {
          const $t46080 = p.y;
          {
            let $t46082;
            {
              const $t46081 = b.lo;
              $t46082 = $t46081.y;
            }
            $t46083 = ($t46080 >= $t46082);
          }
        }
        $t46084 = ($t46079 && $t46083);
      }
    }
    {
      let $t46088;
      {
        const $t46085 = p.y;
        {
          let $t46087;
          {
            const $t46086 = b.hi;
            $t46087 = $t46086.y;
          }
          $t46088 = ($t46085 <= $t46087);
        }
      }
      return ($t46084 && $t46088);
    }
  }
}
const Putt$Course$inside$clo = { _0: ($_, b, p) => Putt$Course$inside(b, p) };

function Putt$Course$inside_any($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const bs = $tco_a0;
    const p = $tco_a1;
    switch (bs.$) {
      case "Nil": {
        return false;
        break;
      }
      case "Cons": {
        const $f46090 = bs._0;
        const $f46091 = bs._1;
        {
          const rest = $f46091;
          {
            const b = $f46090;
            {
              let $t46089;
              $t46089 = Putt$Course$inside(b, p);
              if ($t46089 === true) {
                return true;
              } else {
                {
                  $tco_a0 = rest;
                  $tco_a1 = p;
                  continue __tco;
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
const Putt$Course$inside_any$clo = { _0: ($_, bs, p) => Putt$Course$inside_any(bs, p) };

function Putt$Course$pull_at($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const ss = $tco_a0;
    const p = $tco_a1;
    switch (ss.$) {
      case "Nil": {
        return ({ x: 0., y: 0. });
        break;
      }
      case "Cons": {
        const $f46102 = ss._0;
        const $f46103 = ss._1;
        {
          const rest = $f46103;
          {
            const s = $f46102;
            {
              let $t46099;
              {
                const $t46098 = s.area;
                $t46099 = Putt$Course$inside($t46098, p);
              }
              if ($t46099 === true) {
                {
                  const $t46100 = s.pull;
                  {
                    const $t46101 = Putt$Course$pull_at(rest, p);
                    return Arcade$Vec2$add($t46100, $t46101);
                  }
                }
              } else {
                {
                  $tco_a0 = rest;
                  $tco_a1 = p;
                  continue __tco;
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
const Putt$Course$pull_at$clo = { _0: ($_, ss, p) => Putt$Course$pull_at(ss, p) };

function Putt$Course$corners(b) {
  {
    const $t46108 = b.lo;
    {
      let $t46113;
      {
        let $t46110;
        {
          const $t46109 = b.hi;
          $t46110 = $t46109.x;
        }
        {
          let $t46112;
          {
            const $t46111 = b.lo;
            $t46112 = $t46111.y;
          }
          $t46113 = ({ x: $t46110, y: $t46112 });
        }
      }
      {
        const $t46114 = b.hi;
        {
          let $t46119;
          {
            let $t46116;
            {
              const $t46115 = b.lo;
              $t46116 = $t46115.x;
            }
            {
              let $t46118;
              {
                const $t46117 = b.hi;
                $t46118 = $t46117.y;
              }
              $t46119 = ({ x: $t46116, y: $t46118 });
            }
          }
          {
            const $t46120 = { $: "Nil" };
            {
              const $t46121 = { $: "Cons", _0: $t46119, _1: $t46120 };
              {
                let $t46122;
                $t46122 = { $: "Cons", _0: $t46114, _1: $t46121 };
                {
                  const $t46123 = { $: "Cons", _0: $t46113, _1: $t46122 };
                  return { $: "Cons", _0: $t46108, _1: $t46123 };
                }
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Course$corners$clo = { _0: ($_, b) => Putt$Course$corners(b) };

function Putt$Course$home() {
  {
    const $t46202 = ({ x: 0.7, y: 0.6 });
    {
      const $t46203 = ({ x: 3.4, y: 6. });
      {
        let $t46204;
        {
          const $t46069_i5373 = ({ x: 0., y: 2.4 });
          {
            const $t46070_i5374 = ({ x: 2.9, y: 2.7 });
            $t46204 = ({ lo: $t46069_i5373, hi: $t46070_i5374 });
          }
        }
        {
          let $t46205;
          {
            const $t46069_i5367 = ({ x: 1.3, y: 4.6 });
            {
              const $t46070_i5368 = ({ x: 4.2, y: 4.9 });
              $t46205 = ({ lo: $t46069_i5367, hi: $t46070_i5368 });
            }
          }
          {
            const $t46206 = { $: "Nil" };
            {
              const $t46207 = { $: "Cons", _0: $t46205, _1: $t46206 };
              {
                const $t46208 = { $: "Cons", _0: $t46204, _1: $t46207 };
                {
                  let $t46209;
                  {
                    const $t46069_i5361 = ({ x: 1.3, y: 3.3 });
                    {
                      const $t46070_i5362 = ({ x: 2.3, y: 4. });
                      $t46209 = ({ lo: $t46069_i5361, hi: $t46070_i5362 });
                    }
                  }
                  {
                    const $t46210 = { $: "Nil" };
                    {
                      const $t46211 = { $: "Cons", _0: $t46209, _1: $t46210 };
                      {
                        let $t46212;
                        {
                          const $t46069_i5355 = ({ x: 3.3, y: 3.2 });
                          {
                            const $t46070_i5356 = ({ x: 4.2, y: 4.6 });
                            $t46212 = ({ lo: $t46069_i5355, hi: $t46070_i5356 });
                          }
                        }
                        {
                          let $t46213;
                          {
                            const $t46069_i5349 = ({ x: 2., y: 6.7 });
                            {
                              const $t46070_i5350 = ({ x: 4.2, y: 7.2 });
                              $t46213 = ({ lo: $t46069_i5349, hi: $t46070_i5350 });
                            }
                          }
                          {
                            const $t46214 = { $: "Nil" };
                            {
                              const $t46215 = { $: "Cons", _0: $t46213, _1: $t46214 };
                              {
                                const $t46216 = { $: "Cons", _0: $t46212, _1: $t46215 };
                                {
                                  let $t46217;
                                  {
                                    let $t46096_i5343;
                                    {
                                      const $t46069_i15478 = ({ x: 1.6, y: 4.9 });
                                      {
                                        const $t46070_i15479 = ({ x: 4.2, y: 6.7 });
                                        $t46096_i5343 = ({ lo: $t46069_i15478, hi: $t46070_i15479 });
                                      }
                                    }
                                    {
                                      const $t46097_i5344 = ({ x: 0., y: 0.25 });
                                      $t46217 = ({ area: $t46096_i5343, pull: $t46097_i5344 });
                                    }
                                  }
                                  {
                                    const $t46218 = { $: "Nil" };
                                    {
                                      const $t46219 = { $: "Cons", _0: $t46217, _1: $t46218 };
                                      return ({ title: "Home", par: 4, width: 4.2, length: 7.2, tee: $t46202, cup: $t46203, blocks: $t46208, sands: $t46211, waters: $t46216, slopes: $t46219, gust: 1. });
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
  }
}
const Putt$Course$home$clo = { _0: ($_) => Putt$Course$home() };

function Putt$Course$holes() {
  {
    let $t46220;
    {
      const $t46126_i5449 = ({ x: 0.8, y: 0.6 });
      {
        const $t46127_i5450 = ({ x: 0.8, y: 5.2 });
        {
          const $t46128_i5451 = { $: "Nil" };
          {
            const $t46129_i5452 = { $: "Nil" };
            {
              const $t46130_i5453 = { $: "Nil" };
              {
                const $t46131_i5454 = { $: "Nil" };
                $t46220 = ({ title: "Straight", par: 2, width: 1.6, length: 6., tee: $t46126_i5449, cup: $t46127_i5450, blocks: $t46128_i5451, sands: $t46129_i5452, waters: $t46130_i5453, slopes: $t46131_i5454, gust: 1. });
              }
            }
          }
        }
      }
    }
    {
      let $t46221;
      {
        const $t46132_i5441 = ({ x: 1.2, y: 0.6 });
        {
          const $t46133_i5442 = ({ x: 1.2, y: 5.6 });
          {
            const $t46134_i5443 = { $: "Nil" };
            {
              let $t46135_i5444;
              {
                const $t46069_i15610 = ({ x: 0.6, y: 2.6 });
                {
                  const $t46070_i15611 = ({ x: 2.4, y: 4.2 });
                  $t46135_i5444 = ({ lo: $t46069_i15610, hi: $t46070_i15611 });
                }
              }
              {
                const $t46136_i5445 = { $: "Nil" };
                {
                  const $t46137_i5446 = { $: "Cons", _0: $t46135_i5444, _1: $t46136_i5445 };
                  {
                    const $t46138_i5447 = { $: "Nil" };
                    {
                      const $t46139_i5448 = { $: "Nil" };
                      $t46221 = ({ title: "Bunker", par: 3, width: 2.4, length: 6.5, tee: $t46132_i5441, cup: $t46133_i5442, blocks: $t46134_i5443, sands: $t46137_i5446, waters: $t46138_i5447, slopes: $t46139_i5448, gust: 1. });
                    }
                  }
                }
              }
            }
          }
        }
      }
      {
        let $t46222;
        {
          const $t46140_i5433 = ({ x: 1.5, y: 0.6 });
          {
            const $t46141_i5434 = ({ x: 1.5, y: 5.2 });
            {
              let $t46142_i5435;
              {
                const $t46069_i15600 = ({ x: 0.5, y: 2.7 });
                {
                  const $t46070_i15601 = ({ x: 2.5, y: 3.1 });
                  $t46142_i5435 = ({ lo: $t46069_i15600, hi: $t46070_i15601 });
                }
              }
              {
                const $t46143_i5436 = { $: "Nil" };
                {
                  const $t46144_i5437 = { $: "Cons", _0: $t46142_i5435, _1: $t46143_i5436 };
                  {
                    const $t46145_i5438 = { $: "Nil" };
                    {
                      const $t46146_i5439 = { $: "Nil" };
                      {
                        const $t46147_i5440 = { $: "Nil" };
                        $t46222 = ({ title: "Bank", par: 3, width: 3., length: 6., tee: $t46140_i5433, cup: $t46141_i5434, blocks: $t46144_i5437, sands: $t46145_i5438, waters: $t46146_i5439, slopes: $t46147_i5440, gust: 1. });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        {
          let $t46223;
          {
            const $t46148_i5423 = ({ x: 0.6, y: 0.8 });
            {
              const $t46149_i5424 = ({ x: 3.2, y: 4.3 });
              {
                let $t46150_i5425;
                {
                  const $t46069_i15590 = ({ x: 0., y: 1.6 });
                  {
                    const $t46070_i15591 = ({ x: 2.4, y: 5. });
                    $t46150_i5425 = ({ lo: $t46069_i15590, hi: $t46070_i15591 });
                  }
                }
                {
                  const $t46151_i5426 = { $: "Nil" };
                  {
                    const $t46152_i5427 = { $: "Cons", _0: $t46150_i5425, _1: $t46151_i5426 };
                    {
                      let $t46153_i5428;
                      {
                        const $t46069_i15584 = ({ x: 3.4, y: 0. });
                        {
                          const $t46070_i15585 = ({ x: 4., y: 1.4 });
                          $t46153_i5428 = ({ lo: $t46069_i15584, hi: $t46070_i15585 });
                        }
                      }
                      {
                        const $t46154_i5429 = { $: "Nil" };
                        {
                          const $t46155_i5430 = { $: "Cons", _0: $t46153_i5428, _1: $t46154_i5429 };
                          {
                            const $t46156_i5431 = { $: "Nil" };
                            {
                              const $t46157_i5432 = { $: "Nil" };
                              $t46223 = ({ title: "Dogleg", par: 3, width: 4., length: 5., tee: $t46148_i5423, cup: $t46149_i5424, blocks: $t46152_i5427, sands: $t46155_i5430, waters: $t46156_i5431, slopes: $t46157_i5432, gust: 1. });
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
          {
            let $t46224;
            {
              const $t46158_i5413 = ({ x: 1.6, y: 0.6 });
              {
                const $t46159_i5414 = ({ x: 1.6, y: 5.7 });
                {
                  const $t46160_i5415 = { $: "Nil" };
                  {
                    let $t46161_i5416;
                    {
                      const $t46069_i15574 = ({ x: 0., y: 2.6 });
                      {
                        const $t46070_i15575 = ({ x: 0.9, y: 3.8 });
                        $t46161_i5416 = ({ lo: $t46069_i15574, hi: $t46070_i15575 });
                      }
                    }
                    {
                      const $t46162_i5417 = { $: "Nil" };
                      {
                        const $t46163_i5418 = { $: "Cons", _0: $t46161_i5416, _1: $t46162_i5417 };
                        {
                          let $t46164_i5419;
                          {
                            const $t46069_i15568 = ({ x: 0.9, y: 2.4 });
                            {
                              const $t46070_i15569 = ({ x: 2.6, y: 4. });
                              $t46164_i5419 = ({ lo: $t46069_i15568, hi: $t46070_i15569 });
                            }
                          }
                          {
                            const $t46165_i5420 = { $: "Nil" };
                            {
                              const $t46166_i5421 = { $: "Cons", _0: $t46164_i5419, _1: $t46165_i5420 };
                              {
                                const $t46167_i5422 = { $: "Nil" };
                                $t46224 = ({ title: "Pond", par: 3, width: 3.2, length: 6.5, tee: $t46158_i5413, cup: $t46159_i5414, blocks: $t46160_i5415, sands: $t46163_i5418, waters: $t46166_i5421, slopes: $t46167_i5422, gust: 1. });
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
            {
              let $t46225;
              {
                const $t46168_i5401 = ({ x: 1.5, y: 0.6 });
                {
                  const $t46169_i5402 = ({ x: 1.5, y: 5.6 });
                  {
                    let $t46170_i5403;
                    {
                      const $t46069_i15558 = ({ x: 0.6, y: 2. });
                      {
                        const $t46070_i15559 = ({ x: 3., y: 2.3 });
                        $t46170_i5403 = ({ lo: $t46069_i15558, hi: $t46070_i15559 });
                      }
                    }
                    {
                      let $t46171_i5404;
                      {
                        const $t46069_i15552 = ({ x: 0., y: 4. });
                        {
                          const $t46070_i15553 = ({ x: 2.4, y: 4.3 });
                          $t46171_i5404 = ({ lo: $t46069_i15552, hi: $t46070_i15553 });
                        }
                      }
                      {
                        const $t46172_i5405 = { $: "Nil" };
                        {
                          const $t46173_i5406 = { $: "Cons", _0: $t46171_i5404, _1: $t46172_i5405 };
                          {
                            const $t46174_i5407 = { $: "Cons", _0: $t46170_i5403, _1: $t46173_i5406 };
                            {
                              let $t46175_i5408;
                              {
                                const $t46069_i15546 = ({ x: 1., y: 2.8 });
                                {
                                  const $t46070_i15547 = ({ x: 2., y: 3.5 });
                                  $t46175_i5408 = ({ lo: $t46069_i15546, hi: $t46070_i15547 });
                                }
                              }
                              {
                                const $t46176_i5409 = { $: "Nil" };
                                {
                                  const $t46177_i5410 = { $: "Cons", _0: $t46175_i5408, _1: $t46176_i5409 };
                                  {
                                    const $t46178_i5411 = { $: "Nil" };
                                    {
                                      const $t46179_i5412 = { $: "Nil" };
                                      $t46225 = ({ title: "Chicane", par: 3, width: 3., length: 6.5, tee: $t46168_i5401, cup: $t46169_i5402, blocks: $t46174_i5407, sands: $t46177_i5410, waters: $t46178_i5411, slopes: $t46179_i5412, gust: 1. });
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
              {
                let $t46226;
                {
                  const $t46180_i5391 = ({ x: 1.4, y: 0.6 });
                  {
                    const $t46181_i5392 = ({ x: 1.3, y: 5.5 });
                    {
                      const $t46182_i5393 = { $: "Nil" };
                      {
                        const $t46183_i5394 = { $: "Nil" };
                        {
                          let $t46184_i5395;
                          {
                            const $t46069_i15536 = ({ x: 2.6, y: 3.6 });
                            {
                              const $t46070_i15537 = ({ x: 3.2, y: 6. });
                              $t46184_i5395 = ({ lo: $t46069_i15536, hi: $t46070_i15537 });
                            }
                          }
                          {
                            const $t46185_i5396 = { $: "Nil" };
                            {
                              const $t46186_i5397 = { $: "Cons", _0: $t46184_i5395, _1: $t46185_i5396 };
                              {
                                let $t46187_i5398;
                                {
                                  let $t46096_i15530;
                                  {
                                    const $t46069_i5207_i15528 = ({ x: 0., y: 3. });
                                    {
                                      const $t46070_i5208_i15529 = ({ x: 3.2, y: 6.5 });
                                      $t46096_i15530 = ({ lo: $t46069_i5207_i15528, hi: $t46070_i5208_i15529 });
                                    }
                                  }
                                  {
                                    const $t46097_i15531 = ({ x: 0.3, y: 0. });
                                    $t46187_i5398 = ({ area: $t46096_i15530, pull: $t46097_i15531 });
                                  }
                                }
                                {
                                  const $t46188_i5399 = { $: "Nil" };
                                  {
                                    const $t46189_i5400 = { $: "Cons", _0: $t46187_i5398, _1: $t46188_i5399 };
                                    $t46226 = ({ title: "Sidehill", par: 3, width: 3.2, length: 6.5, tee: $t46180_i5391, cup: $t46181_i5392, blocks: $t46182_i5393, sands: $t46183_i5394, waters: $t46186_i5397, slopes: $t46189_i5400, gust: 1. });
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
                {
                  let $t46227;
                  {
                    const $t46190_i5379 = ({ x: 1.8, y: 0.6 });
                    {
                      const $t46191_i5380 = ({ x: 1.8, y: 6. });
                      {
                        const $t46192_i5381 = { $: "Nil" };
                        {
                          const $t46193_i5382 = { $: "Nil" };
                          {
                            let $t46194_i5383;
                            {
                              const $t46069_i15516 = ({ x: 0., y: 2.6 });
                              {
                                const $t46070_i15517 = ({ x: 1.5, y: 5. });
                                $t46194_i5383 = ({ lo: $t46069_i15516, hi: $t46070_i15517 });
                              }
                            }
                            {
                              let $t46195_i5384;
                              {
                                const $t46069_i15510 = ({ x: 2.1, y: 2.6 });
                                {
                                  const $t46070_i15511 = ({ x: 3.6, y: 5. });
                                  $t46195_i5384 = ({ lo: $t46069_i15510, hi: $t46070_i15511 });
                                }
                              }
                              {
                                let $t46196_i5385;
                                {
                                  const $t46069_i15504 = ({ x: 1., y: 6.6 });
                                  {
                                    const $t46070_i15505 = ({ x: 2.6, y: 7.2 });
                                    $t46196_i5385 = ({ lo: $t46069_i15504, hi: $t46070_i15505 });
                                  }
                                }
                                {
                                  const $t46197_i5386 = { $: "Nil" };
                                  {
                                    const $t46198_i5387 = { $: "Cons", _0: $t46196_i5385, _1: $t46197_i5386 };
                                    {
                                      const $t46199_i5388 = { $: "Cons", _0: $t46195_i5384, _1: $t46198_i5387 };
                                      {
                                        const $t46200_i5389 = { $: "Cons", _0: $t46194_i5383, _1: $t46199_i5388 };
                                        {
                                          const $t46201_i5390 = { $: "Nil" };
                                          $t46227 = ({ title: "Causeway", par: 3, width: 3.6, length: 7.2, tee: $t46190_i5379, cup: $t46191_i5380, blocks: $t46192_i5381, sands: $t46193_i5382, waters: $t46200_i5389, slopes: $t46201_i5390, gust: 3. });
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
                  {
                    const $t46228 = Putt$Course$home();
                    {
                      const $t46229 = { $: "Nil" };
                      {
                        const $t46230 = { $: "Cons", _0: $t46228, _1: $t46229 };
                        {
                          const $t46231 = { $: "Cons", _0: $t46227, _1: $t46230 };
                          {
                            const $t46232 = { $: "Cons", _0: $t46226, _1: $t46231 };
                            {
                              const $t46233 = { $: "Cons", _0: $t46225, _1: $t46232 };
                              {
                                const $t46234 = { $: "Cons", _0: $t46224, _1: $t46233 };
                                {
                                  const $t46235 = { $: "Cons", _0: $t46223, _1: $t46234 };
                                  {
                                    const $t46236 = { $: "Cons", _0: $t46222, _1: $t46235 };
                                    {
                                      const $t46237 = { $: "Cons", _0: $t46221, _1: $t46236 };
                                      return { $: "Cons", _0: $t46220, _1: $t46237 };
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
  }
}
const Putt$Course$holes$clo = { _0: ($_) => Putt$Course$holes() };

function Putt$Course$hole_count() {
  {
    let $t46238;
    {
      let $t46220_i5456;
      {
        const $t46126_i15718 = ({ x: 0.8, y: 0.6 });
        {
          const $t46127_i15719 = ({ x: 0.8, y: 5.2 });
          {
            const $t46128_i15720 = { $: "Nil" };
            {
              const $t46129_i15721 = { $: "Nil" };
              {
                const $t46130_i15722 = { $: "Nil" };
                {
                  const $t46131_i15723 = { $: "Nil" };
                  $t46220_i5456 = ({ title: "Straight", par: 2, width: 1.6, length: 6., tee: $t46126_i15718, cup: $t46127_i15719, blocks: $t46128_i15720, sands: $t46129_i15721, waters: $t46130_i15722, slopes: $t46131_i15723, gust: 1. });
                }
              }
            }
          }
        }
      }
      {
        let $t46221_i5457;
        {
          const $t46132_i15708 = ({ x: 1.2, y: 0.6 });
          {
            const $t46133_i15709 = ({ x: 1.2, y: 5.6 });
            {
              const $t46134_i15710 = { $: "Nil" };
              {
                let $t46135_i15713;
                {
                  const $t46069_i5227_i15711 = ({ x: 0.6, y: 2.6 });
                  {
                    const $t46070_i5228_i15712 = ({ x: 2.4, y: 4.2 });
                    $t46135_i15713 = ({ lo: $t46069_i5227_i15711, hi: $t46070_i5228_i15712 });
                  }
                }
                {
                  const $t46136_i15714 = { $: "Nil" };
                  {
                    const $t46137_i15715 = { $: "Cons", _0: $t46135_i15713, _1: $t46136_i15714 };
                    {
                      const $t46138_i15716 = { $: "Nil" };
                      {
                        const $t46139_i15717 = { $: "Nil" };
                        $t46221_i5457 = ({ title: "Bunker", par: 3, width: 2.4, length: 6.5, tee: $t46132_i15708, cup: $t46133_i15709, blocks: $t46134_i15710, sands: $t46137_i15715, waters: $t46138_i15716, slopes: $t46139_i15717, gust: 1. });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        {
          let $t46222_i5458;
          {
            const $t46140_i15698 = ({ x: 1.5, y: 0.6 });
            {
              const $t46141_i15699 = ({ x: 1.5, y: 5.2 });
              {
                let $t46142_i15702;
                {
                  const $t46069_i5237_i15700 = ({ x: 0.5, y: 2.7 });
                  {
                    const $t46070_i5238_i15701 = ({ x: 2.5, y: 3.1 });
                    $t46142_i15702 = ({ lo: $t46069_i5237_i15700, hi: $t46070_i5238_i15701 });
                  }
                }
                {
                  const $t46143_i15703 = { $: "Nil" };
                  {
                    const $t46144_i15704 = { $: "Cons", _0: $t46142_i15702, _1: $t46143_i15703 };
                    {
                      const $t46145_i15705 = { $: "Nil" };
                      {
                        const $t46146_i15706 = { $: "Nil" };
                        {
                          const $t46147_i15707 = { $: "Nil" };
                          $t46222_i5458 = ({ title: "Bank", par: 3, width: 3., length: 6., tee: $t46140_i15698, cup: $t46141_i15699, blocks: $t46144_i15704, sands: $t46145_i15705, waters: $t46146_i15706, slopes: $t46147_i15707, gust: 1. });
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          {
            let $t46223_i5459;
            {
              const $t46148_i15684 = ({ x: 0.6, y: 0.8 });
              {
                const $t46149_i15685 = ({ x: 3.2, y: 4.3 });
                {
                  let $t46150_i15688;
                  {
                    const $t46069_i5253_i15686 = ({ x: 0., y: 1.6 });
                    {
                      const $t46070_i5254_i15687 = ({ x: 2.4, y: 5. });
                      $t46150_i15688 = ({ lo: $t46069_i5253_i15686, hi: $t46070_i5254_i15687 });
                    }
                  }
                  {
                    const $t46151_i15689 = { $: "Nil" };
                    {
                      const $t46152_i15690 = { $: "Cons", _0: $t46150_i15688, _1: $t46151_i15689 };
                      {
                        let $t46153_i15693;
                        {
                          const $t46069_i5247_i15691 = ({ x: 3.4, y: 0. });
                          {
                            const $t46070_i5248_i15692 = ({ x: 4., y: 1.4 });
                            $t46153_i15693 = ({ lo: $t46069_i5247_i15691, hi: $t46070_i5248_i15692 });
                          }
                        }
                        {
                          const $t46154_i15694 = { $: "Nil" };
                          {
                            const $t46155_i15695 = { $: "Cons", _0: $t46153_i15693, _1: $t46154_i15694 };
                            {
                              const $t46156_i15696 = { $: "Nil" };
                              {
                                const $t46157_i15697 = { $: "Nil" };
                                $t46223_i5459 = ({ title: "Dogleg", par: 3, width: 4., length: 5., tee: $t46148_i15684, cup: $t46149_i15685, blocks: $t46152_i15690, sands: $t46155_i15695, waters: $t46156_i15696, slopes: $t46157_i15697, gust: 1. });
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
            {
              let $t46224_i5460;
              {
                const $t46158_i15670 = ({ x: 1.6, y: 0.6 });
                {
                  const $t46159_i15671 = ({ x: 1.6, y: 5.7 });
                  {
                    const $t46160_i15672 = { $: "Nil" };
                    {
                      let $t46161_i15675;
                      {
                        const $t46069_i5269_i15673 = ({ x: 0., y: 2.6 });
                        {
                          const $t46070_i5270_i15674 = ({ x: 0.9, y: 3.8 });
                          $t46161_i15675 = ({ lo: $t46069_i5269_i15673, hi: $t46070_i5270_i15674 });
                        }
                      }
                      {
                        const $t46162_i15676 = { $: "Nil" };
                        {
                          const $t46163_i15677 = { $: "Cons", _0: $t46161_i15675, _1: $t46162_i15676 };
                          {
                            let $t46164_i15680;
                            {
                              const $t46069_i5263_i15678 = ({ x: 0.9, y: 2.4 });
                              {
                                const $t46070_i5264_i15679 = ({ x: 2.6, y: 4. });
                                $t46164_i15680 = ({ lo: $t46069_i5263_i15678, hi: $t46070_i5264_i15679 });
                              }
                            }
                            {
                              const $t46165_i15681 = { $: "Nil" };
                              {
                                const $t46166_i15682 = { $: "Cons", _0: $t46164_i15680, _1: $t46165_i15681 };
                                {
                                  const $t46167_i15683 = { $: "Nil" };
                                  $t46224_i5460 = ({ title: "Pond", par: 3, width: 3.2, length: 6.5, tee: $t46158_i15670, cup: $t46159_i15671, blocks: $t46160_i15672, sands: $t46163_i15677, waters: $t46166_i15682, slopes: $t46167_i15683, gust: 1. });
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
              {
                let $t46225_i5461;
                {
                  const $t46168_i15652 = ({ x: 1.5, y: 0.6 });
                  {
                    const $t46169_i15653 = ({ x: 1.5, y: 5.6 });
                    {
                      let $t46170_i15656;
                      {
                        const $t46069_i5291_i15654 = ({ x: 0.6, y: 2. });
                        {
                          const $t46070_i5292_i15655 = ({ x: 3., y: 2.3 });
                          $t46170_i15656 = ({ lo: $t46069_i5291_i15654, hi: $t46070_i5292_i15655 });
                        }
                      }
                      {
                        let $t46171_i15659;
                        {
                          const $t46069_i5285_i15657 = ({ x: 0., y: 4. });
                          {
                            const $t46070_i5286_i15658 = ({ x: 2.4, y: 4.3 });
                            $t46171_i15659 = ({ lo: $t46069_i5285_i15657, hi: $t46070_i5286_i15658 });
                          }
                        }
                        {
                          const $t46172_i15660 = { $: "Nil" };
                          {
                            const $t46173_i15661 = { $: "Cons", _0: $t46171_i15659, _1: $t46172_i15660 };
                            {
                              const $t46174_i15662 = { $: "Cons", _0: $t46170_i15656, _1: $t46173_i15661 };
                              {
                                let $t46175_i15665;
                                {
                                  const $t46069_i5279_i15663 = ({ x: 1., y: 2.8 });
                                  {
                                    const $t46070_i5280_i15664 = ({ x: 2., y: 3.5 });
                                    $t46175_i15665 = ({ lo: $t46069_i5279_i15663, hi: $t46070_i5280_i15664 });
                                  }
                                }
                                {
                                  const $t46176_i15666 = { $: "Nil" };
                                  {
                                    const $t46177_i15667 = { $: "Cons", _0: $t46175_i15665, _1: $t46176_i15666 };
                                    {
                                      const $t46178_i15668 = { $: "Nil" };
                                      {
                                        const $t46179_i15669 = { $: "Nil" };
                                        $t46225_i5461 = ({ title: "Chicane", par: 3, width: 3., length: 6.5, tee: $t46168_i15652, cup: $t46169_i15653, blocks: $t46174_i15662, sands: $t46177_i15667, waters: $t46178_i15668, slopes: $t46179_i15669, gust: 1. });
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
                {
                  let $t46226_i5462;
                  {
                    const $t46180_i15638 = ({ x: 1.4, y: 0.6 });
                    {
                      const $t46181_i15639 = ({ x: 1.3, y: 5.5 });
                      {
                        const $t46182_i15640 = { $: "Nil" };
                        {
                          const $t46183_i15641 = { $: "Nil" };
                          {
                            let $t46184_i15644;
                            {
                              const $t46069_i5309_i15642 = ({ x: 2.6, y: 3.6 });
                              {
                                const $t46070_i5310_i15643 = ({ x: 3.2, y: 6. });
                                $t46184_i15644 = ({ lo: $t46069_i5309_i15642, hi: $t46070_i5310_i15643 });
                              }
                            }
                            {
                              const $t46185_i15645 = { $: "Nil" };
                              {
                                const $t46186_i15646 = { $: "Cons", _0: $t46184_i15644, _1: $t46185_i15645 };
                                {
                                  let $t46187_i15649;
                                  {
                                    let $t46096_i5303_i15647;
                                    {
                                      const $t46069_i16199 = ({ x: 0., y: 3. });
                                      {
                                        const $t46070_i16200 = ({ x: 3.2, y: 6.5 });
                                        $t46096_i5303_i15647 = ({ lo: $t46069_i16199, hi: $t46070_i16200 });
                                      }
                                    }
                                    {
                                      const $t46097_i5304_i15648 = ({ x: 0.3, y: 0. });
                                      $t46187_i15649 = ({ area: $t46096_i5303_i15647, pull: $t46097_i5304_i15648 });
                                    }
                                  }
                                  {
                                    const $t46188_i15650 = { $: "Nil" };
                                    {
                                      const $t46189_i15651 = { $: "Cons", _0: $t46187_i15649, _1: $t46188_i15650 };
                                      $t46226_i5462 = ({ title: "Sidehill", par: 3, width: 3.2, length: 6.5, tee: $t46180_i15638, cup: $t46181_i15639, blocks: $t46182_i15640, sands: $t46183_i15641, waters: $t46186_i15646, slopes: $t46189_i15651, gust: 1. });
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
                  {
                    let $t46227_i5463;
                    {
                      const $t46190_i15620 = ({ x: 1.8, y: 0.6 });
                      {
                        const $t46191_i15621 = ({ x: 1.8, y: 6. });
                        {
                          const $t46192_i15622 = { $: "Nil" };
                          {
                            const $t46193_i15623 = { $: "Nil" };
                            {
                              let $t46194_i15626;
                              {
                                const $t46069_i5331_i15624 = ({ x: 0., y: 2.6 });
                                {
                                  const $t46070_i5332_i15625 = ({ x: 1.5, y: 5. });
                                  $t46194_i15626 = ({ lo: $t46069_i5331_i15624, hi: $t46070_i5332_i15625 });
                                }
                              }
                              {
                                let $t46195_i15629;
                                {
                                  const $t46069_i5325_i15627 = ({ x: 2.1, y: 2.6 });
                                  {
                                    const $t46070_i5326_i15628 = ({ x: 3.6, y: 5. });
                                    $t46195_i15629 = ({ lo: $t46069_i5325_i15627, hi: $t46070_i5326_i15628 });
                                  }
                                }
                                {
                                  let $t46196_i15632;
                                  {
                                    const $t46069_i5319_i15630 = ({ x: 1., y: 6.6 });
                                    {
                                      const $t46070_i5320_i15631 = ({ x: 2.6, y: 7.2 });
                                      $t46196_i15632 = ({ lo: $t46069_i5319_i15630, hi: $t46070_i5320_i15631 });
                                    }
                                  }
                                  {
                                    const $t46197_i15633 = { $: "Nil" };
                                    {
                                      const $t46198_i15634 = { $: "Cons", _0: $t46196_i15632, _1: $t46197_i15633 };
                                      {
                                        const $t46199_i15635 = { $: "Cons", _0: $t46195_i15629, _1: $t46198_i15634 };
                                        {
                                          const $t46200_i15636 = { $: "Cons", _0: $t46194_i15626, _1: $t46199_i15635 };
                                          {
                                            const $t46201_i15637 = { $: "Nil" };
                                            $t46227_i5463 = ({ title: "Causeway", par: 3, width: 3.6, length: 7.2, tee: $t46190_i15620, cup: $t46191_i15621, blocks: $t46192_i15622, sands: $t46193_i15623, waters: $t46200_i15636, slopes: $t46201_i15637, gust: 3. });
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
                    {
                      const $t46228_i5464 = Putt$Course$home();
                      {
                        const $t46229_i5465 = { $: "Nil" };
                        {
                          const $t46230_i5466 = { $: "Cons", _0: $t46228_i5464, _1: $t46229_i5465 };
                          {
                            const $t46231_i5467 = { $: "Cons", _0: $t46227_i5463, _1: $t46230_i5466 };
                            {
                              const $t46232_i5468 = { $: "Cons", _0: $t46226_i5462, _1: $t46231_i5467 };
                              {
                                const $t46233_i5469 = { $: "Cons", _0: $t46225_i5461, _1: $t46232_i5468 };
                                {
                                  const $t46234_i5470 = { $: "Cons", _0: $t46224_i5460, _1: $t46233_i5469 };
                                  {
                                    const $t46235_i5471 = { $: "Cons", _0: $t46223_i5459, _1: $t46234_i5470 };
                                    {
                                      const $t46236_i5472 = { $: "Cons", _0: $t46222_i5458, _1: $t46235_i5471 };
                                      {
                                        const $t46237_i5473 = { $: "Cons", _0: $t46221_i5457, _1: $t46236_i5472 };
                                        $t46238 = { $: "Cons", _0: $t46220_i5456, _1: $t46237_i5473 };
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
    }
    {
      let $rc_2504;
      {  };
      $rc_2504 = List$length_onto$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int($t46238, 0);
      return $rc_2504;
    }
  }
}
const Putt$Course$hole_count$clo = { _0: ($_) => Putt$Course$hole_count() };

function Arcade$Synth$consts_of(t) {
  {
    let r;
    {
      let $t48915_i5542;
      {
        const $t48914_i5541 = march_int_ovf(-(126), 3);
        $t48915_i5542 = Arcade$Float32$pow2($t48914_i5541, 1.);
      }
      {
        let $t48917_i5544;
        {
          const $t48916_i5543 = march_int_ovf(-(97), 3);
          $t48917_i5544 = Arcade$Float32$pow2($t48916_i5543, 1.5);
        }
        {
          let $t48920_i5547;
          {
            const $t48918_i5545 = Arcade$Float32$pow2(128, 1.);
            {
              const $t48919_i5546 = Arcade$Float32$pow2(103, 1.);
              $t48920_i5547 = ($t48918_i5545 - $t48919_i5546);
            }
          }
          {
            let $t48922_i5549;
            {
              const $t48921_i5548 = Arcade$Float32$pow2(1023, 1.);
              $t48922_i5549 = ($t48921_i5548 * 2.);
            }
            r = ({ split: 536870913., tiny: $t48915_i5542, subnormal_shift: $t48917_i5544, overflow: $t48920_i5547, infinity: $t48922_i5549 });
          }
        }
      }
    }
    {
      let n;
      {
        const $t48973_i5534 = Arcade$Numerics$float_of_text("3.141592653589793");
        {
          const $t48974_i5535 = Arcade$Numerics$float_of_text("6.283185307179586");
          {
            const $t48975_i5536 = Arcade$Numerics$float_of_text("1.1102230246251565e-16");
            {
              let $t48977_i5538;
              {
                const $t48976_i5537 = Arcade$Numerics$float_of_text("1e308");
                $t48977_i5538 = ($t48976_i5537 * 10.);
              }
              {
                let $t48979_i5540;
                {
                  const $t48978_i5539 = (-1.);
                  $t48979_i5540 = Math.sqrt($t48978_i5539);
                }
                n = ({ pi: $t48973_i5534, tau: $t48974_i5535, unit53: $t48975_i5536, floor_u1: 1e-12, infinity: $t48977_i5538, nan: $t48979_i5540 });
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
                const $t48939_i5531 = (nearest_i5530 > $t46252);
                if ($t48939_i5531 === true) {
                  {
                    let $t48941_i5533;
                    {
                      const $t48940_i5532 = march_int_ovf(-(22), 3);
                      $t48941_i5533 = Arcade$Float32$pow2($t48940_i5532, 1.);
                    }
                    $t46253 = (nearest_i5530 - $t48941_i5533);
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
                const $t48415_i5567 = ($t46288 >= $t46287);
                if ($t48415_i5567 === true) {
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
                    const c_i16025 = c;
                    {
                      let $t46299_i16030;
                      {
                        const $t46297_i16028 = i;
                        {
                          let $t46298_i16029;
                          $t46298_i16029 = Arcade$Synth$f32(c, step);
                          $t46299_i16030 = ($t46297_i16028 * $t46298_i16029);
                        }
                      }
                      $t46304 = Arcade$Synth$f32(c, $t46299_i16030);
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
            const c_i13664 = c;
            {
              const $t46275_i13666 = c.round;
              {
                const $t48936_i5552_i13669 = Math.sin($t46351);
                $t46352 = Arcade$Float32$f32($t46275_i13666, $t48936_i5552_i13669);
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
                    const $t48416_i5606 = ($t46371 < 1.);
                    if ($t48416_i5606 === true) {
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
                    const $t48416_i5603 = ($t46388 < 1.);
                    if ($t48416_i5603 === true) {
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
                      const c_i13670 = c;
                      {
                        const $t46276_i13672 = c.round;
                        {
                          const $t48937_i5555_i13675 = Math.exp($t46393);
                          envelope = Arcade$Float32$f32($t46276_i13672, $t48937_i5555_i13675);
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
                const $t48942_i5616 = ($t46465 === 0.);
                if ($t48942_i5616 === true) {
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
                          const $t48416_i5614 = ($t46471 < 1.);
                          if ($t48416_i5614 === true) {
                            $t46472 = $t46471;
                          } else {
                            $t46472 = 1.;
                          }
                        }
                      }
                      {
                        const $t48415_i5611 = ($t46472 >= $t46470);
                        if ($t48415_i5611 === true) {
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

function Putt$Cues$audio_of(rs, e) {
  switch (e.$) {
    case "PuttStruck": {
      const $f46570 = e._0;
      {
        const shot = $f46570;
        {
          let $t46547;
          {
            let $t46546;
            {
              const $t46545 = shot.power;
              $t46546 = { $: "PcTap", _0: $t46545 };
            }
            $t46547 = { $: "CmdPlay", _0: $t46546 };
          }
          {
            let $t46550;
            {
              let $t46549;
              {
                const $t46548 = shot.power;
                {
                  const rs_i13676 = rs;
                  {
                    const $t46542_i13678 = (0.25 * $t46548);
                    {
                      let $t46544_i13680;
                      {
                        const $t46543_i13679 = rs.tune;
                        $t46544_i13680 = $t46543_i13679.max_power;
                      }
                      $t46549 = ($t46542_i13678 / $t46544_i13680);
                    }
                  }
                }
              }
              $t46550 = { $: "CmdRumble", _0: $t46549 };
            }
            {
              const $t46551 = { $: "Nil" };
              {
                const $t46552 = { $: "Cons", _0: $t46550, _1: $t46551 };
                {
                  const $rc_2525 = { $: "Cons", _0: $t46547, _1: $t46552 };
                  return $rc_2525;
                }
              }
            }
          }
        }
      }
      break;
    }
    case "PuttMet": {
      const $f46571 = e._0;
      {
        const m = $f46571;
        {
          let $t46555;
          {
            let $t46554;
            {
              const $t46553 = m.ev;
              switch ($t46553.$) {
                case "BumpWall": {
                  $t46554 = { $: "PcWall" };
                  break;
                }
                case "BumpBlock": {
                  $t46554 = { $: "PcBlock" };
                  break;
                }
                case "BumpSand": {
                  $t46554 = { $: "PcSand" };
                  break;
                }
                case "BumpLip": {
                  $t46554 = { $: "PcLip" };
                  break;
                }
                case "BumpCup": {
                  $t46554 = { $: "PcDrop" };
                  break;
                }
                case "BumpWater": {
                  $t46554 = { $: "PcSplash" };
                  break;
                }
                default: {
                  throw new Error("non-exhaustive pattern match");
                  break;
                }
              }
            }
            $t46555 = { $: "CmdPlay", _0: $t46554 };
          }
          {
            const $t46556 = { $: "Nil" };
            {
              const $rc_2527 = { $: "Cons", _0: $t46555, _1: $t46556 };
              return $rc_2527;
            }
          }
        }
      }
      break;
    }
    case "PuttRested": {
      const $f46572 = e._0;
      const $f46573 = e._1;
      {
        const $t46557 = { $: "CmdRumble", _0: 0. };
        {
          const $t46558 = { $: "Nil" };
          return { $: "Cons", _0: $t46557, _1: $t46558 };
        }
      }
      break;
    }
    case "PuttHoled": {
      const $f46578 = e._0;
      const $f46579 = e._1;
      {
        const par = $f46579;
        {
          const n = $f46578;
          {
            let $t46561;
            {
              let $t46560;
              {
                const $t46559 = ((n - par) < 4611686018427387904 && (n - par) >= -4611686018427387904 ? (n - par) : march_int_ovf((n - par), 1));
                $t46560 = { $: "PcHoleOut", _0: $t46559 };
              }
              $t46561 = { $: "CmdPlay", _0: $t46560 };
            }
            {
              const $t46562 = { $: "Nil" };
              return { $: "Cons", _0: $t46561, _1: $t46562 };
            }
          }
        }
      }
      break;
    }
    case "PuttPickedUp": {
      const $f46584 = e._0;
      const $f46585 = e._1;
      {
        const par = $f46585;
        {
          const n = $f46584;
          {
            let $t46565;
            {
              let $t46564;
              {
                const $t46563 = ((n - par) < 4611686018427387904 && (n - par) >= -4611686018427387904 ? (n - par) : march_int_ovf((n - par), 1));
                $t46564 = { $: "PcHoleOut", _0: $t46563 };
              }
              $t46565 = { $: "CmdPlay", _0: $t46564 };
            }
            {
              const $t46566 = { $: "Nil" };
              return { $: "Cons", _0: $t46565, _1: $t46566 };
            }
          }
        }
      }
      break;
    }
    case "PuttTeedOff": {
      const $f46590 = e._0;
      return { $: "Nil" };
      break;
    }
    case "PuttFinished": {
      const $f46591 = e._0;
      const $f46592 = e._1;
      {
        let $t46568;
        {
          const $t46567 = { $: "PcCourseOut" };
          $t46568 = { $: "CmdPlay", _0: $t46567 };
        }
        {
          const $t46569 = { $: "Nil" };
          return { $: "Cons", _0: $t46568, _1: $t46569 };
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Putt$Cues$audio_of$clo = { _0: ($_, rs, e) => Putt$Cues$audio_of(rs, e) };

function Putt$Cues$audio(rs, told) {
  switch (told.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f46626 = told._0;
      const $f46627 = told._1;
      {
        const rest = $f46627;
        {
          const e = $f46626;
          {
            let $t46624;
            $t46624 = Putt$Cues$audio_of(rs, e);
            {
              const $t46625 = Putt$Cues$audio(rs, rest);
              return List$append$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue($t46624, $t46625);
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
const Putt$Cues$audio$clo = { _0: ($_, rs, told) => Putt$Cues$audio(rs, told) };

function Putt$Cues$window($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4, $tco_a5) {
  __tco: for (;;) {
    const rs = $tco_a0;
    const told = $tco_a1;
    const from = $tco_a2;
    const upto = $tco_a3;
    const last = $tco_a4;
    const acc = $tco_a5;
    switch (told.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f46637 = told._0;
        const $f46638 = told._1;
        {
          const rest = $f46638;
          {
            const e = $f46637;
            {
              let t;
              {
                const e_i13682 = e;
                switch (e_i13682.$) {
                  case "PuttStruck": {
                    const $f46597_i13684 = e_i13682._0;
                    t = 0.;
                    break;
                  }
                  case "PuttMet": {
                    const $f46598_i13685 = e_i13682._0;
                    {
                      const m_i13686 = $f46598_i13685;
                      {
                        const $rc_2529_i13687 = m_i13686.at;
                        t = $rc_2529_i13687;
                      }
                    }
                    break;
                  }
                  case "PuttRested": {
                    const $f46599_i13688 = e_i13682._0;
                    const $f46600_i13689 = e_i13682._1;
                    {
                      const t_i13690 = $f46600_i13689;
                      t = t_i13690;
                    }
                    break;
                  }
                  case "PuttHoled": {
                    const $f46605_i13691 = e_i13682._0;
                    const $f46606_i13692 = e_i13682._1;
                    t = last;
                    break;
                  }
                  case "PuttPickedUp": {
                    const $f46611_i13693 = e_i13682._0;
                    const $f46612_i13694 = e_i13682._1;
                    t = last;
                    break;
                  }
                  case "PuttTeedOff": {
                    const $f46617_i13695 = e_i13682._0;
                    t = 0.;
                    break;
                  }
                  case "PuttFinished": {
                    const $f46618_i13696 = e_i13682._0;
                    const $f46619_i13697 = e_i13682._1;
                    t = 0.;
                    break;
                  }
                  default: {
                    throw new Error("non-exhaustive pattern match");
                    break;
                  }
                }
              }
              {
                let $t46635;
                {
                  const $t46633 = (t > from);
                  {
                    const $t46634 = (t <= upto);
                    $t46635 = ($t46633 && $t46634);
                  }
                }
                {
                  let now;
                  if ($t46635 === true) {
                    {
                      let $t46636;
                      $t46636 = Putt$Cues$audio_of(rs, e);
                      now = List$append$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue(acc, $t46636);
                    }
                  } else {
                    now = acc;
                  }
                  {
                    $tco_a0 = rs;
                    $tco_a1 = rest;
                    $tco_a2 = from;
                    $tco_a3 = upto;
                    $tco_a4 = t;
                    $tco_a5 = now;
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
const Putt$Cues$window$clo = { _0: ($_, rs, told, from, upto, last, acc) => Putt$Cues$window(rs, told, from, upto, last, acc) };

function Arcade$Draw$hex(packed) {
  {
    let $t46644;
    {
      const $t46643 = ((packed - packed % 65536) / 65536);
      $t46644 = ($t46643 % 256);
    }
    {
      let $t46646;
      {
        const $t46645 = ((packed - packed % 256) / 256);
        $t46646 = ($t46645 % 256);
      }
      {
        const $t46647 = (packed % 256);
        return ({ red: $t46644, green: $t46646, blue: $t46647, alpha: 1. });
      }
    }
  }
}
const Arcade$Draw$hex$clo = { _0: ($_, packed) => Arcade$Draw$hex(packed) };

function Arcade$Draw$with_alpha(c, a) {
  {
    const $rc_2530 = ({ ...c, alpha: a });
    return $rc_2530;
  }
}
const Arcade$Draw$with_alpha$clo = { _0: ($_, c, a) => Arcade$Draw$with_alpha(c, a) };

function Arcade$Draw$css(c) {
  {
    let milli;
    {
      let $t46650;
      {
        let $t46649;
        {
          const $t46648 = c.alpha;
          $t46649 = ($t46648 * 1000.);
        }
        $t46650 = march_float_round($t46649);
      }
      {
        const $t2583_i5710 = ($t46650 < 0);
        if ($t2583_i5710 === true) {
          milli = 0;
        } else {
          {
            const $t2584_i5711 = ($t46650 > 1000);
            if ($t2584_i5711 === true) {
              milli = 1000;
            } else {
              milli = $t46650;
            }
          }
        }
      }
    }
    {
      let alpha;
      {
        const $t46651 = (milli >= 1000);
        if ($t46651 === true) {
          alpha = "1";
        } else {
          {
            let $t46653;
            {
              const $t46652 = String(milli);
              {
                const $rc_2533 = march_string_pad_left($t46652, 3, "0");
                $t46653 = $rc_2533;
              }
            }
            {
              const $rc_2532 = ("0." + $t46653);
              alpha = $rc_2532;
            }
          }
        }
      }
      {
        let $t46655;
        {
          const $t46654 = c.red;
          $t46655 = String($t46654);
        }
        {
          let $t46657;
          {
            const $t46656 = c.green;
            $t46657 = String($t46656);
          }
          {
            let $t46659;
            {
              const $t46658 = c.blue;
              $t46659 = String($t46658);
            }
            {
              const $rc_2531 = march_string_concat_n("rgba(", $t46655, ",", $t46657, ",", $t46659, ",", alpha, ")");
              return $rc_2531;
            }
          }
        }
      }
    }
  }
}
const Arcade$Draw$css$clo = { _0: ($_, c) => Arcade$Draw$css(c) };

function Arcade$Draw$mix(c, o, t) {
  {
    let r;
    {
      let $t46662;
      {
        const $t46661 = c.red;
        $t46662 = $t46661;
      }
      {
        let $t46668;
        {
          let $t46667;
          {
            let $t46664;
            {
              const $t46663 = o.red;
              $t46664 = $t46663;
            }
            {
              let $t46666;
              {
                const $t46665 = c.red;
                $t46666 = $t46665;
              }
              $t46667 = ($t46664 - $t46666);
            }
          }
          $t46668 = ($t46667 * t);
        }
        r = ($t46662 + $t46668);
      }
    }
    {
      let g;
      {
        let $t46670;
        {
          const $t46669 = c.green;
          $t46670 = $t46669;
        }
        {
          let $t46676;
          {
            let $t46675;
            {
              let $t46672;
              {
                const $t46671 = o.green;
                $t46672 = $t46671;
              }
              {
                let $t46674;
                {
                  const $t46673 = c.green;
                  $t46674 = $t46673;
                }
                $t46675 = ($t46672 - $t46674);
              }
            }
            $t46676 = ($t46675 * t);
          }
          g = ($t46670 + $t46676);
        }
      }
      {
        let b;
        {
          let $t46678;
          {
            const $t46677 = c.blue;
            $t46678 = $t46677;
          }
          {
            let $t46684;
            {
              let $t46683;
              {
                let $t46680;
                {
                  const $t46679 = o.blue;
                  $t46680 = $t46679;
                }
                {
                  let $t46682;
                  {
                    const $t46681 = c.blue;
                    $t46682 = $t46681;
                  }
                  $t46683 = ($t46680 - $t46682);
                }
              }
              $t46684 = ($t46683 * t);
            }
            b = ($t46678 + $t46684);
          }
        }
        {
          let $t46685;
          {
            const $t46660_i5722 = march_float_round(r);
            {
              const $t2583_i15740 = ($t46660_i5722 < 0);
              if ($t2583_i15740 === true) {
                $t46685 = 0;
              } else {
                {
                  const $t2584_i15741 = ($t46660_i5722 > 255);
                  if ($t2584_i15741 === true) {
                    $t46685 = 255;
                  } else {
                    $t46685 = $t46660_i5722;
                  }
                }
              }
            }
          }
          {
            let $t46686;
            {
              const $t46660_i5720 = march_float_round(g);
              {
                const $t2583_i15735 = ($t46660_i5720 < 0);
                if ($t2583_i15735 === true) {
                  $t46686 = 0;
                } else {
                  {
                    const $t2584_i15736 = ($t46660_i5720 > 255);
                    if ($t2584_i15736 === true) {
                      $t46686 = 255;
                    } else {
                      $t46686 = $t46660_i5720;
                    }
                  }
                }
              }
            }
            {
              let $t46687;
              {
                const $t46660_i5718 = march_float_round(b);
                {
                  const $t2583_i15730 = ($t46660_i5718 < 0);
                  if ($t2583_i15730 === true) {
                    $t46687 = 0;
                  } else {
                    {
                      const $t2584_i15731 = ($t46660_i5718 > 255);
                      if ($t2584_i15731 === true) {
                        $t46687 = 255;
                      } else {
                        $t46687 = $t46660_i5718;
                      }
                    }
                  }
                }
              }
              {
                const $t46688 = c.alpha;
                return ({ red: $t46685, green: $t46686, blue: $t46687, alpha: $t46688 });
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Draw$mix$clo = { _0: ($_, c, o, t) => Arcade$Draw$mix(c, o, t) };

function Arcade$Draw$css_number(x) {
  {
    let hundredths;
    {
      let $t46691;
      {
        const $t46690 = Math.abs(x);
        $t46691 = ($t46690 * 100.);
      }
      hundredths = march_float_round($t46691);
    }
    {
      let sign;
      {
        let $t46694;
        {
          const $t46692 = (x < 0.);
          {
            const $t46693 = (hundredths > 0);
            $t46694 = ($t46692 && $t46693);
          }
        }
        if ($t46694 === true) {
          sign = "-";
        } else {
          sign = "";
        }
      }
      {
        const whole = ((hundredths - hundredths % 100) / 100);
        {
          const frac = (hundredths % 100);
          {
            const $t46695 = (frac === 0);
            {
              const $jp1163_$t46696 = String(whole);
              if ($t46695 === true) {
                {
                  const $rc_2534 = (sign + $jp1163_$t46696);
                  return $rc_2534;
                }
              } else {
                {
                  let $t46699;
                  {
                    const $t46698 = String(frac);
                    {
                      const $rc_2536 = march_string_pad_left($t46698, 2, "0");
                      $t46699 = $rc_2536;
                    }
                  }
                  {
                    const $rc_2535 = march_string_concat_n(sign, $jp1163_$t46696, ".", $t46699);
                    return $rc_2535;
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
const Arcade$Draw$css_number$clo = { _0: ($_, x) => Arcade$Draw$css_number(x) };

function Putt$Hud$par_go($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const hs = $tco_a0;
    const n = $tco_a1;
    const acc = $tco_a2;
    switch (hs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f46712 = hs._0;
        const $f46713 = hs._1;
        {
          const rest = $f46713;
          {
            const h = $f46712;
            {
              const $t46708 = (n <= 0);
              if ($t46708 === true) {
                return acc;
              } else {
                {
                  const $t46709 = ((n - 1) < 4611686018427387904 && (n - 1) >= -4611686018427387904 ? (n - 1) : march_int_ovf((n - 1), 1));
                  {
                    let $t46711;
                    {
                      const $t46710 = h.par;
                      $t46711 = ((acc + $t46710) < 4611686018427387904 && (acc + $t46710) >= -4611686018427387904 ? (acc + $t46710) : march_int_ovf((acc + $t46710), 0));
                    }
                    {
                      $tco_a0 = rest;
                      $tco_a1 = $t46709;
                      $tco_a2 = $t46711;
                      continue __tco;
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
    return undefined;
  }
}
const Putt$Hud$par_go$clo = { _0: ($_, hs, n, acc) => Putt$Hud$par_go(hs, n, acc) };

function Putt$Hud$running(s) {
  {
    let $t46719;
    $t46719 = Putt$Rules$total(s);
    {
      let $t46722;
      {
        let $t46721;
        {
          const $t46720 = s.card;
          {  };
          $t46721 = List$length_onto$List_Int$Int($t46720, 0);
        }
        {
          let $t46718_i13717;
          {
            let $t46220_i5727_i13699;
            {
              const $t46126_i15840 = ({ x: 0.8, y: 0.6 });
              {
                const $t46127_i15841 = ({ x: 0.8, y: 5.2 });
                {
                  const $t46128_i15842 = { $: "Nil" };
                  {
                    const $t46129_i15843 = { $: "Nil" };
                    {
                      const $t46130_i15844 = { $: "Nil" };
                      {
                        const $t46131_i15845 = { $: "Nil" };
                        $t46220_i5727_i13699 = ({ title: "Straight", par: 2, width: 1.6, length: 6., tee: $t46126_i15840, cup: $t46127_i15841, blocks: $t46128_i15842, sands: $t46129_i15843, waters: $t46130_i15844, slopes: $t46131_i15845, gust: 1. });
                      }
                    }
                  }
                }
              }
            }
            {
              let $t46221_i5728_i13700;
              {
                const $t46132_i15830 = ({ x: 1.2, y: 0.6 });
                {
                  const $t46133_i15831 = ({ x: 1.2, y: 5.6 });
                  {
                    const $t46134_i15832 = { $: "Nil" };
                    {
                      let $t46135_i15835;
                      {
                        const $t46069_i5227_i15833 = ({ x: 0.6, y: 2.6 });
                        {
                          const $t46070_i5228_i15834 = ({ x: 2.4, y: 4.2 });
                          $t46135_i15835 = ({ lo: $t46069_i5227_i15833, hi: $t46070_i5228_i15834 });
                        }
                      }
                      {
                        const $t46136_i15836 = { $: "Nil" };
                        {
                          const $t46137_i15837 = { $: "Cons", _0: $t46135_i15835, _1: $t46136_i15836 };
                          {
                            const $t46138_i15838 = { $: "Nil" };
                            {
                              const $t46139_i15839 = { $: "Nil" };
                              $t46221_i5728_i13700 = ({ title: "Bunker", par: 3, width: 2.4, length: 6.5, tee: $t46132_i15830, cup: $t46133_i15831, blocks: $t46134_i15832, sands: $t46137_i15837, waters: $t46138_i15838, slopes: $t46139_i15839, gust: 1. });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              {
                let $t46222_i5729_i13701;
                {
                  const $t46140_i15820 = ({ x: 1.5, y: 0.6 });
                  {
                    const $t46141_i15821 = ({ x: 1.5, y: 5.2 });
                    {
                      let $t46142_i15824;
                      {
                        const $t46069_i5237_i15822 = ({ x: 0.5, y: 2.7 });
                        {
                          const $t46070_i5238_i15823 = ({ x: 2.5, y: 3.1 });
                          $t46142_i15824 = ({ lo: $t46069_i5237_i15822, hi: $t46070_i5238_i15823 });
                        }
                      }
                      {
                        const $t46143_i15825 = { $: "Nil" };
                        {
                          const $t46144_i15826 = { $: "Cons", _0: $t46142_i15824, _1: $t46143_i15825 };
                          {
                            const $t46145_i15827 = { $: "Nil" };
                            {
                              const $t46146_i15828 = { $: "Nil" };
                              {
                                const $t46147_i15829 = { $: "Nil" };
                                $t46222_i5729_i13701 = ({ title: "Bank", par: 3, width: 3., length: 6., tee: $t46140_i15820, cup: $t46141_i15821, blocks: $t46144_i15826, sands: $t46145_i15827, waters: $t46146_i15828, slopes: $t46147_i15829, gust: 1. });
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                {
                  let $t46223_i5730_i13702;
                  {
                    const $t46148_i15806 = ({ x: 0.6, y: 0.8 });
                    {
                      const $t46149_i15807 = ({ x: 3.2, y: 4.3 });
                      {
                        let $t46150_i15810;
                        {
                          const $t46069_i5253_i15808 = ({ x: 0., y: 1.6 });
                          {
                            const $t46070_i5254_i15809 = ({ x: 2.4, y: 5. });
                            $t46150_i15810 = ({ lo: $t46069_i5253_i15808, hi: $t46070_i5254_i15809 });
                          }
                        }
                        {
                          const $t46151_i15811 = { $: "Nil" };
                          {
                            const $t46152_i15812 = { $: "Cons", _0: $t46150_i15810, _1: $t46151_i15811 };
                            {
                              let $t46153_i15815;
                              {
                                const $t46069_i5247_i15813 = ({ x: 3.4, y: 0. });
                                {
                                  const $t46070_i5248_i15814 = ({ x: 4., y: 1.4 });
                                  $t46153_i15815 = ({ lo: $t46069_i5247_i15813, hi: $t46070_i5248_i15814 });
                                }
                              }
                              {
                                const $t46154_i15816 = { $: "Nil" };
                                {
                                  const $t46155_i15817 = { $: "Cons", _0: $t46153_i15815, _1: $t46154_i15816 };
                                  {
                                    const $t46156_i15818 = { $: "Nil" };
                                    {
                                      const $t46157_i15819 = { $: "Nil" };
                                      $t46223_i5730_i13702 = ({ title: "Dogleg", par: 3, width: 4., length: 5., tee: $t46148_i15806, cup: $t46149_i15807, blocks: $t46152_i15812, sands: $t46155_i15817, waters: $t46156_i15818, slopes: $t46157_i15819, gust: 1. });
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
                  {
                    let $t46224_i5731_i13703;
                    {
                      const $t46158_i15792 = ({ x: 1.6, y: 0.6 });
                      {
                        const $t46159_i15793 = ({ x: 1.6, y: 5.7 });
                        {
                          const $t46160_i15794 = { $: "Nil" };
                          {
                            let $t46161_i15797;
                            {
                              const $t46069_i5269_i15795 = ({ x: 0., y: 2.6 });
                              {
                                const $t46070_i5270_i15796 = ({ x: 0.9, y: 3.8 });
                                $t46161_i15797 = ({ lo: $t46069_i5269_i15795, hi: $t46070_i5270_i15796 });
                              }
                            }
                            {
                              const $t46162_i15798 = { $: "Nil" };
                              {
                                const $t46163_i15799 = { $: "Cons", _0: $t46161_i15797, _1: $t46162_i15798 };
                                {
                                  let $t46164_i15802;
                                  {
                                    const $t46069_i5263_i15800 = ({ x: 0.9, y: 2.4 });
                                    {
                                      const $t46070_i5264_i15801 = ({ x: 2.6, y: 4. });
                                      $t46164_i15802 = ({ lo: $t46069_i5263_i15800, hi: $t46070_i5264_i15801 });
                                    }
                                  }
                                  {
                                    const $t46165_i15803 = { $: "Nil" };
                                    {
                                      const $t46166_i15804 = { $: "Cons", _0: $t46164_i15802, _1: $t46165_i15803 };
                                      {
                                        const $t46167_i15805 = { $: "Nil" };
                                        $t46224_i5731_i13703 = ({ title: "Pond", par: 3, width: 3.2, length: 6.5, tee: $t46158_i15792, cup: $t46159_i15793, blocks: $t46160_i15794, sands: $t46163_i15799, waters: $t46166_i15804, slopes: $t46167_i15805, gust: 1. });
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
                    {
                      let $t46225_i5732_i13704;
                      {
                        const $t46168_i15774 = ({ x: 1.5, y: 0.6 });
                        {
                          const $t46169_i15775 = ({ x: 1.5, y: 5.6 });
                          {
                            let $t46170_i15778;
                            {
                              const $t46069_i5291_i15776 = ({ x: 0.6, y: 2. });
                              {
                                const $t46070_i5292_i15777 = ({ x: 3., y: 2.3 });
                                $t46170_i15778 = ({ lo: $t46069_i5291_i15776, hi: $t46070_i5292_i15777 });
                              }
                            }
                            {
                              let $t46171_i15781;
                              {
                                const $t46069_i5285_i15779 = ({ x: 0., y: 4. });
                                {
                                  const $t46070_i5286_i15780 = ({ x: 2.4, y: 4.3 });
                                  $t46171_i15781 = ({ lo: $t46069_i5285_i15779, hi: $t46070_i5286_i15780 });
                                }
                              }
                              {
                                const $t46172_i15782 = { $: "Nil" };
                                {
                                  const $t46173_i15783 = { $: "Cons", _0: $t46171_i15781, _1: $t46172_i15782 };
                                  {
                                    const $t46174_i15784 = { $: "Cons", _0: $t46170_i15778, _1: $t46173_i15783 };
                                    {
                                      let $t46175_i15787;
                                      {
                                        const $t46069_i5279_i15785 = ({ x: 1., y: 2.8 });
                                        {
                                          const $t46070_i5280_i15786 = ({ x: 2., y: 3.5 });
                                          $t46175_i15787 = ({ lo: $t46069_i5279_i15785, hi: $t46070_i5280_i15786 });
                                        }
                                      }
                                      {
                                        const $t46176_i15788 = { $: "Nil" };
                                        {
                                          const $t46177_i15789 = { $: "Cons", _0: $t46175_i15787, _1: $t46176_i15788 };
                                          {
                                            const $t46178_i15790 = { $: "Nil" };
                                            {
                                              const $t46179_i15791 = { $: "Nil" };
                                              $t46225_i5732_i13704 = ({ title: "Chicane", par: 3, width: 3., length: 6.5, tee: $t46168_i15774, cup: $t46169_i15775, blocks: $t46174_i15784, sands: $t46177_i15789, waters: $t46178_i15790, slopes: $t46179_i15791, gust: 1. });
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
                      {
                        let $t46226_i5733_i13705;
                        {
                          const $t46180_i15760 = ({ x: 1.4, y: 0.6 });
                          {
                            const $t46181_i15761 = ({ x: 1.3, y: 5.5 });
                            {
                              const $t46182_i15762 = { $: "Nil" };
                              {
                                const $t46183_i15763 = { $: "Nil" };
                                {
                                  let $t46184_i15766;
                                  {
                                    const $t46069_i5309_i15764 = ({ x: 2.6, y: 3.6 });
                                    {
                                      const $t46070_i5310_i15765 = ({ x: 3.2, y: 6. });
                                      $t46184_i15766 = ({ lo: $t46069_i5309_i15764, hi: $t46070_i5310_i15765 });
                                    }
                                  }
                                  {
                                    const $t46185_i15767 = { $: "Nil" };
                                    {
                                      const $t46186_i15768 = { $: "Cons", _0: $t46184_i15766, _1: $t46185_i15767 };
                                      {
                                        let $t46187_i15771;
                                        {
                                          let $t46096_i5303_i15769;
                                          {
                                            const $t46069_i16259 = ({ x: 0., y: 3. });
                                            {
                                              const $t46070_i16260 = ({ x: 3.2, y: 6.5 });
                                              $t46096_i5303_i15769 = ({ lo: $t46069_i16259, hi: $t46070_i16260 });
                                            }
                                          }
                                          {
                                            const $t46097_i5304_i15770 = ({ x: 0.3, y: 0. });
                                            $t46187_i15771 = ({ area: $t46096_i5303_i15769, pull: $t46097_i5304_i15770 });
                                          }
                                        }
                                        {
                                          const $t46188_i15772 = { $: "Nil" };
                                          {
                                            const $t46189_i15773 = { $: "Cons", _0: $t46187_i15771, _1: $t46188_i15772 };
                                            $t46226_i5733_i13705 = ({ title: "Sidehill", par: 3, width: 3.2, length: 6.5, tee: $t46180_i15760, cup: $t46181_i15761, blocks: $t46182_i15762, sands: $t46183_i15763, waters: $t46186_i15768, slopes: $t46189_i15773, gust: 1. });
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
                        {
                          let $t46227_i5734_i13706;
                          {
                            const $t46190_i15742 = ({ x: 1.8, y: 0.6 });
                            {
                              const $t46191_i15743 = ({ x: 1.8, y: 6. });
                              {
                                const $t46192_i15744 = { $: "Nil" };
                                {
                                  const $t46193_i15745 = { $: "Nil" };
                                  {
                                    let $t46194_i15748;
                                    {
                                      const $t46069_i5331_i15746 = ({ x: 0., y: 2.6 });
                                      {
                                        const $t46070_i5332_i15747 = ({ x: 1.5, y: 5. });
                                        $t46194_i15748 = ({ lo: $t46069_i5331_i15746, hi: $t46070_i5332_i15747 });
                                      }
                                    }
                                    {
                                      let $t46195_i15751;
                                      {
                                        const $t46069_i5325_i15749 = ({ x: 2.1, y: 2.6 });
                                        {
                                          const $t46070_i5326_i15750 = ({ x: 3.6, y: 5. });
                                          $t46195_i15751 = ({ lo: $t46069_i5325_i15749, hi: $t46070_i5326_i15750 });
                                        }
                                      }
                                      {
                                        let $t46196_i15754;
                                        {
                                          const $t46069_i5319_i15752 = ({ x: 1., y: 6.6 });
                                          {
                                            const $t46070_i5320_i15753 = ({ x: 2.6, y: 7.2 });
                                            $t46196_i15754 = ({ lo: $t46069_i5319_i15752, hi: $t46070_i5320_i15753 });
                                          }
                                        }
                                        {
                                          const $t46197_i15755 = { $: "Nil" };
                                          {
                                            const $t46198_i15756 = { $: "Cons", _0: $t46196_i15754, _1: $t46197_i15755 };
                                            {
                                              const $t46199_i15757 = { $: "Cons", _0: $t46195_i15751, _1: $t46198_i15756 };
                                              {
                                                const $t46200_i15758 = { $: "Cons", _0: $t46194_i15748, _1: $t46199_i15757 };
                                                {
                                                  const $t46201_i15759 = { $: "Nil" };
                                                  $t46227_i5734_i13706 = ({ title: "Causeway", par: 3, width: 3.6, length: 7.2, tee: $t46190_i15742, cup: $t46191_i15743, blocks: $t46192_i15744, sands: $t46193_i15745, waters: $t46200_i15758, slopes: $t46201_i15759, gust: 3. });
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
                          {
                            const $t46228_i5735_i13707 = Putt$Course$home();
                            {
                              const $t46229_i5736_i13708 = { $: "Nil" };
                              {
                                const $t46230_i5737_i13709 = { $: "Cons", _0: $t46228_i5735_i13707, _1: $t46229_i5736_i13708 };
                                {
                                  const $t46231_i5738_i13710 = { $: "Cons", _0: $t46227_i5734_i13706, _1: $t46230_i5737_i13709 };
                                  {
                                    const $t46232_i5739_i13711 = { $: "Cons", _0: $t46226_i5733_i13705, _1: $t46231_i5738_i13710 };
                                    {
                                      const $t46233_i5740_i13712 = { $: "Cons", _0: $t46225_i5732_i13704, _1: $t46232_i5739_i13711 };
                                      {
                                        const $t46234_i5741_i13713 = { $: "Cons", _0: $t46224_i5731_i13703, _1: $t46233_i5740_i13712 };
                                        {
                                          const $t46235_i5742_i13714 = { $: "Cons", _0: $t46223_i5730_i13702, _1: $t46234_i5741_i13713 };
                                          {
                                            const $t46236_i5743_i13715 = { $: "Cons", _0: $t46222_i5729_i13701, _1: $t46235_i5742_i13714 };
                                            {
                                              const $t46237_i5744_i13716 = { $: "Cons", _0: $t46221_i5728_i13700, _1: $t46236_i5743_i13715 };
                                              $t46718_i13717 = { $: "Cons", _0: $t46220_i5727_i13699, _1: $t46237_i5744_i13716 };
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
          }
          {
            const $rc_2540_i13718 = Putt$Hud$par_go($t46718_i13717, $t46721, 0);
            $t46722 = $rc_2540_i13718;
          }
        }
      }
      return (($t46719 - $t46722) < 4611686018427387904 && ($t46719 - $t46722) >= -4611686018427387904 ? ($t46719 - $t46722) : march_int_ovf(($t46719 - $t46722), 1));
    }
  }
}
const Putt$Hud$running$clo = { _0: ($_, s) => Putt$Hud$running(s) };

function Putt$Hud$holed(s) {
  {
    let h;
    h = Putt$Rules$current(s);
    {
      const $t46723 = s.ball;
      {
        const $t46724 = h.cup;
        {
          const a_i13719 = $t46723;
          {
            const b_i13720 = $t46724;
            {
              let $t45906_i13723;
              {
                const $t45904_i13721 = $t46723.x;
                {
                  const $t45905_i13722 = $t46724.x;
                  $t45906_i13723 = ($t45904_i13721 === $t45905_i13722);
                }
              }
              {
                let $t45909_i13726;
                {
                  const $t45907_i13724 = $t46723.y;
                  {
                    const $t45908_i13725 = $t46724.y;
                    $t45909_i13726 = ($t45907_i13724 === $t45908_i13725);
                  }
                }
                return ($t45906_i13723 && $t45909_i13726);
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Hud$holed$clo = { _0: ($_, s) => Putt$Hud$holed(s) };

function Putt$Hud$hole_line(s) {
  {
    let $t46727;
    {
      let $t46726;
      {
        const $t46725 = s.hole;
        $t46726 = (($t46725 + 1) < 4611686018427387904 && ($t46725 + 1) >= -4611686018427387904 ? ($t46725 + 1) : march_int_ovf(($t46725 + 1), 0));
      }
      $t46727 = String($t46726);
    }
    {
      let $t46729;
      {
        const $t46728 = Putt$Course$hole_count();
        $t46729 = String($t46728);
      }
      {
        const $rc_2541 = march_string_concat_n("HOLE ", $t46727, "/", $t46729);
        return $rc_2541;
      }
    }
  }
}
const Putt$Hud$hole_line$clo = { _0: ($_, s) => Putt$Hud$hole_line(s) };

function Putt$Hud$par_line(s) {
  {
    const h = Putt$Rules$current(s);
    {
      const $t46730 = h.title;
      {
        let $t46732;
        {
          const $t46731 = h.par;
          $t46732 = String($t46731);
        }
        {
          const $rc_2542 = march_string_concat3($t46730, " - par ", $t46732);
          {
            const $rc_2544 = $rc_2542;
            return $rc_2544;
          }
        }
      }
    }
  }
}
const Putt$Hud$par_line$clo = { _0: ($_, s) => Putt$Hud$par_line(s) };

function Putt$Hud$stroke_line(s) {
  {
    const $t46733 = s.phase;
    switch ($t46733.$) {
      case "PuttAiming": {
        {
          let $t46736;
          {
            let $t46735;
            {
              const $t46734 = s.strokes;
              $t46735 = (($t46734 + 1) < 4611686018427387904 && ($t46734 + 1) >= -4611686018427387904 ? ($t46734 + 1) : march_int_ovf(($t46734 + 1), 0));
            }
            $t46736 = String($t46735);
          }
          {
            const $rc_2545 = ("STROKE " + $t46736);
            return $rc_2545;
          }
        }
        break;
      }
      case "PuttHoleDone": {
        {
          let $t46737;
          $t46737 = Putt$Hud$holed(s);
          if ($t46737 === true) {
            {
              let $t46739;
              {
                const $t46738 = s.strokes;
                $t46739 = String($t46738);
              }
              {
                const $rc_2546 = ("IN " + $t46739);
                return $rc_2546;
              }
            }
          } else {
            return "PICKED UP";
          }
        }
        break;
      }
      case "PuttCourseDone": {
        return "DONE";
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Putt$Hud$stroke_line$clo = { _0: ($_, s) => Putt$Hud$stroke_line(s) };

function Putt$Hud$score_line(s) {
  {
    let played;
    {
      const $t46740 = s.card;
      {  };
      played = List$length_onto$List_Int$Int($t46740, 0);
    }
    {
      const $t46741 = (played === 0);
      if ($t46741 === true) {
        return "Score E";
      } else {
        {
          let $t46743;
          {
            const $t46742 = Putt$Hud$running(s);
            {
              const $t46700_i13728 = ($t46742 === 0);
              if ($t46700_i13728 === true) {
                $t46743 = "E";
              } else {
                {
                  const $t46701_i13729 = ($t46742 > 0);
                  if ($t46701_i13729 === true) {
                    {
                      const $t46702_i13730 = String($t46742);
                      {
                        const $rc_2537_i13731 = ("+" + $t46702_i13730);
                        $t46743 = $rc_2537_i13731;
                      }
                    }
                  } else {
                    $t46743 = String($t46742);
                  }
                }
              }
            }
          }
          {
            const $t46744 = String(played);
            {
              const $rc_2547 = march_string_concat_n("Score ", $t46743, " thru ", $t46744);
              return $rc_2547;
            }
          }
        }
      }
    }
  }
}
const Putt$Hud$score_line$clo = { _0: ($_, s) => Putt$Hud$score_line(s) };

function Putt$Hud$verdict(strokes, par, in_cup) {
  {
    const d = ((strokes - par) < 4611686018427387904 && (strokes - par) >= -4611686018427387904 ? (strokes - par) : march_int_ovf((strokes - par), 1));
    {
      const $t46745 = (!in_cup);
      if ($t46745 === true) {
        {
          const $t46746 = String(strokes);
          {
            const $rc_2548 = ("Picked up after " + $t46746);
            return $rc_2548;
          }
        }
      } else {
        {
          const $t46747 = (strokes === 1);
          if ($t46747 === true) {
            return "Hole in one!";
          } else {
            {
              let $t46749;
              {
                const $t46748 = march_int_ovf(-(3), 3);
                $t46749 = (d <= $t46748);
              }
              if ($t46749 === true) {
                return "Albatross!";
              } else {
                {
                  let $t46751;
                  {
                    const $t46750 = march_int_ovf(-(2), 3);
                    $t46751 = (d === $t46750);
                  }
                  if ($t46751 === true) {
                    return "Eagle!";
                  } else {
                    {
                      let $t46753;
                      {
                        const $t46752 = march_int_ovf(-(1), 3);
                        $t46753 = (d === $t46752);
                      }
                      if ($t46753 === true) {
                        return "Birdie!";
                      } else {
                        {
                          const $t46754 = (d === 0);
                          if ($t46754 === true) {
                            return "Par";
                          } else {
                            {
                              const $t46755 = (d === 1);
                              if ($t46755 === true) {
                                return "Bogey";
                              } else {
                                {
                                  const $t46756 = (d === 2);
                                  if ($t46756 === true) {
                                    return "Double bogey";
                                  } else {
                                    {
                                      const $t46757 = String(d);
                                      {
                                        const $rc_2549 = ($t46757 + " over par");
                                        return $rc_2549;
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
    }
  }
}
const Putt$Hud$verdict$clo = { _0: ($_, strokes, par, in_cup) => Putt$Hud$verdict(strokes, par, in_cup) };

function Putt$Hud$strokes_words(n) {
  {
    const $t46758 = (n === 1);
    if ($t46758 === true) {
      return "1 stroke";
    } else {
      {
        const $t46759 = String(n);
        {
          const $rc_2550 = ($t46759 + " strokes");
          return $rc_2550;
        }
      }
    }
  }
}
const Putt$Hud$strokes_words$clo = { _0: ($_, n) => Putt$Hud$strokes_words(n) };

function Putt$Hud$card_title(s) {
  {
    const $t46760 = s.phase;
    switch ($t46760.$) {
      case "PuttAiming": {
        return "";
        break;
      }
      case "PuttHoleDone": {
        {
          let h;
          h = Putt$Rules$current(s);
          {
            const $t46761 = s.strokes;
            {
              const $t46762 = h.par;
              {
                const $t46763 = Putt$Hud$holed(s);
                return Putt$Hud$verdict($t46761, $t46762, $t46763);
              }
            }
          }
        }
        break;
      }
      case "PuttCourseDone": {
        return "Course done";
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Putt$Hud$card_title$clo = { _0: ($_, s) => Putt$Hud$card_title(s) };

function Putt$Hud$card_detail(s) {
  {
    const $t46764 = s.phase;
    switch ($t46764.$) {
      case "PuttAiming": {
        return "";
        break;
      }
      case "PuttHoleDone": {
        {
          let h;
          h = Putt$Rules$current(s);
          {
            let $t46767;
            {
              let $t46766;
              {
                const $t46765 = s.hole;
                $t46766 = (($t46765 + 1) < 4611686018427387904 && ($t46765 + 1) >= -4611686018427387904 ? ($t46765 + 1) : march_int_ovf(($t46765 + 1), 0));
              }
              $t46767 = String($t46766);
            }
            {
              let $t46769;
              {
                const $t46768 = s.strokes;
                $t46769 = Putt$Hud$strokes_words($t46768);
              }
              {
                let $t46771;
                {
                  const $t46770 = h.par;
                  $t46771 = String($t46770);
                }
                {
                  const $rc_2551 = march_string_concat_n("Hole ", $t46767, ": ", $t46769, ", par ", $t46771);
                  {
                    const $rc_2553 = $rc_2551;
                    return $rc_2553;
                  }
                }
              }
            }
          }
        }
        break;
      }
      case "PuttCourseDone": {
        {
          let $t46773;
          {
            const $t46772 = Putt$Rules$total(s);
            $t46773 = Putt$Hud$strokes_words($t46772);
          }
          {
            let $t46775;
            {
              let $t46774;
              {
                const $t46245_i5747 = Putt$Course$holes();
                {
                  const $t46248_i5748 = { $: "$Clo_$lam0_Putt_Course_course_par$0_Putt_Course_course_par", _0: $lam0_Putt_Course_course_par$apply$0_Putt_Course_course_par };
                  $t46774 = List$fold_left$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$Fn_Int_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_Int($t46245_i5747, 0, $t46248_i5748);
                }
              }
              $t46775 = String($t46774);
            }
            {
              const $rc_2554 = march_string_concat3($t46773, ", par ", $t46775);
              return $rc_2554;
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
const Putt$Hud$card_detail$clo = { _0: ($_, s) => Putt$Hud$card_detail(s) };

function Putt$Hud$wind_force(rs, w) {
  {
    let strongest;
    {
      let $t46789;
      {
        const $t46788 = rs.tune;
        $t46789 = $t46788.wind_max;
      }
      {
        const $t46790 = Math.sqrt(2.);
        strongest = ($t46789 * $t46790);
      }
    }
    {
      let $t46793;
      {
        let $t46792;
        {
          let $t46791;
          $t46791 = Arcade$Vec2$length(w);
          $t46792 = (10. * $t46791);
        }
        $t46793 = ($t46792 / strongest);
      }
      return march_float_round($t46793);
    }
  }
}
const Putt$Hud$wind_force$clo = { _0: ($_, rs, w) => Putt$Hud$wind_force(rs, w) };

function Putt$Hud$wind_line(rs, w) {
  {
    const f = Putt$Hud$wind_force(rs, w);
    {
      const $t46794 = (f === 0);
      if ($t46794 === true) {
        return "Calm";
      } else {
        {
          const $t46795 = String(f);
          {
            const $rc_2557 = ("Wind " + $t46795);
            return $rc_2557;
          }
        }
      }
    }
  }
}
const Putt$Hud$wind_line$clo = { _0: ($_, rs, w) => Putt$Hud$wind_line(rs, w) };

function Putt$Hud$numbers_go($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const i = $tco_a0;
    const n = $tco_a1;
    const acc = $tco_a2;
    {
      const $t46802 = (i >= n);
      if ($t46802 === true) {
        {
          const $t1095_i5751 = { $: "Nil" };
          return List$reverse_onto$List_String$List_String(acc, $t1095_i5751);
        }
      } else {
        {
          const $t46803 = ((i + 1) < 4611686018427387904 && (i + 1) >= -4611686018427387904 ? (i + 1) : march_int_ovf((i + 1), 0));
          {
            let $t46805;
            {
              const $t46804 = ((i + 1) < 4611686018427387904 && (i + 1) >= -4611686018427387904 ? (i + 1) : march_int_ovf((i + 1), 0));
              $t46805 = String($t46804);
            }
            {
              const $t46806 = { $: "Cons", _0: $t46805, _1: acc };
              {
                $tco_a0 = $t46803;
                $tco_a1 = n;
                $tco_a2 = $t46806;
                continue __tco;
              }
            }
          }
        }
      }
    }
    return undefined;
  }
}
const Putt$Hud$numbers_go$clo = { _0: ($_, i, n, acc) => Putt$Hud$numbers_go(i, n, acc) };

function Putt$Hud$pars_go($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const hs = $tco_a0;
    const acc = $tco_a1;
    switch (hs.$) {
      case "Nil": {
        {
          const $t1095_i5753 = { $: "Nil" };
          return List$reverse_onto$List_Int$List_Int(acc, $t1095_i5753);
        }
        break;
      }
      case "Cons": {
        const $f46811 = hs._0;
        const $f46812 = hs._1;
        {
          const rest = $f46812;
          {
            const h = $f46811;
            {
              const $t46809 = h.par;
              {
                const $t46810 = { $: "Cons", _0: $t46809, _1: acc };
                {
                  $tco_a0 = rest;
                  $tco_a1 = $t46810;
                  continue __tco;
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
const Putt$Hud$pars_go$clo = { _0: ($_, hs, acc) => Putt$Hud$pars_go(hs, acc) };

function Putt$Hud$strokes_go($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const pars = $tco_a0;
    const card = $tco_a1;
    const acc = $tco_a2;
    switch (pars.$) {
      case "Nil": {
        {
          const $t1095_i5773 = { $: "Nil" };
          return List$reverse_onto$List_Option_Int$List_Option_Int(acc, $t1095_i5773);
        }
        break;
      }
      case "Cons": {
        const $f46830 = pars._0;
        const $f46831 = pars._1;
        {
          const more = $f46831;
          switch (card.$) {
            case "Nil": {
              {
                const $t46819 = { $: "Nil" };
                {
                  const $t46820 = { $: "None" };
                  {
                    const $t46821 = { $: "Cons", _0: $t46820, _1: acc };
                    {
                      $tco_a0 = more;
                      $tco_a1 = $t46819;
                      $tco_a2 = $t46821;
                      continue __tco;
                    }
                  }
                }
              }
              break;
            }
            case "Cons": {
              const $f46824 = card._0;
              const $f46825 = card._1;
              {
                const rest = $f46825;
                {
                  const n = $f46824;
                  {
                    const $t46822 = { $: "Some", _0: n };
                    {
                      const $t46823 = { $: "Cons", _0: $t46822, _1: acc };
                      {
                        $tco_a0 = more;
                        $tco_a1 = rest;
                        $tco_a2 = $t46823;
                        continue __tco;
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
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const Putt$Hud$strokes_go$clo = { _0: ($_, pars, card, acc) => Putt$Hud$strokes_go(pars, card, acc) };

function Putt$Hud$column(vp) {
  {
    const $t46840 = vp.width;
    {
      const $t48416_i5778 = (440. < $t46840);
      if ($t48416_i5778 === true) {
        return 440.;
      } else {
        return $t46840;
      }
    }
  }
}
const Putt$Hud$column$clo = { _0: ($_, vp) => Putt$Hud$column(vp) };

function Putt$Hud$rig(h, vp) {
  {
    const bands = (104. + 44.);
    {
      let room;
      {
        let $t46844;
        {
          const $t46843 = vp.height;
          $t46844 = ($t46843 - bands);
        }
        {
          let $t46846;
          {
            const $t46845 = vp.height;
            $t46846 = ($t46845 / 2.);
          }
          {
            const $t48415_i5793 = ($t46846 >= $t46844);
            if ($t48415_i5793 === true) {
              room = $t46846;
            } else {
              room = $t46844;
            }
          }
        }
      }
      {
        let above;
        {
          let $t46850;
          {
            let $t46848;
            {
              const $t46847 = vp.height;
              $t46848 = ($t46847 - room);
            }
            $t46850 = ($t46848 * 104.);
          }
          above = ($t46850 / bands);
        }
        {
          let tall;
          {
            const $t46851 = h.length;
            {
              const $t46853 = (2. * 0.2);
              tall = ($t46851 + $t46853);
            }
          }
          {
            let wide;
            {
              const $t46854 = h.width;
              {
                const $t46856 = (2. * 0.2);
                wide = ($t46854 + $t46856);
              }
            }
            {
              let k;
              {
                const $t46857 = (room / tall);
                {
                  let $t46859;
                  {
                    const $t46858 = vp.width;
                    $t46859 = ($t46858 / wide);
                  }
                  {
                    const $t48416_i5790 = ($t46859 < $t46857);
                    if ($t48416_i5790 === true) {
                      k = $t46859;
                    } else {
                      k = $t46857;
                    }
                  }
                }
              }
              {
                let lower;
                {
                  let $t46861;
                  {
                    const $t46860 = (room / 2.);
                    $t46861 = (above + $t46860);
                  }
                  {
                    let $t46863;
                    {
                      const $t46862 = vp.height;
                      $t46863 = ($t46862 / 2.);
                    }
                    lower = ($t46861 - $t46863);
                  }
                }
                {
                  let mid;
                  {
                    let $t46865;
                    {
                      const $t46864 = h.width;
                      $t46865 = ($t46864 / 2.);
                    }
                    {
                      let $t46869;
                      {
                        let $t46867;
                        {
                          const $t46866 = h.length;
                          $t46867 = ($t46866 / 2.);
                        }
                        {
                          const $t46868 = (lower / k);
                          $t46869 = ($t46867 + $t46868);
                        }
                      }
                      mid = ({ x: $t46865, y: $t46869, z: 0. });
                    }
                  }
                  {
                    let $t46875;
                    {
                      let $t46873;
                      {
                        const $t46870 = mid.x;
                        {
                          const $t46871 = mid.y;
                          $t46873 = ({ x: $t46870, y: $t46871, z: 10. });
                        }
                      }
                      {
                        const $t46874 = ({ x: 0., y: 1., z: 0. });
                        $t46875 = ({ eye: $t46873, target: mid, up: $t46874 });
                      }
                    }
                    {
                      let $t46878;
                      {
                        let $t46877;
                        {
                          const $t46876 = vp.height;
                          $t46877 = ($t46876 / k);
                        }
                        $t46878 = { $: "Orthographic", _0: $t46877 };
                      }
                      return ({ pose: $t46875, lens: $t46878 });
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
const Putt$Hud$rig$clo = { _0: ($_, h, vp) => Putt$Hud$rig(h, vp) };

function Putt$Hud$projection(rs, h, vp) {
  {
    const $t46879 = rs.num;
    {
      let $t46880;
      $t46880 = Putt$Hud$rig(h, vp);
      return Arcade$Camera$projection($t46879, $t46880, vp);
    }
  }
}
const Putt$Hud$projection$clo = { _0: ($_, rs, h, vp) => Putt$Hud$projection(rs, h, vp) };

function Putt$Hud$in_box(b, p) {
  {
    let $t46897;
    {
      let $t46893;
      {
        let $t46889;
        {
          const $t46887 = p.x;
          {
            const $t46888 = b.left;
            $t46889 = ($t46887 >= $t46888);
          }
        }
        {
          let $t46892;
          {
            const $t46890 = p.x;
            {
              const $t46891 = b.right;
              $t46892 = ($t46890 <= $t46891);
            }
          }
          $t46893 = ($t46889 && $t46892);
        }
      }
      {
        let $t46896;
        {
          const $t46894 = p.y;
          {
            const $t46895 = b.top;
            $t46896 = ($t46894 >= $t46895);
          }
        }
        $t46897 = ($t46893 && $t46896);
      }
    }
    {
      let $t46900;
      {
        const $t46898 = p.y;
        {
          const $t46899 = b.bottom;
          $t46900 = ($t46898 <= $t46899);
        }
      }
      return ($t46897 && $t46900);
    }
  }
}
const Putt$Hud$in_box$clo = { _0: ($_, b, p) => Putt$Hud$in_box(b, p) };

function Putt$Hud$box_centre(b) {
  {
    let $t46904;
    {
      let $t46903;
      {
        const $t46901 = b.left;
        {
          const $t46902 = b.right;
          $t46903 = ($t46901 + $t46902);
        }
      }
      $t46904 = ($t46903 / 2.);
    }
    {
      let $t46908;
      {
        let $t46907;
        {
          const $t46905 = b.top;
          {
            const $t46906 = b.bottom;
            $t46907 = ($t46905 + $t46906);
          }
        }
        $t46908 = ($t46907 / 2.);
      }
      return ({ x: $t46904, y: $t46908 });
    }
  }
}
const Putt$Hud$box_centre$clo = { _0: ($_, b) => Putt$Hud$box_centre(b) };

function Putt$Hud$rounded(b, r) {
  {
    let $t46925;
    {
      let $t46924;
      {
        let $t46922;
        {
          const $t46921 = b.left;
          $t46922 = ($t46921 + r);
        }
        {
          const $t46923 = b.top;
          $t46924 = ({ x: $t46922, y: $t46923 });
        }
      }
      $t46925 = { $: "MoveTo", _0: $t46924 };
    }
    {
      let $t46930;
      {
        let $t46929;
        {
          let $t46927;
          {
            const $t46926 = b.right;
            $t46927 = ($t46926 - r);
          }
          {
            const $t46928 = b.top;
            $t46929 = ({ x: $t46927, y: $t46928 });
          }
        }
        $t46930 = { $: "LineTo", _0: $t46929 };
      }
      {
        let $t46938;
        {
          let $t46933;
          {
            const $t46931 = b.right;
            {
              const $t46932 = b.top;
              $t46933 = ({ x: $t46931, y: $t46932 });
            }
          }
          {
            let $t46937;
            {
              const $t46934 = b.right;
              {
                let $t46936;
                {
                  const $t46935 = b.top;
                  $t46936 = ($t46935 + r);
                }
                $t46937 = ({ x: $t46934, y: $t46936 });
              }
            }
            $t46938 = { $: "QuadTo", _0: $t46933, _1: $t46937 };
          }
        }
        {
          let $t46943;
          {
            let $t46942;
            {
              const $t46939 = b.right;
              {
                let $t46941;
                {
                  const $t46940 = b.bottom;
                  $t46941 = ($t46940 - r);
                }
                $t46942 = ({ x: $t46939, y: $t46941 });
              }
            }
            $t46943 = { $: "LineTo", _0: $t46942 };
          }
          {
            let $t46951;
            {
              let $t46946;
              {
                const $t46944 = b.right;
                {
                  const $t46945 = b.bottom;
                  $t46946 = ({ x: $t46944, y: $t46945 });
                }
              }
              {
                let $t46950;
                {
                  let $t46948;
                  {
                    const $t46947 = b.right;
                    $t46948 = ($t46947 - r);
                  }
                  {
                    const $t46949 = b.bottom;
                    $t46950 = ({ x: $t46948, y: $t46949 });
                  }
                }
                $t46951 = { $: "QuadTo", _0: $t46946, _1: $t46950 };
              }
            }
            {
              let $t46956;
              {
                let $t46955;
                {
                  let $t46953;
                  {
                    const $t46952 = b.left;
                    $t46953 = ($t46952 + r);
                  }
                  {
                    const $t46954 = b.bottom;
                    $t46955 = ({ x: $t46953, y: $t46954 });
                  }
                }
                $t46956 = { $: "LineTo", _0: $t46955 };
              }
              {
                let $t46964;
                {
                  let $t46959;
                  {
                    const $t46957 = b.left;
                    {
                      const $t46958 = b.bottom;
                      $t46959 = ({ x: $t46957, y: $t46958 });
                    }
                  }
                  {
                    let $t46963;
                    {
                      const $t46960 = b.left;
                      {
                        let $t46962;
                        {
                          const $t46961 = b.bottom;
                          $t46962 = ($t46961 - r);
                        }
                        $t46963 = ({ x: $t46960, y: $t46962 });
                      }
                    }
                    $t46964 = { $: "QuadTo", _0: $t46959, _1: $t46963 };
                  }
                }
                {
                  let $t46969;
                  {
                    let $t46968;
                    {
                      const $t46965 = b.left;
                      {
                        let $t46967;
                        {
                          const $t46966 = b.top;
                          $t46967 = ($t46966 + r);
                        }
                        $t46968 = ({ x: $t46965, y: $t46967 });
                      }
                    }
                    $t46969 = { $: "LineTo", _0: $t46968 };
                  }
                  {
                    let $t46977;
                    {
                      let $t46972;
                      {
                        const $t46970 = b.left;
                        {
                          const $t46971 = b.top;
                          $t46972 = ({ x: $t46970, y: $t46971 });
                        }
                      }
                      {
                        let $t46976;
                        {
                          let $t46974;
                          {
                            const $t46973 = b.left;
                            $t46974 = ($t46973 + r);
                          }
                          {
                            const $t46975 = b.top;
                            $t46976 = ({ x: $t46974, y: $t46975 });
                          }
                        }
                        $t46977 = { $: "QuadTo", _0: $t46972, _1: $t46976 };
                      }
                    }
                    {
                      const $t46978 = { $: "ClosePath" };
                      {
                        const $t46979 = { $: "Nil" };
                        {
                          const $t46980 = { $: "Cons", _0: $t46978, _1: $t46979 };
                          {
                            const $t46981 = { $: "Cons", _0: $t46977, _1: $t46980 };
                            {
                              const $t46982 = { $: "Cons", _0: $t46969, _1: $t46981 };
                              {
                                const $t46983 = { $: "Cons", _0: $t46964, _1: $t46982 };
                                {
                                  const $t46984 = { $: "Cons", _0: $t46956, _1: $t46983 };
                                  {
                                    const $t46985 = { $: "Cons", _0: $t46951, _1: $t46984 };
                                    {
                                      const $t46986 = { $: "Cons", _0: $t46943, _1: $t46985 };
                                      {
                                        const $t46987 = { $: "Cons", _0: $t46938, _1: $t46986 };
                                        {
                                          const $t46988 = { $: "Cons", _0: $t46930, _1: $t46987 };
                                          {
                                            const $t46989 = { $: "Cons", _0: $t46925, _1: $t46988 };
                                            return { $: "Outline", _0: $t46989 };
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
        }
      }
    }
  }
}
const Putt$Hud$rounded$clo = { _0: ($_, b, r) => Putt$Hud$rounded(b, r) };

function Putt$Hud$compass_ops(rs, c, w) {
  {
    let force;
    force = Putt$Hud$wind_force(rs, w);
    {
      let sky;
      {
        const $t46990_i5848 = (force > 10);
        if ($t46990_i5848 === true) {
          sky = Arcade$Draw$hex(16765762);
        } else {
          sky = Arcade$Draw$hex(10474495);
        }
      }
      {
        let ring;
        {
          let $t46991;
          $t46991 = { $: "Disc", _0: c, _1: 15. };
          {
            let $t46993;
            {
              let $t46992;
              $t46992 = Arcade$Draw$with_alpha(sky, 0.45);
              {
                const $t46914_i5845 = { $: "RoundEnd" };
                {
                  const $t46915_i5846 = { $: "RoundCorner" };
                  $t46993 = ({ ink: $t46992, width: 1.5, ends: $t46914_i5845, corners: $t46915_i5846 });
                }
              }
            }
            {
              const $t46994 = { $: "Over" };
              ring = { $: "StrokeShape", _0: $t46991, _1: $t46993, _2: $t46994 };
            }
          }
        }
        {
          const $t46995 = (force === 0);
          if ($t46995 === true) {
            {
              let $t46999;
              {
                const $t46996 = { $: "Disc", _0: c, _1: 2.5 };
                {
                  const $t46997 = { $: "Flat", _0: sky };
                  {
                    const $t46998 = { $: "Over" };
                    $t46999 = { $: "FillShape", _0: $t46996, _1: $t46997, _2: $t46998 };
                  }
                }
              }
              {
                const $t47000 = { $: "Nil" };
                {
                  const $t47001 = { $: "Cons", _0: $t46999, _1: $t47000 };
                  return { $: "Cons", _0: ring, _1: $t47001 };
                }
              }
            }
          } else {
            {
              let d;
              {
                let $t47005;
                {
                  const $t47002 = w.x;
                  {
                    let $t47004;
                    {
                      const $t47003 = w.y;
                      $t47004 = (0. - $t47003);
                    }
                    $t47005 = ({ x: $t47002, y: $t47004 });
                  }
                }
                d = Arcade$Vec2$normalized($t47005);
              }
              {
                let side;
                {
                  let $t47007;
                  {
                    const $t47006 = d.y;
                    $t47007 = (0. - $t47006);
                  }
                  {
                    const $t47008 = d.x;
                    side = ({ x: $t47007, y: $t47008 });
                  }
                }
                {
                  let reach;
                  {
                    let $t47010;
                    {
                      let $t47009;
                      {
                        let $t48418_i5838;
                        {
                          const $t2580_i15851 = (force > 0);
                          if ($t2580_i15851 === true) {
                            $t48418_i5838 = force;
                          } else {
                            $t48418_i5838 = 0;
                          }
                        }
                        {
                          const $t2579_i15848 = ($t48418_i5838 < 10);
                          if ($t2579_i15848 === true) {
                            $t47009 = $t48418_i5838;
                          } else {
                            $t47009 = 10;
                          }
                        }
                      }
                      $t47010 = $t47009;
                    }
                    reach = (5. + $t47010);
                  }
                  {
                    let tail;
                    {
                      let $t47011;
                      $t47011 = Arcade$Vec2$scale(d, reach);
                      tail = Arcade$Vec2$sub(c, $t47011);
                    }
                    {
                      let tip;
                      {
                        let $t47012;
                        $t47012 = Arcade$Vec2$scale(d, reach);
                        tip = Arcade$Vec2$add(c, $t47012);
                      }
                      {
                        let neck;
                        {
                          const $t47013 = Arcade$Vec2$scale(d, 7.);
                          neck = Arcade$Vec2$sub(tip, $t47013);
                        }
                        {
                          let head;
                          {
                            let $t47015;
                            {
                              let $t47014;
                              $t47014 = Arcade$Vec2$scale(side, 4.5);
                              $t47015 = Arcade$Vec2$add(neck, $t47014);
                            }
                            {
                              let $t47017;
                              {
                                const $t47016 = Arcade$Vec2$scale(side, 4.5);
                                $t47017 = Arcade$Vec2$sub(neck, $t47016);
                              }
                              {
                                const $t47018 = { $: "Nil" };
                                {
                                  const $t47019 = { $: "Cons", _0: $t47017, _1: $t47018 };
                                  {
                                    const $t47020 = { $: "Cons", _0: $t47015, _1: $t47019 };
                                    {
                                      const $t47021 = { $: "Cons", _0: tip, _1: $t47020 };
                                      head = { $: "Poly", _0: $t47021 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                          {
                            let $t47025;
                            {
                              let $t47022;
                              {
                                const $t46916_i5830 = { $: "MoveTo", _0: tail };
                                {
                                  const $t46917_i5831 = { $: "LineTo", _0: neck };
                                  {
                                    const $t46918_i5832 = { $: "Nil" };
                                    {
                                      const $t46919_i5833 = { $: "Cons", _0: $t46917_i5831, _1: $t46918_i5832 };
                                      {
                                        const $t46920_i5834 = { $: "Cons", _0: $t46916_i5830, _1: $t46919_i5833 };
                                        $t47022 = { $: "Outline", _0: $t46920_i5834 };
                                      }
                                    }
                                  }
                                }
                              }
                              {
                                let $t47023;
                                {
                                  const $t46914_i5826 = { $: "RoundEnd" };
                                  {
                                    const $t46915_i5827 = { $: "RoundCorner" };
                                    $t47023 = ({ ink: sky, width: 3., ends: $t46914_i5826, corners: $t46915_i5827 });
                                  }
                                }
                                {
                                  const $t47024 = { $: "Over" };
                                  $t47025 = { $: "StrokeShape", _0: $t47022, _1: $t47023, _2: $t47024 };
                                }
                              }
                            }
                            {
                              let $t47028;
                              {
                                const $t47026 = { $: "Flat", _0: sky };
                                {
                                  const $t47027 = { $: "Over" };
                                  $t47028 = { $: "FillShape", _0: head, _1: $t47026, _2: $t47027 };
                                }
                              }
                              {
                                const $t47029 = { $: "Nil" };
                                {
                                  const $t47030 = { $: "Cons", _0: $t47028, _1: $t47029 };
                                  {
                                    const $t47031 = { $: "Cons", _0: $t47025, _1: $t47030 };
                                    return { $: "Cons", _0: ring, _1: $t47031 };
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
}
const Putt$Hud$compass_ops$clo = { _0: ($_, rs, c, w) => Putt$Hud$compass_ops(rs, c, w) };

function Putt$Hud$top_ops(rs, s, vp) {
  {
    let mid;
    {
      const $t47032 = vp.width;
      mid = ($t47032 / 2.);
    }
    {
      let out;
      {
        let $t47034;
        {
          const $t47033 = Putt$Hud$column(vp);
          $t47034 = ($t47033 / 2.);
        }
        out = ($t47034 - 80.);
      }
      {
        let $t47038;
        {
          let $t47035;
          $t47035 = Putt$Hud$hole_line(s);
          {
            const $t47036 = (mid - out);
            {
              const $t47037 = Arcade$Draw$hex(16119280);
              {
                let $t46913_i5899;
                {
                  const $t46910_i5896 = ({ x: $t47036, y: 20. });
                  {
                    const $t46911_i5897 = { $: "None" };
                    {
                      const $t46912_i5898 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                      $t46913_i5899 = ({ words: $t47035, font: "bold 17px sans-serif", middle: $t46910_i5896, fill: $t47037, edge: $t46911_i5897, frame: $t46912_i5898 });
                    }
                  }
                }
                $t47038 = { $: "DrawText", _0: $t46913_i5899 };
              }
            }
          }
        }
        {
          let $t47042;
          {
            let $t47039;
            $t47039 = Putt$Hud$par_line(s);
            {
              const $t47040 = (mid - out);
              {
                let $t47041;
                {
                  const $t46909_i5890 = Arcade$Draw$hex(16119280);
                  $t47041 = Arcade$Draw$with_alpha($t46909_i5890, 0.7);
                }
                {
                  let $t46913_i5889;
                  {
                    const $t46910_i5886 = ({ x: $t47040, y: 42. });
                    {
                      const $t46911_i5887 = { $: "None" };
                      {
                        const $t46912_i5888 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                        $t46913_i5889 = ({ words: $t47039, font: "13px sans-serif", middle: $t46910_i5886, fill: $t47041, edge: $t46911_i5887, frame: $t46912_i5888 });
                      }
                    }
                  }
                  $t47042 = { $: "DrawText", _0: $t46913_i5889 };
                }
              }
            }
          }
          {
            let $t47046;
            {
              let $t47043;
              $t47043 = Putt$Hud$stroke_line(s);
              {
                const $t47044 = (mid + out);
                {
                  const $t47045 = Arcade$Draw$hex(16119280);
                  {
                    let $t46913_i5880;
                    {
                      const $t46910_i5877 = ({ x: $t47044, y: 20. });
                      {
                        const $t46911_i5878 = { $: "None" };
                        {
                          const $t46912_i5879 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                          $t46913_i5880 = ({ words: $t47043, font: "bold 17px sans-serif", middle: $t46910_i5877, fill: $t47045, edge: $t46911_i5878, frame: $t46912_i5879 });
                        }
                      }
                    }
                    $t47046 = { $: "DrawText", _0: $t46913_i5880 };
                  }
                }
              }
            }
            {
              let $t47050;
              {
                let $t47047;
                $t47047 = Putt$Hud$score_line(s);
                {
                  const $t47048 = (mid + out);
                  {
                    let $t47049;
                    {
                      const $t46909_i5871 = Arcade$Draw$hex(16119280);
                      $t47049 = Arcade$Draw$with_alpha($t46909_i5871, 0.7);
                    }
                    {
                      let $t46913_i5870;
                      {
                        const $t46910_i5867 = ({ x: $t47048, y: 42. });
                        {
                          const $t46911_i5868 = { $: "None" };
                          {
                            const $t46912_i5869 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                            $t46913_i5870 = ({ words: $t47047, font: "13px sans-serif", middle: $t46910_i5867, fill: $t47049, edge: $t46911_i5868, frame: $t46912_i5869 });
                          }
                        }
                      }
                      $t47050 = { $: "DrawText", _0: $t46913_i5870 };
                    }
                  }
                }
              }
              {
                const $t47051 = { $: "Nil" };
                {
                  const $t47052 = { $: "Cons", _0: $t47050, _1: $t47051 };
                  {
                    const $t47053 = { $: "Cons", _0: $t47046, _1: $t47052 };
                    {
                      const $t47054 = { $: "Cons", _0: $t47042, _1: $t47053 };
                      {
                        const $t47055 = { $: "Cons", _0: $t47038, _1: $t47054 };
                        {
                          const $t47056 = ({ x: mid, y: 22. });
                          {
                            const $t47057 = s.wind;
                            {
                              let $t47058;
                              $t47058 = Putt$Hud$compass_ops(rs, $t47056, $t47057);
                              {
                                let $t47064;
                                {
                                  let $t47060;
                                  {
                                    const $t47059 = s.wind;
                                    $t47060 = Putt$Hud$wind_line(rs, $t47059);
                                  }
                                  {
                                    let $t47063;
                                    {
                                      let $t47062;
                                      {
                                        const $t47061 = s.wind;
                                        $t47062 = Putt$Hud$wind_force(rs, $t47061);
                                      }
                                      {
                                        const $t46990_i5859 = ($t47062 > 10);
                                        if ($t46990_i5859 === true) {
                                          $t47063 = Arcade$Draw$hex(16765762);
                                        } else {
                                          $t47063 = Arcade$Draw$hex(10474495);
                                        }
                                      }
                                    }
                                    {
                                      let $t46913_i5857;
                                      {
                                        const $t46910_i5854 = ({ x: mid, y: 50. });
                                        {
                                          const $t46911_i5855 = { $: "None" };
                                          {
                                            const $t46912_i5856 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                            $t46913_i5857 = ({ words: $t47060, font: "12px sans-serif", middle: $t46910_i5854, fill: $t47063, edge: $t46911_i5855, frame: $t46912_i5856 });
                                          }
                                        }
                                      }
                                      $t47064 = { $: "DrawText", _0: $t46913_i5857 };
                                    }
                                  }
                                }
                                {
                                  const $t47065 = { $: "Nil" };
                                  {
                                    const $t47066 = { $: "Cons", _0: $t47064, _1: $t47065 };
                                    {
                                      const $t47067 = List$append$List_DrawOp$List_DrawOp($t47058, $t47066);
                                      return List$append$List_DrawOp$List_DrawOp($t47055, $t47067);
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
  }
}
const Putt$Hud$top_ops$clo = { _0: ($_, rs, s, vp) => Putt$Hud$top_ops(rs, s, vp) };

function Putt$Hud$new_game_ops(vp) {
  {
    let b;
    {
      let right_i5920;
      {
        let $t46885_i5919;
        {
          let $t46882_i5916;
          {
            const $t46881_i5915 = vp.width;
            $t46882_i5916 = ($t46881_i5915 / 2.);
          }
          {
            let $t46884_i5918;
            {
              const $t46883_i5917 = Putt$Hud$column(vp);
              $t46884_i5918 = ($t46883_i5917 / 2.);
            }
            $t46885_i5919 = ($t46882_i5916 + $t46884_i5918);
          }
        }
        right_i5920 = ($t46885_i5919 - 8.);
      }
      {
        const $t46886_i5921 = (right_i5920 - 86.);
        b = ({ left: $t46886_i5921, top: 68., right: right_i5920, bottom: 96. });
      }
    }
    {
      let c;
      c = Putt$Hud$box_centre(b);
      {
        let $t47073;
        {
          const $t47068 = Putt$Hud$rounded(b, 8.);
          {
            let $t47071;
            {
              let $t47070;
              {
                const $t47069 = Arcade$Draw$hex(16119280);
                $t47070 = Arcade$Draw$with_alpha($t47069, 0.45);
              }
              {
                const $t46914_i5912 = { $: "RoundEnd" };
                {
                  const $t46915_i5913 = { $: "RoundCorner" };
                  $t47071 = ({ ink: $t47070, width: 1.5, ends: $t46914_i5912, corners: $t46915_i5913 });
                }
              }
            }
            {
              const $t47072 = { $: "Over" };
              $t47073 = { $: "StrokeShape", _0: $t47068, _1: $t47071, _2: $t47072 };
            }
          }
        }
        {
          let $t47077;
          {
            const $t47074 = c.x;
            {
              const $t47075 = c.y;
              {
                let $t47076;
                {
                  const $t46909_i5909 = Arcade$Draw$hex(16119280);
                  $t47076 = Arcade$Draw$with_alpha($t46909_i5909, 0.7);
                }
                {
                  let $t46913_i5908;
                  {
                    const $t46910_i5905 = ({ x: $t47074, y: $t47075 });
                    {
                      const $t46911_i5906 = { $: "None" };
                      {
                        const $t46912_i5907 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                        $t46913_i5908 = ({ words: "New game", font: "13px sans-serif", middle: $t46910_i5905, fill: $t47076, edge: $t46911_i5906, frame: $t46912_i5907 });
                      }
                    }
                  }
                  $t47077 = { $: "DrawText", _0: $t46913_i5908 };
                }
              }
            }
          }
          {
            const $t47078 = { $: "Nil" };
            {
              const $t47079 = { $: "Cons", _0: $t47077, _1: $t47078 };
              {
                const $rc_2560 = { $: "Cons", _0: $t47073, _1: $t47079 };
                return $rc_2560;
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Hud$new_game_ops$clo = { _0: ($_, vp) => Putt$Hud$new_game_ops(vp) };

function Putt$Hud$prompt_ops(a, s, vp, moment) {
  {
    let x;
    {
      const vp_i13750 = vp;
      {
        let $t47081_i13752;
        {
          const $t47080_i13751 = vp.width;
          $t47081_i13752 = ($t47080_i13751 / 2.);
        }
        x = ($t47081_i13752 - 47.);
      }
    }
    {
      let words;
      switch (moment.$) {
        case "HudRolling": {
          words = { $: "Nil" };
          break;
        }
        case "HudWaiting": {
          {
            const $t47090 = s.phase;
            switch ($t47090.$) {
              case "PuttAiming": {
                {
                  let $t47093;
                  {
                    let $t47092;
                    {
                      const $t46909_i5931 = Arcade$Draw$hex(16119280);
                      $t47092 = Arcade$Draw$with_alpha($t46909_i5931, 0.7);
                    }
                    {
                      let $t46913_i5930;
                      {
                        const $t46910_i5927 = ({ x: x, y: 82. });
                        {
                          const $t46911_i5928 = { $: "None" };
                          {
                            const $t46912_i5929 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                            $t46913_i5930 = ({ words: "Drag back anywhere, let go to putt", font: "13px sans-serif", middle: $t46910_i5927, fill: $t47092, edge: $t46911_i5928, frame: $t46912_i5929 });
                          }
                        }
                      }
                      $t47093 = { $: "DrawText", _0: $t46913_i5930 };
                    }
                  }
                  {
                    const $t47094 = { $: "Nil" };
                    words = { $: "Cons", _0: $t47093, _1: $t47094 };
                  }
                }
                break;
              }
              case "PuttHoleDone": {
                words = { $: "Nil" };
                break;
              }
              case "PuttCourseDone": {
                words = { $: "Nil" };
                break;
              }
              default: {
                throw new Error("non-exhaustive pattern match");
                break;
              }
            }
          }
          break;
        }
        case "HudPulling": {
          const $f47119 = moment._0;
          {
            const pull = $f47119;
            {
              let strength;
              {
                let $t47095;
                $t47095 = Arcade$Vec2$length(pull);
                strength = Putt$Aim$strength(a, $t47095);
              }
              {
                let bar;
                {
                  const $t47096 = (x - 80.);
                  {
                    const $t47097 = (x + 80.);
                    bar = ({ left: $t47096, top: 87., right: $t47097, bottom: 95. });
                  }
                }
                {
                  let filled;
                  {
                    let $t47101;
                    {
                      let $t47099;
                      {
                        const $t47098 = bar.left;
                        $t47099 = ($t47098 + 8.);
                      }
                      {
                        const $t47100 = (152. * strength);
                        $t47101 = ($t47099 + $t47100);
                      }
                    }
                    filled = ({ ...bar, right: $t47101 });
                  }
                  {
                    let $t47104;
                    {
                      let $t47102;
                      {
                        const a_i13740 = a;
                        {
                          const pulled_i13742 = Arcade$Vec2$length(pull);
                          {
                            let $t46797_i13744;
                            {
                              const $t46796_i13743 = a.dead;
                              $t46797_i13744 = (pulled_i13742 > $t46796_i13743);
                            }
                            if ($t46797_i13744 === true) {
                              {
                                let $t46801_i13748;
                                {
                                  let $t46800_i13747;
                                  {
                                    let $t46799_i13746;
                                    {
                                      const $t46798_i13745 = Putt$Aim$strength(a, pulled_i13742);
                                      $t46799_i13746 = (100. * $t46798_i13745);
                                    }
                                    $t46800_i13747 = march_float_round($t46799_i13746);
                                  }
                                  $t46801_i13748 = String($t46800_i13747);
                                }
                                {
                                  const $rc_2558_i13749 = march_string_concat3("Power ", $t46801_i13748, "%");
                                  $t47102 = $rc_2558_i13749;
                                }
                              }
                            } else {
                              $t47102 = "Let go here to cancel";
                            }
                          }
                        }
                      }
                      {
                        const $t47103 = Arcade$Draw$hex(16119280);
                        {
                          let $t46913_i5949;
                          {
                            const $t46910_i5946 = ({ x: x, y: 75. });
                            {
                              const $t46911_i5947 = { $: "None" };
                              {
                                const $t46912_i5948 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                $t46913_i5949 = ({ words: $t47102, font: "bold 14px sans-serif", middle: $t46910_i5946, fill: $t47103, edge: $t46911_i5947, frame: $t46912_i5948 });
                              }
                            }
                          }
                          $t47104 = { $: "DrawText", _0: $t46913_i5949 };
                        }
                      }
                    }
                    {
                      let $t47110;
                      {
                        const $t47105 = Putt$Hud$rounded(bar, 4.);
                        {
                          let $t47108;
                          {
                            let $t47107;
                            {
                              const $t47106 = Arcade$Draw$hex(16119280);
                              $t47107 = Arcade$Draw$with_alpha($t47106, 0.2);
                            }
                            $t47108 = { $: "Flat", _0: $t47107 };
                          }
                          {
                            const $t47109 = { $: "Over" };
                            $t47110 = { $: "FillShape", _0: $t47105, _1: $t47108, _2: $t47109 };
                          }
                        }
                      }
                      {
                        let $t47115;
                        {
                          const $t47111 = Putt$Hud$rounded(filled, 4.);
                          {
                            let $t47113;
                            {
                              let $t47112;
                              {
                                const $t47082_i5933 = (strength < 0.5);
                                if ($t47082_i5933 === true) {
                                  {
                                    const $t47083_i5934 = Arcade$Draw$hex(8311626);
                                    {
                                      const $t47084_i5935 = Arcade$Draw$hex(16765762);
                                      {
                                        const $t47085_i5936 = (strength * 2.);
                                        $t47112 = Arcade$Draw$mix($t47083_i5934, $t47084_i5935, $t47085_i5936);
                                      }
                                    }
                                  }
                                } else {
                                  {
                                    const $t47086_i5937 = Arcade$Draw$hex(16765762);
                                    {
                                      const $t47087_i5938 = Arcade$Draw$hex(15221311);
                                      {
                                        let $t47089_i5940;
                                        {
                                          const $t47088_i5939 = (strength - 0.5);
                                          $t47089_i5940 = ($t47088_i5939 * 2.);
                                        }
                                        $t47112 = Arcade$Draw$mix($t47086_i5937, $t47087_i5938, $t47089_i5940);
                                      }
                                    }
                                  }
                                }
                              }
                              $t47113 = { $: "Flat", _0: $t47112 };
                            }
                            {
                              const $t47114 = { $: "Over" };
                              $t47115 = { $: "FillShape", _0: $t47111, _1: $t47113, _2: $t47114 };
                            }
                          }
                        }
                        {
                          const $t47116 = { $: "Nil" };
                          {
                            const $t47117 = { $: "Cons", _0: $t47115, _1: $t47116 };
                            {
                              const $t47118 = { $: "Cons", _0: $t47110, _1: $t47117 };
                              words = { $: "Cons", _0: $t47104, _1: $t47118 };
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
        default: {
          throw new Error("non-exhaustive pattern match");
          break;
        }
      }
      {
        const $t47120 = Putt$Hud$new_game_ops(vp);
        return List$append$List_DrawOp$List_DrawOp(words, $t47120);
      }
    }
  }
}
const Putt$Hud$prompt_ops$clo = { _0: ($_, a, s, vp, moment) => Putt$Hud$prompt_ops(a, s, vp, moment) };

function Putt$Hud$dot_ops($tco_a0, $tco_a1, $tco_a2, $tco_a3) {
  __tco: for (;;) {
    const rs = $tco_a0;
    const l = $tco_a1;
    const ps = $tco_a2;
    const acc = $tco_a3;
    switch (ps.$) {
      case "Nil": {
        {
          const $t1095_i5951 = { $: "Nil" };
          return List$reverse_onto$List_DrawOp$List_DrawOp(acc, $t1095_i5951);
        }
        break;
      }
      case "Cons": {
        const $f47129 = ps._0;
        const $f47130 = ps._1;
        {
          const rest = $f47130;
          {
            const p = $f47129;
            {
              let $t47127;
              {
                let $t47122;
                {
                  let $t47121;
                  $t47121 = Putt$View$px(rs, l, p);
                  $t47122 = { $: "Disc", _0: $t47121, _1: 2.5 };
                }
                {
                  let $t47125;
                  {
                    let $t47124;
                    {
                      const $t47123 = Arcade$Draw$hex(16119280);
                      $t47124 = Arcade$Draw$with_alpha($t47123, 0.9);
                    }
                    $t47125 = { $: "Flat", _0: $t47124 };
                  }
                  {
                    const $t47126 = { $: "Over" };
                    $t47127 = { $: "FillShape", _0: $t47122, _1: $t47125, _2: $t47126 };
                  }
                }
              }
              {
                const $t47128 = { $: "Cons", _0: $t47127, _1: acc };
                {
                  $tco_a0 = rs;
                  $tco_a1 = l;
                  $tco_a2 = rest;
                  $tco_a3 = $t47128;
                  continue __tco;
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
const Putt$Hud$dot_ops$clo = { _0: ($_, rs, l, ps, acc) => Putt$Hud$dot_ops(rs, l, ps, acc) };

function Putt$Hud$aim_ops(rs, a, l, s, pull) {
  {
    let $t47143;
    $t47143 = Putt$Aim$shot_of_pull(rs, a, pull);
    switch ($t47143.$) {
      case "None": {
        {
          const $t47144 = s.ball;
          {
            let $t47141_i5965;
            {
              let $t47136_i5960;
              {
                const $t47135_i5959 = Putt$View$px(rs, l, $t47144);
                $t47136_i5960 = { $: "Disc", _0: $t47135_i5959, _1: 13. };
              }
              {
                let $t47139_i5963;
                {
                  let $t47138_i5962;
                  {
                    const $t47137_i5961 = Arcade$Draw$hex(16119280);
                    $t47138_i5962 = Arcade$Draw$with_alpha($t47137_i5961, 0.55);
                  }
                  {
                    const $t46914_i15870 = { $: "RoundEnd" };
                    {
                      const $t46915_i15871 = { $: "RoundCorner" };
                      $t47139_i5963 = ({ ink: $t47138_i5962, width: 2., ends: $t46914_i15870, corners: $t46915_i15871 });
                    }
                  }
                }
                {
                  const $t47140_i5964 = { $: "Over" };
                  $t47141_i5965 = { $: "StrokeShape", _0: $t47136_i5960, _1: $t47139_i5963, _2: $t47140_i5964 };
                }
              }
            }
            {
              const $t47142_i5966 = { $: "Nil" };
              return { $: "Cons", _0: $t47141_i5965, _1: $t47142_i5966 };
            }
          }
        }
        break;
      }
      case "Some": {
        const $f47179 = $t47143._0;
        {
          const shot = $f47179;
          {
            let seen;
            {
              let $t47145;
              $t47145 = Putt$Rules$current(s);
              {
                const $t47146 = s.ball;
                seen = Putt$Aim$preview(rs, a, $t47145, $t47146, shot);
              }
            }
            {
              let at;
              {
                const $t47147 = s.ball;
                at = Putt$View$px(rs, l, $t47147);
              }
              {
                let pulled;
                pulled = Arcade$Vec2$length(pull);
                {
                  let back;
                  {
                    let $t47151;
                    {
                      let $t47150;
                      {
                        let $t47149;
                        {
                          const $t47148 = a.full;
                          {
                            const $t48416_i5984 = ($t47148 < pulled);
                            if ($t48416_i5984 === true) {
                              $t47149 = $t47148;
                            } else {
                              $t47149 = pulled;
                            }
                          }
                        }
                        $t47150 = ($t47149 / pulled);
                      }
                      $t47151 = Arcade$Vec2$scale(pull, $t47150);
                    }
                    back = Arcade$Vec2$add(at, $t47151);
                  }
                  {
                    let ink;
                    {
                      const $t47152 = seen.holes;
                      if ($t47152 === true) {
                        ink = Arcade$Draw$hex(16765762);
                      } else {
                        ink = Arcade$Draw$hex(16119280);
                      }
                    }
                    {
                      let $t47158;
                      {
                        let $t47153;
                        {
                          const $t46916_i5977 = { $: "MoveTo", _0: at };
                          {
                            const $t46917_i5978 = { $: "LineTo", _0: back };
                            {
                              const $t46918_i5979 = { $: "Nil" };
                              {
                                const $t46919_i5980 = { $: "Cons", _0: $t46917_i5978, _1: $t46918_i5979 };
                                {
                                  const $t46920_i5981 = { $: "Cons", _0: $t46916_i5977, _1: $t46919_i5980 };
                                  $t47153 = { $: "Outline", _0: $t46920_i5981 };
                                }
                              }
                            }
                          }
                        }
                        {
                          let $t47156;
                          {
                            let $t47155;
                            {
                              const $t47154 = Arcade$Draw$hex(16119280);
                              $t47155 = Arcade$Draw$with_alpha($t47154, 0.5);
                            }
                            {
                              const $t46914_i5973 = { $: "RoundEnd" };
                              {
                                const $t46915_i5974 = { $: "RoundCorner" };
                                $t47156 = ({ ink: $t47155, width: 3., ends: $t46914_i5973, corners: $t46915_i5974 });
                              }
                            }
                          }
                          {
                            const $t47157 = { $: "Over" };
                            $t47158 = { $: "StrokeShape", _0: $t47153, _1: $t47156, _2: $t47157 };
                          }
                        }
                      }
                      {
                        let $t47164;
                        {
                          const $t47159 = { $: "Disc", _0: back, _1: 5. };
                          {
                            let $t47162;
                            {
                              let $t47161;
                              {
                                const $t47160 = Arcade$Draw$hex(16119280);
                                $t47161 = Arcade$Draw$with_alpha($t47160, 0.8);
                              }
                              $t47162 = { $: "Flat", _0: $t47161 };
                            }
                            {
                              const $t47163 = { $: "Over" };
                              $t47164 = { $: "FillShape", _0: $t47159, _1: $t47162, _2: $t47163 };
                            }
                          }
                        }
                        {
                          const $t47165 = { $: "Nil" };
                          {
                            const $t47166 = { $: "Cons", _0: $t47164, _1: $t47165 };
                            {
                              const band = { $: "Cons", _0: $t47158, _1: $t47166 };
                              {
                                const $t47167 = seen.dots;
                                {
                                  const $t47168 = { $: "Nil" };
                                  {
                                    let $t47169;
                                    $t47169 = Putt$Hud$dot_ops(rs, l, $t47167, $t47168);
                                    {
                                      let $t47175;
                                      {
                                        let $t47172;
                                        {
                                          let $t47171;
                                          {
                                            const $t47170 = seen.ends;
                                            $t47171 = Putt$View$px(rs, l, $t47170);
                                          }
                                          $t47172 = { $: "Disc", _0: $t47171, _1: 7. };
                                        }
                                        {
                                          let $t47173;
                                          {
                                            const $t46914_i5969 = { $: "RoundEnd" };
                                            {
                                              const $t46915_i5970 = { $: "RoundCorner" };
                                              $t47173 = ({ ink: ink, width: 2.5, ends: $t46914_i5969, corners: $t46915_i5970 });
                                            }
                                          }
                                          {
                                            const $t47174 = { $: "Over" };
                                            $t47175 = { $: "StrokeShape", _0: $t47172, _1: $t47173, _2: $t47174 };
                                          }
                                        }
                                      }
                                      {
                                        const $t47176 = { $: "Nil" };
                                        {
                                          const $t47177 = { $: "Cons", _0: $t47175, _1: $t47176 };
                                          {
                                            const $t47178 = List$append$List_DrawOp$List_DrawOp($t47169, $t47177);
                                            return List$append$List_DrawOp$List_DrawOp(band, $t47178);
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
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Putt$Hud$aim_ops$clo = { _0: ($_, rs, a, l, s, pull) => Putt$Hud$aim_ops(rs, a, l, s, pull) };

function Putt$Hud$cell_ops($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4, $tco_a5) {
  __tco: for (;;) {
    const cells = $tco_a0;
    const x = $tco_a1;
    const step = $tco_a2;
    const y = $tco_a3;
    const font = $tco_a4;
    const acc = $tco_a5;
    switch (cells.$) {
      case "Nil": {
        {
          const $t1095_i5996 = { $: "Nil" };
          return List$reverse_onto$List_DrawOp$List_DrawOp(acc, $t1095_i5996);
        }
        break;
      }
      case "Cons": {
        const $f47188 = cells._0;
        const $f47189 = cells._1;
        const $f47190 = $f47188._0;
        const $f47191 = $f47188._1;
        {
          const rest = $f47189;
          {
            const ink = $f47191;
            {
              const words = $f47190;
              {
                const $t47185 = (x + step);
                {
                  let $t47186;
                  {
                    let $t46913_i6005;
                    {
                      const $t46910_i6002 = ({ x: x, y: y });
                      {
                        const $t46911_i6003 = { $: "None" };
                        {
                          const $t46912_i6004 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                          $t46913_i6005 = ({ words: words, font: font, middle: $t46910_i6002, fill: ink, edge: $t46911_i6003, frame: $t46912_i6004 });
                        }
                      }
                    }
                    $t47186 = { $: "DrawText", _0: $t46913_i6005 };
                  }
                  {
                    const $t47187 = { $: "Cons", _0: $t47186, _1: acc };
                    {
                      $tco_a0 = rest;
                      $tco_a1 = $t47185;
                      $tco_a2 = step;
                      $tco_a3 = y;
                      $tco_a4 = font;
                      $tco_a5 = $t47187;
                      continue __tco;
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
    return undefined;
  }
}
const Putt$Hud$cell_ops$clo = { _0: ($_, cells, x, step, y, font, acc) => Putt$Hud$cell_ops(cells, x, step, y, font, acc) };

function Putt$Hud$plain($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const words = $tco_a0;
    const ink = $tco_a1;
    const acc = $tco_a2;
    switch (words.$) {
      case "Nil": {
        {
          const $t1095_i6007 = { $: "Nil" };
          return List$reverse_onto$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int(acc, $t1095_i6007);
        }
        break;
      }
      case "Cons": {
        const $f47202 = words._0;
        const $f47203 = words._1;
        {
          const rest = $f47203;
          {
            const w = $f47202;
            {
              let $t47200;
              $t47200 = { _0: w, _1: ink };
              {
                const $t47201 = { $: "Cons", _0: $t47200, _1: acc };
                {
                  $tco_a0 = rest;
                  $tco_a1 = ink;
                  $tco_a2 = $t47201;
                  continue __tco;
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
const Putt$Hud$plain$clo = { _0: ($_, words, ink, acc) => Putt$Hud$plain(words, ink, acc) };

function Putt$Hud$par_texts($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const pars = $tco_a0;
    const acc = $tco_a1;
    switch (pars.$) {
      case "Nil": {
        {
          const $t1095_i6009 = { $: "Nil" };
          return List$reverse_onto$List_String$List_String(acc, $t1095_i6009);
        }
        break;
      }
      case "Cons": {
        const $f47210 = pars._0;
        const $f47211 = pars._1;
        {
          const rest = $f47211;
          {
            const p = $f47210;
            {
              const $t47208 = String(p);
              {
                const $t47209 = { $: "Cons", _0: $t47208, _1: acc };
                {
                  $tco_a0 = rest;
                  $tco_a1 = $t47209;
                  continue __tco;
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
const Putt$Hud$par_texts$clo = { _0: ($_, pars, acc) => Putt$Hud$par_texts(pars, acc) };

function Putt$Hud$card_blocks() {
  {
    let $t47275;
    {
      let $t47274;
      {
        const $t47272 = Putt$Course$hole_count();
        $t47274 = (($t47272 + 9) < 4611686018427387904 && ($t47272 + 9) >= -4611686018427387904 ? ($t47272 + 9) : march_int_ovf(($t47272 + 9), 0));
      }
      $t47275 = (($t47274 - 1) < 4611686018427387904 && ($t47274 - 1) >= -4611686018427387904 ? ($t47274 - 1) : march_int_ovf(($t47274 - 1), 1));
    }
    return (($t47275 - $t47275 % 9) / 9);
  }
}
const Putt$Hud$card_blocks$clo = { _0: ($_) => Putt$Hud$card_blocks() };

function Putt$Hud$block_ops($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4, $tco_a5, $tco_a6) {
  __tco: for (;;) {
    const numbers = $tco_a0;
    const pars = $tco_a1;
    const strokes = $tco_a2;
    const x0 = $tco_a3;
    const step = $tco_a4;
    const y = $tco_a5;
    const acc = $tco_a6;
    switch (numbers.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f47305 = numbers._0;
        const $f47306 = numbers._1;
        {
          let $t47277;
          {
            const $t1343_i6061 = { $: "Nil" };
            $t47277 = List$take_onto$List_String$Int$List_String(numbers, 9, $t1343_i6061);
          }
          {
            let $t47278;
            {
              const $t46909_i6058 = Arcade$Draw$hex(16119280);
              $t47278 = Arcade$Draw$with_alpha($t46909_i6058, 0.7);
            }
            {
              const $t47279 = { $: "Nil" };
              {
                const $t47280 = Putt$Hud$plain($t47277, $t47278, $t47279);
                {
                  let $t47281;
                  {
                    let $t47182_i6055;
                    {
                      const $t47180_i6053 = (x0 - 30.);
                      {
                        let $t47181_i6054;
                        {
                          const $t46909_i15903 = Arcade$Draw$hex(16119280);
                          $t47181_i6054 = Arcade$Draw$with_alpha($t46909_i15903, 0.7);
                        }
                        {
                          let $t46913_i15902;
                          {
                            const $t46910_i15899 = ({ x: $t47180_i6053, y: y });
                            {
                              const $t46911_i15900 = { $: "None" };
                              {
                                const $t46912_i15901 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                $t46913_i15902 = ({ words: "Hole", font: "12px sans-serif", middle: $t46910_i15899, fill: $t47181_i6054, edge: $t46911_i15900, frame: $t46912_i15901 });
                              }
                            }
                          }
                          $t47182_i6055 = { $: "DrawText", _0: $t46913_i15902 };
                        }
                      }
                    }
                    {
                      const $t47183_i6056 = { $: "Nil" };
                      {
                        const $t47184_i6057 = Putt$Hud$cell_ops($t47280, x0, step, y, "12px sans-serif", $t47183_i6056);
                        $t47281 = { $: "Cons", _0: $t47182_i6055, _1: $t47184_i6057 };
                      }
                    }
                  }
                  {
                    let $t47282;
                    {
                      const $t1343_i6046 = { $: "Nil" };
                      $t47282 = List$take_onto$List_Int$Int$List_Int(pars, 9, $t1343_i6046);
                    }
                    {
                      const $t47283 = { $: "Nil" };
                      {
                        const $t47284 = Putt$Hud$par_texts($t47282, $t47283);
                        {
                          const $t47285 = Arcade$Draw$hex(16119280);
                          {
                            const $t47286 = { $: "Nil" };
                            {
                              const $t47287 = Putt$Hud$plain($t47284, $t47285, $t47286);
                              {
                                const $t47288 = (y + 22.);
                                {
                                  let $t47289;
                                  {
                                    let $t47182_i6041;
                                    {
                                      const $t47180_i6039 = (x0 - 30.);
                                      {
                                        let $t47181_i6040;
                                        {
                                          const $t46909_i15893 = Arcade$Draw$hex(16119280);
                                          $t47181_i6040 = Arcade$Draw$with_alpha($t46909_i15893, 0.7);
                                        }
                                        {
                                          let $t46913_i15892;
                                          {
                                            const $t46910_i15889 = ({ x: $t47180_i6039, y: $t47288 });
                                            {
                                              const $t46911_i15890 = { $: "None" };
                                              {
                                                const $t46912_i15891 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                                $t46913_i15892 = ({ words: "Par", font: "12px sans-serif", middle: $t46910_i15889, fill: $t47181_i6040, edge: $t46911_i15890, frame: $t46912_i15891 });
                                              }
                                            }
                                          }
                                          $t47182_i6041 = { $: "DrawText", _0: $t46913_i15892 };
                                        }
                                      }
                                    }
                                    {
                                      const $t47183_i6042 = { $: "Nil" };
                                      {
                                        const $t47184_i6043 = Putt$Hud$cell_ops($t47287, x0, step, $t47288, "14px sans-serif", $t47183_i6042);
                                        $t47289 = { $: "Cons", _0: $t47182_i6041, _1: $t47184_i6043 };
                                      }
                                    }
                                  }
                                  {
                                    let $t47290;
                                    {
                                      const $t1343_i6032 = { $: "Nil" };
                                      $t47290 = List$take_onto$List_Int$Int$List_Int(pars, 9, $t1343_i6032);
                                    }
                                    {
                                      let $t47291;
                                      {
                                        const $t1343_i6029 = { $: "Nil" };
                                        $t47291 = List$take_onto$List_Option_Int$Int$List_Option_Int(strokes, 9, $t1343_i6029);
                                      }
                                      {
                                        const $t47292 = { $: "Nil" };
                                        {
                                          const $t47293 = Putt$Hud$scored($t47290, $t47291, $t47292);
                                          {
                                            const $t47294 = (y + 44.);
                                            {
                                              let $t47295;
                                              {
                                                let $t47182_i6024;
                                                {
                                                  const $t47180_i6022 = (x0 - 30.);
                                                  {
                                                    let $t47181_i6023;
                                                    {
                                                      const $t46909_i15883 = Arcade$Draw$hex(16119280);
                                                      $t47181_i6023 = Arcade$Draw$with_alpha($t46909_i15883, 0.7);
                                                    }
                                                    {
                                                      let $t46913_i15882;
                                                      {
                                                        const $t46910_i15879 = ({ x: $t47180_i6022, y: $t47294 });
                                                        {
                                                          const $t46911_i15880 = { $: "None" };
                                                          {
                                                            const $t46912_i15881 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                                            $t46913_i15882 = ({ words: "You", font: "12px sans-serif", middle: $t46910_i15879, fill: $t47181_i6023, edge: $t46911_i15880, frame: $t46912_i15881 });
                                                          }
                                                        }
                                                      }
                                                      $t47182_i6024 = { $: "DrawText", _0: $t46913_i15882 };
                                                    }
                                                  }
                                                }
                                                {
                                                  const $t47183_i6025 = { $: "Nil" };
                                                  {
                                                    const $t47184_i6026 = Putt$Hud$cell_ops($t47293, x0, step, $t47294, "bold 15px sans-serif", $t47183_i6025);
                                                    $t47295 = { $: "Cons", _0: $t47182_i6024, _1: $t47184_i6026 };
                                                  }
                                                }
                                              }
                                              {
                                                const $t47296 = { $: "Nil" };
                                                {
                                                  const $t47297 = { $: "Cons", _0: $t47295, _1: $t47296 };
                                                  {
                                                    const $t47298 = { $: "Cons", _0: $t47289, _1: $t47297 };
                                                    {
                                                      const $t47299 = { $: "Cons", _0: $t47281, _1: $t47298 };
                                                      {
                                                        let rows;
                                                        {
                                                          const prepend_reversed_i6013 = { $: "$Clo_prepend_reversed$0_List_concat_List_List_DrawOp", _0: prepend_reversed$apply$0_List_concat_List_List_DrawOp };
                                                          {
                                                            const go_i6014 = { $: "$Clo_go$1_List_concat_List_List_DrawOp", _0: go$apply$1_List_concat_List_List_DrawOp, _1: prepend_reversed_i6013 };
                                                            {
                                                              const $t1230_i6015 = { $: "Nil" };
                                                              rows = go$apply$1_List_concat_List_List_DrawOp(go_i6014, $t47299, $t1230_i6015);
                                                            }
                                                          }
                                                        }
                                                        {
                                                          const $t47300 = List$drop$List_String$Int(numbers, 9);
                                                          {
                                                            const $t47301 = List$drop$List_Int$Int(pars, 9);
                                                            {
                                                              const $t47302 = List$drop$List_Option_Int$Int(strokes, 9);
                                                              {
                                                                const $t47303 = (y + 76.);
                                                                {
                                                                  const $t47304 = List$append$List_DrawOp$List_DrawOp(acc, rows);
                                                                  {
                                                                    $tco_a0 = $t47300;
                                                                    $tco_a1 = $t47301;
                                                                    $tco_a2 = $t47302;
                                                                    $tco_a3 = x0;
                                                                    $tco_a4 = step;
                                                                    $tco_a5 = $t47303;
                                                                    $tco_a6 = $t47304;
                                                                    continue __tco;
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
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
    return undefined;
  }
}
const Putt$Hud$block_ops$clo = { _0: ($_, numbers, pars, strokes, x0, step, y, acc) => Putt$Hud$block_ops(numbers, pars, strokes, x0, step, y, acc) };

function Putt$Hud$card_ops(s, vp) {
  {
    let w;
    {
      let $t47315;
      {
        const $t47314 = vp.width;
        $t47315 = ($t47314 - 24.);
      }
      {
        const $t48416_i6132 = (360. < $t47315);
        if ($t48416_i6132 === true) {
          w = 360.;
        } else {
          w = $t47315;
        }
      }
    }
    {
      let tall;
      {
        let $t47313_i6129;
        {
          let $t47312_i6128;
          {
            const $t47311_i6127 = Putt$Hud$card_blocks();
            $t47312_i6128 = $t47311_i6127;
          }
          $t47313_i6129 = (76. * $t47312_i6128);
        }
        tall = (212. + $t47313_i6129);
      }
      {
        let mid;
        {
          const $t47316 = vp.width;
          mid = ($t47316 / 2.);
        }
        {
          let top;
          {
            let $t47320;
            {
              let $t47318;
              {
                const $t47317 = vp.height;
                $t47318 = ($t47317 / 2.);
              }
              {
                const $t47319 = (tall / 2.);
                $t47320 = ($t47318 - $t47319);
              }
            }
            {
              const $t48415_i6126 = (4. >= $t47320);
              if ($t48415_i6126 === true) {
                top = 4.;
              } else {
                top = $t47320;
              }
            }
          }
          {
            let panel;
            {
              let $t47322;
              {
                const $t47321 = (w / 2.);
                $t47322 = (mid - $t47321);
              }
              {
                let $t47324;
                {
                  const $t47323 = (w / 2.);
                  $t47324 = (mid + $t47323);
                }
                {
                  const $t47325 = (top + tall);
                  panel = ({ left: $t47322, top: top, right: $t47324, bottom: $t47325 });
                }
              }
            }
            {
              let screen;
              {
                const $t47326 = ({ x: 0., y: 0. });
                {
                  let $t47328;
                  {
                    const $t47327 = vp.width;
                    $t47328 = ({ x: $t47327, y: 0. });
                  }
                  {
                    let $t47331;
                    {
                      const $t47329 = vp.width;
                      {
                        const $t47330 = vp.height;
                        $t47331 = ({ x: $t47329, y: $t47330 });
                      }
                    }
                    {
                      let $t47333;
                      {
                        const $t47332 = vp.height;
                        $t47333 = ({ x: 0., y: $t47332 });
                      }
                      {
                        const $t47334 = { $: "Nil" };
                        {
                          const $t47335 = { $: "Cons", _0: $t47333, _1: $t47334 };
                          {
                            const $t47336 = { $: "Cons", _0: $t47331, _1: $t47335 };
                            {
                              const $t47337 = { $: "Cons", _0: $t47328, _1: $t47336 };
                              {
                                const $t47338 = { $: "Cons", _0: $t47326, _1: $t47337 };
                                screen = { $: "Poly", _0: $t47338 };
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              {
                let step;
                {
                  let $t47342;
                  {
                    const $t47339 = (w - 80.);
                    {
                      const $t47341 = 9;
                      $t47342 = ($t47339 / $t47341);
                    }
                  }
                  {
                    const $t48416_i6115 = (30. < $t47342);
                    if ($t48416_i6115 === true) {
                      step = 30.;
                    } else {
                      step = $t47342;
                    }
                  }
                }
                {
                  let shown;
                  {
                    let $t47344;
                    {
                      const $t47343 = Putt$Course$hole_count();
                      $t47344 = $t47343;
                    }
                    {
                      const $t47346 = 9;
                      {
                        const $t48416_i6112 = ($t47346 < $t47344);
                        if ($t48416_i6112 === true) {
                          shown = $t47346;
                        } else {
                          shown = $t47344;
                        }
                      }
                    }
                  }
                  {
                    let x0;
                    {
                      const $t47347 = (mid + 20.);
                      {
                        let $t47350;
                        {
                          let $t47349;
                          {
                            const $t47348 = (shown - 1.);
                            $t47349 = (step * $t47348);
                          }
                          $t47350 = ($t47349 / 2.);
                        }
                        x0 = ($t47347 - $t47350);
                      }
                    }
                    {
                      let below;
                      {
                        const $t47351 = (top + 104.);
                        {
                          let $t47354;
                          {
                            let $t47353;
                            {
                              const $t47352 = Putt$Hud$card_blocks();
                              $t47353 = $t47352;
                            }
                            $t47354 = (76. * $t47353);
                          }
                          below = ($t47351 + $t47354);
                        }
                      }
                      {
                        let button;
                        {
                          const $t47355 = (mid - 110.);
                          {
                            const $t47356 = (below + 36.);
                            {
                              const $t47357 = (mid + 110.);
                              {
                                const $t47358 = (below + 78.);
                                button = ({ left: $t47355, top: $t47356, right: $t47357, bottom: $t47358 });
                              }
                            }
                          }
                        }
                        {
                          let $t47363;
                          {
                            let $t47361;
                            {
                              let $t47360;
                              {
                                const $t47359 = Arcade$Draw$hex(0);
                                $t47360 = Arcade$Draw$with_alpha($t47359, 0.45);
                              }
                              $t47361 = { $: "Flat", _0: $t47360 };
                            }
                            {
                              const $t47362 = { $: "Over" };
                              $t47363 = { $: "FillShape", _0: screen, _1: $t47361, _2: $t47362 };
                            }
                          }
                          {
                            let $t47369;
                            {
                              let $t47364;
                              $t47364 = Putt$Hud$rounded(panel, 14.);
                              {
                                let $t47367;
                                {
                                  let $t47366;
                                  {
                                    const $t47365 = Arcade$Draw$hex(1451805);
                                    $t47366 = Arcade$Draw$with_alpha($t47365, 0.96);
                                  }
                                  $t47367 = { $: "Flat", _0: $t47366 };
                                }
                                {
                                  const $t47368 = { $: "Over" };
                                  $t47369 = { $: "FillShape", _0: $t47364, _1: $t47367, _2: $t47368 };
                                }
                              }
                            }
                            {
                              let $t47375;
                              {
                                const $t47370 = Putt$Hud$rounded(panel, 14.);
                                {
                                  let $t47373;
                                  {
                                    let $t47372;
                                    {
                                      const $t47371 = Arcade$Draw$hex(16119280);
                                      $t47372 = Arcade$Draw$with_alpha($t47371, 0.25);
                                    }
                                    {
                                      const $t46914_i6108 = { $: "RoundEnd" };
                                      {
                                        const $t46915_i6109 = { $: "RoundCorner" };
                                        $t47373 = ({ ink: $t47372, width: 1.5, ends: $t46914_i6108, corners: $t46915_i6109 });
                                      }
                                    }
                                  }
                                  {
                                    const $t47374 = { $: "Over" };
                                    $t47375 = { $: "StrokeShape", _0: $t47370, _1: $t47373, _2: $t47374 };
                                  }
                                }
                              }
                              {
                                let $t47379;
                                {
                                  let $t47376;
                                  $t47376 = Putt$Hud$card_title(s);
                                  {
                                    const $t47377 = (top + 36.);
                                    {
                                      const $t47378 = Arcade$Draw$hex(16765762);
                                      {
                                        let $t46913_i6105;
                                        {
                                          const $t46910_i6102 = ({ x: mid, y: $t47377 });
                                          {
                                            const $t46911_i6103 = { $: "None" };
                                            {
                                              const $t46912_i6104 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                              $t46913_i6105 = ({ words: $t47376, font: "bold 26px sans-serif", middle: $t46910_i6102, fill: $t47378, edge: $t46911_i6103, frame: $t46912_i6104 });
                                            }
                                          }
                                        }
                                        $t47379 = { $: "DrawText", _0: $t46913_i6105 };
                                      }
                                    }
                                  }
                                }
                                {
                                  let $t47383;
                                  {
                                    let $t47380;
                                    $t47380 = Putt$Hud$card_detail(s);
                                    {
                                      const $t47381 = (top + 66.);
                                      {
                                        const $t47382 = Arcade$Draw$hex(16119280);
                                        {
                                          let $t46913_i6096;
                                          {
                                            const $t46910_i6093 = ({ x: mid, y: $t47381 });
                                            {
                                              const $t46911_i6094 = { $: "None" };
                                              {
                                                const $t46912_i6095 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                                $t46913_i6096 = ({ words: $t47380, font: "15px sans-serif", middle: $t46910_i6093, fill: $t47382, edge: $t46911_i6094, frame: $t46912_i6095 });
                                              }
                                            }
                                          }
                                          $t47383 = { $: "DrawText", _0: $t46913_i6096 };
                                        }
                                      }
                                    }
                                  }
                                  {
                                    const $t47384 = { $: "Nil" };
                                    {
                                      const $t47385 = { $: "Cons", _0: $t47383, _1: $t47384 };
                                      {
                                        const $t47386 = { $: "Cons", _0: $t47379, _1: $t47385 };
                                        {
                                          const $t47387 = { $: "Cons", _0: $t47375, _1: $t47386 };
                                          {
                                            const $t47388 = { $: "Cons", _0: $t47369, _1: $t47387 };
                                            {
                                              const head = { $: "Cons", _0: $t47363, _1: $t47388 };
                                              {
                                                let $t47392;
                                                {
                                                  let $t47389;
                                                  {
                                                    const s_i13769 = s;
                                                    {
                                                      let $t46777_i13771;
                                                      {
                                                        let $t46776_i13770;
                                                        $t46776_i13770 = Putt$Rules$total(s);
                                                        $t46777_i13771 = String($t46776_i13770);
                                                      }
                                                      {
                                                        let $t46779_i13773;
                                                        {
                                                          const $t46778_i13772 = Putt$Hud$running(s);
                                                          {
                                                            const $t46703_i16032 = ($t46778_i13772 === 0);
                                                            if ($t46703_i16032 === true) {
                                                              $t46779_i13773 = "level par";
                                                            } else {
                                                              {
                                                                const $t46704_i16033 = ($t46778_i13772 > 0);
                                                                if ($t46704_i16033 === true) {
                                                                  {
                                                                    const $t46705_i16034 = String($t46778_i13772);
                                                                    {
                                                                      const $rc_2538_i16035 = ($t46705_i16034 + " over par");
                                                                      $t46779_i13773 = $rc_2538_i16035;
                                                                    }
                                                                  }
                                                                } else {
                                                                  {
                                                                    let $t46707_i16037;
                                                                    {
                                                                      const $t46706_i16036 = ((0 - $t46778_i13772) < 4611686018427387904 && (0 - $t46778_i13772) >= -4611686018427387904 ? (0 - $t46778_i13772) : march_int_ovf((0 - $t46778_i13772), 1));
                                                                      $t46707_i16037 = String($t46706_i16036);
                                                                    }
                                                                    {
                                                                      const $rc_2539_i16038 = ($t46707_i16037 + " under par");
                                                                      $t46779_i13773 = $rc_2539_i16038;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        {
                                                          const $rc_2555_i13774 = march_string_concat_n("Total ", $t46777_i13771, ", ", $t46779_i13773);
                                                          $t47389 = $rc_2555_i13774;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  {
                                                    const $t47390 = (below + 10.);
                                                    {
                                                      const $t47391 = Arcade$Draw$hex(16119280);
                                                      {
                                                        let $t46913_i6087;
                                                        {
                                                          const $t46910_i6084 = ({ x: mid, y: $t47390 });
                                                          {
                                                            const $t46911_i6085 = { $: "None" };
                                                            {
                                                              const $t46912_i6086 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                                              $t46913_i6087 = ({ words: $t47389, font: "bold 16px sans-serif", middle: $t46910_i6084, fill: $t47391, edge: $t46911_i6085, frame: $t46912_i6086 });
                                                            }
                                                          }
                                                        }
                                                        $t47392 = { $: "DrawText", _0: $t46913_i6087 };
                                                      }
                                                    }
                                                  }
                                                }
                                                {
                                                  let $t47397;
                                                  {
                                                    const $t47393 = Putt$Hud$rounded(button, 12.);
                                                    {
                                                      let $t47395;
                                                      {
                                                        const $t47394 = Arcade$Draw$hex(4168522);
                                                        $t47395 = { $: "Flat", _0: $t47394 };
                                                      }
                                                      {
                                                        const $t47396 = { $: "Over" };
                                                        $t47397 = { $: "FillShape", _0: $t47393, _1: $t47395, _2: $t47396 };
                                                      }
                                                    }
                                                  }
                                                  {
                                                    let $t47401;
                                                    {
                                                      let $t47398;
                                                      {
                                                        const s_i13759 = s;
                                                        {
                                                          const $t46780_i13760 = s.phase;
                                                          switch ($t46780_i13760.$) {
                                                            case "PuttAiming": {
                                                              $t47398 = "";
                                                              break;
                                                            }
                                                            case "PuttHoleDone": {
                                                              {
                                                                let $t46784_i13764;
                                                                {
                                                                  let $t46782_i13762;
                                                                  {
                                                                    const $t46781_i13761 = s.hole;
                                                                    $t46782_i13762 = (($t46781_i13761 + 1) < 4611686018427387904 && ($t46781_i13761 + 1) >= -4611686018427387904 ? ($t46781_i13761 + 1) : march_int_ovf(($t46781_i13761 + 1), 0));
                                                                  }
                                                                  {
                                                                    const $t46783_i13763 = Putt$Course$hole_count();
                                                                    $t46784_i13764 = ($t46782_i13762 < $t46783_i13763);
                                                                  }
                                                                }
                                                                if ($t46784_i13764 === true) {
                                                                  {
                                                                    let $t46787_i13767;
                                                                    {
                                                                      let $t46786_i13766;
                                                                      {
                                                                        const $t46785_i13765 = s.hole;
                                                                        $t46786_i13766 = (($t46785_i13765 + 2) < 4611686018427387904 && ($t46785_i13765 + 2) >= -4611686018427387904 ? ($t46785_i13765 + 2) : march_int_ovf(($t46785_i13765 + 2), 0));
                                                                      }
                                                                      $t46787_i13767 = String($t46786_i13766);
                                                                    }
                                                                    {
                                                                      const $rc_2556_i13768 = ("Tap for hole " + $t46787_i13767);
                                                                      $t47398 = $rc_2556_i13768;
                                                                    }
                                                                  }
                                                                } else {
                                                                  $t47398 = "Tap for the final card";
                                                                }
                                                              }
                                                              break;
                                                            }
                                                            case "PuttCourseDone": {
                                                              $t47398 = "Tap to play again";
                                                              break;
                                                            }
                                                            default: {
                                                              throw new Error("non-exhaustive pattern match");
                                                              break;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      {
                                                        const $t47399 = (below + 57.);
                                                        {
                                                          const $t47400 = Arcade$Draw$hex(16119280);
                                                          {
                                                            let $t46913_i6078;
                                                            {
                                                              const $t46910_i6075 = ({ x: mid, y: $t47399 });
                                                              {
                                                                const $t46911_i6076 = { $: "None" };
                                                                {
                                                                  const $t46912_i6077 = ({ a: 1., b: 0., c: 0., d: 1., e: 0., f: 0. });
                                                                  $t46913_i6078 = ({ words: $t47398, font: "bold 16px sans-serif", middle: $t46910_i6075, fill: $t47400, edge: $t46911_i6076, frame: $t46912_i6077 });
                                                                }
                                                              }
                                                            }
                                                            $t47401 = { $: "DrawText", _0: $t46913_i6078 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                    {
                                                      const $t47402 = { $: "Nil" };
                                                      {
                                                        const $t47403 = { $: "Cons", _0: $t47401, _1: $t47402 };
                                                        {
                                                          const $t47404 = { $: "Cons", _0: $t47397, _1: $t47403 };
                                                          {
                                                            const foot = { $: "Cons", _0: $t47392, _1: $t47404 };
                                                            {
                                                              let $t47405;
                                                              {
                                                                const $t46807_i6068 = Putt$Course$hole_count();
                                                                {
                                                                  const $t46808_i6069 = { $: "Nil" };
                                                                  $t47405 = Putt$Hud$numbers_go(0, $t46807_i6068, $t46808_i6069);
                                                                }
                                                              }
                                                              {
                                                                let $t47406;
                                                                {
                                                                  const $t46817_i6066 = Putt$Course$holes();
                                                                  {
                                                                    const $t46818_i6067 = { $: "Nil" };
                                                                    $t47406 = Putt$Hud$pars_go($t46817_i6066, $t46818_i6067);
                                                                  }
                                                                }
                                                                {
                                                                  let $t47407;
                                                                  {
                                                                    const s_i13753 = s;
                                                                    {
                                                                      let $t46836_i13756;
                                                                      {
                                                                        const $t46817_i5774_i13754 = Putt$Course$holes();
                                                                        {
                                                                          const $t46818_i5775_i13755 = { $: "Nil" };
                                                                          $t46836_i13756 = Putt$Hud$pars_go($t46817_i5774_i13754, $t46818_i5775_i13755);
                                                                        }
                                                                      }
                                                                      {
                                                                        const $t46837_i13757 = s.card;
                                                                        {
                                                                          const $t46838_i13758 = { $: "Nil" };
                                                                          $t47407 = Putt$Hud$strokes_go($t46836_i13756, $t46837_i13757, $t46838_i13758);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  {
                                                                    const $t47408 = (top + 104.);
                                                                    {
                                                                      const $t47409 = { $: "Nil" };
                                                                      {
                                                                        const $t47410 = Putt$Hud$block_ops($t47405, $t47406, $t47407, x0, step, $t47408, $t47409);
                                                                        {
                                                                          const $t47411 = { $: "Nil" };
                                                                          {
                                                                            const $t47412 = { $: "Cons", _0: foot, _1: $t47411 };
                                                                            {
                                                                              const $t47413 = { $: "Cons", _0: $t47410, _1: $t47412 };
                                                                              {
                                                                                const $t47414 = { $: "Cons", _0: head, _1: $t47413 };
                                                                                {
                                                                                  const prepend_reversed_i6063 = { $: "$Clo_prepend_reversed$0_List_concat_List_List_DrawOp", _0: prepend_reversed$apply$0_List_concat_List_List_DrawOp };
                                                                                  {
                                                                                    const go_i6064 = { $: "$Clo_go$1_List_concat_List_List_DrawOp", _0: go$apply$1_List_concat_List_List_DrawOp, _1: prepend_reversed_i6063 };
                                                                                    {
                                                                                      const $t1230_i6065 = { $: "Nil" };
                                                                                      return go$apply$1_List_concat_List_List_DrawOp(go_i6064, $t47414, $t1230_i6065);
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
                }
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Hud$card_ops$clo = { _0: ($_, s, vp) => Putt$Hud$card_ops(s, vp) };

function Putt$Hud$frame(rs, a, s, vp, ball, moment) {
  {
    let h;
    h = Putt$Rules$current(s);
    {
      let l;
      l = Putt$Hud$projection(rs, h, vp);
      {
        let aiming;
        switch (moment.$) {
          case "HudRolling": {
            aiming = { $: "Nil" };
            break;
          }
          case "HudWaiting": {
            {
              const $t47415 = s.phase;
              switch ($t47415.$) {
                case "PuttAiming": {
                  {
                    let $t47141_i6146;
                    {
                      let $t47136_i6141;
                      {
                        const $t47135_i6140 = Putt$View$px(rs, l, ball);
                        $t47136_i6141 = { $: "Disc", _0: $t47135_i6140, _1: 13. };
                      }
                      {
                        let $t47139_i6144;
                        {
                          let $t47138_i6143;
                          {
                            const $t47137_i6142 = Arcade$Draw$hex(16119280);
                            $t47138_i6143 = Arcade$Draw$with_alpha($t47137_i6142, 0.55);
                          }
                          {
                            const $t46914_i15914 = { $: "RoundEnd" };
                            {
                              const $t46915_i15915 = { $: "RoundCorner" };
                              $t47139_i6144 = ({ ink: $t47138_i6143, width: 2., ends: $t46914_i15914, corners: $t46915_i15915 });
                            }
                          }
                        }
                        {
                          const $t47140_i6145 = { $: "Over" };
                          $t47141_i6146 = { $: "StrokeShape", _0: $t47136_i6141, _1: $t47139_i6144, _2: $t47140_i6145 };
                        }
                      }
                    }
                    {
                      const $t47142_i6147 = { $: "Nil" };
                      aiming = { $: "Cons", _0: $t47141_i6146, _1: $t47142_i6147 };
                    }
                  }
                  break;
                }
                case "PuttHoleDone": {
                  aiming = { $: "Nil" };
                  break;
                }
                case "PuttCourseDone": {
                  aiming = { $: "Nil" };
                  break;
                }
                default: {
                  throw new Error("non-exhaustive pattern match");
                  break;
                }
              }
            }
            break;
          }
          case "HudPulling": {
            const $f47417 = moment._0;
            {
              const pull = $f47417;
              {
                const $t47416 = s.phase;
                switch ($t47416.$) {
                  case "PuttAiming": {
                    aiming = Putt$Hud$aim_ops(rs, a, l, s, pull);
                    break;
                  }
                  case "PuttHoleDone": {
                    aiming = { $: "Nil" };
                    break;
                  }
                  case "PuttCourseDone": {
                    aiming = { $: "Nil" };
                    break;
                  }
                  default: {
                    throw new Error("non-exhaustive pattern match");
                    break;
                  }
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
        {
          const $t47418 = s.phase;
          {
            let card;
            switch ($t47418.$) {
              case "PuttAiming": {
                card = { $: "Nil" };
                break;
              }
              case "PuttHoleDone": {
                card = Putt$Hud$card_ops(s, vp);
                break;
              }
              case "PuttCourseDone": {
                card = Putt$Hud$card_ops(s, vp);
                break;
              }
              default: {
                throw new Error("non-exhaustive pattern match");
                break;
              }
            }
            {
              let $t47419;
              $t47419 = Putt$View$field_ops(rs, l, h);
              {
                let $t47420;
                $t47420 = Putt$View$ball_ops(rs, l, ball);
                {
                  let $t47421;
                  $t47421 = Putt$Hud$top_ops(rs, s, vp);
                  {
                    const $t47422 = Putt$Hud$prompt_ops(a, s, vp, moment);
                    {
                      const $t47423 = { $: "Nil" };
                      {
                        const $t47424 = { $: "Cons", _0: card, _1: $t47423 };
                        {
                          const $t47425 = { $: "Cons", _0: $t47422, _1: $t47424 };
                          {
                            const $t47426 = { $: "Cons", _0: $t47421, _1: $t47425 };
                            {
                              const $t47427 = { $: "Cons", _0: $t47420, _1: $t47426 };
                              {
                                const $t47428 = { $: "Cons", _0: aiming, _1: $t47427 };
                                {
                                  const $t47429 = { $: "Cons", _0: $t47419, _1: $t47428 };
                                  {
                                    const prepend_reversed_i6134 = { $: "$Clo_prepend_reversed$0_List_concat_List_List_DrawOp", _0: prepend_reversed$apply$0_List_concat_List_List_DrawOp };
                                    {
                                      const go_i6135 = { $: "$Clo_go$1_List_concat_List_List_DrawOp", _0: go$apply$1_List_concat_List_List_DrawOp, _1: prepend_reversed_i6134 };
                                      {
                                        const $t1230_i6136 = { $: "Nil" };
                                        return go$apply$1_List_concat_List_List_DrawOp(go_i6135, $t47429, $t1230_i6136);
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
    }
  }
}
const Putt$Hud$frame$clo = { _0: ($_, rs, a, s, vp, ball, moment) => Putt$Hud$frame(rs, a, s, vp, ball, moment) };

function Putt$Roll$roll(tune, hole, wind, from, v) {
  {
    let court;
    court = ({ tune: tune, hole: hole, wind: wind, struck_from: from });
    {
      let start;
      {
        const $t47444 = ({ t: 0., step: 0 });
        {
          let $t47446;
          {
            const $t47445 = hole.sands;
            $t47446 = Putt$Course$inside_any($t47445, from);
          }
          {
            const $t47447 = { $: "Nil" };
            {
              const $t47448 = { $: "Nil" };
              {
                let $t47449;
                {
                  const $t47435_i6151 = ({ sampled_at: 0., point: from });
                  $t47449 = { $: "Cons", _0: $t47435_i6151, _1: $t47448 };
                }
                start = ({ clock: $t47444, at: from, vel: v, in_sand: $t47446, over_cup: false, bumps: $t47447, trail: $t47449 });
              }
            }
          }
        }
      }
      {
        const $t47450 = tune.max_time;
        return Arcade$Physics$Sim$run_steps$R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float$Float$Fn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Turn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float(court, $t47450, Putt$Roll$time_of$clo, Putt$Roll$step$clo, Putt$Roll$stop$clo, start);
      }
    }
  }
}
const Putt$Roll$roll$clo = { _0: ($_, tune, hole, wind, from, v) => Putt$Roll$roll(tune, hole, wind, from, v) };

function Putt$Roll$time_of(s) {
  {
    const $t47451 = s.clock;
    {
      const $rc_2561 = $t47451.t;
      return $rc_2561;
    }
  }
}
const Putt$Roll$time_of$clo = { _0: ($_, s) => Putt$Roll$time_of(s) };

function Putt$Roll$stop(_c, s) {
  {
    const $t47452 = s.at;
    {
      let $t47454;
      {
        const $t47453 = s.clock;
        $t47454 = $t47453.t;
      }
      {
        const $t47455 = s.bumps;
        {
          let $t47456;
          {
            const $t1095_i15919 = { $: "Nil" };
            $t47456 = List$reverse_onto$List_R_at_Float_ev_PuttBump$List_R_at_Float_ev_PuttBump($t47455, $t1095_i15919);
          }
          {
            const $t47457 = s.trail;
            {
              let $t47459;
              {
                const $t47458 = s.clock;
                $t47459 = $t47458.t;
              }
              {
                const $t47460 = s.at;
                {
                  let $t47461;
                  {
                    const $t47435_i6156 = ({ sampled_at: $t47459, point: $t47460 });
                    $t47461 = { $: "Cons", _0: $t47435_i6156, _1: $t47457 };
                  }
                  {
                    let $t47462;
                    {
                      const $t1095_i15917 = { $: "Nil" };
                      $t47462 = List$reverse_onto$List_R_point_R_x_Float_y_Float_sampled_at_Float$List_R_point_R_x_Float_y_Float_sampled_at_Float($t47461, $t1095_i15917);
                    }
                    return ({ rest: $t47452, holed: false, took: $t47454, met: $t47456, path: $t47462 });
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
const Putt$Roll$stop$clo = { _0: ($_, _c, s) => Putt$Roll$stop(_c, s) };

function Putt$Roll$emit_if(events, happened, at, what) {
  if (happened === true) {
    {
      const $t47434_i6181 = ({ at: at, ev: what });
      return { $: "Cons", _0: $t47434_i6181, _1: events };
    }
  } else {
    return events;
  }
}
const Putt$Roll$emit_if$clo = { _0: ($_, events, happened, at, what) => Putt$Roll$emit_if(events, happened, at, what) };

function Putt$Roll$step(c, s) {
  {
    const tune = c.tune;
    {
      let t;
      {
        const $t47477 = s.clock;
        {
          const $t47478 = tune.dt;
          {
            const c_i13785 = $t47477;
            {
              let $t47431_i13788;
              {
                const $t47430_i13787 = $t47477.t;
                $t47431_i13788 = ($t47430_i13787 + $t47478);
              }
              {
                let $t47433_i13790;
                {
                  const $t47432_i13789 = $t47477.step;
                  $t47433_i13790 = (($t47432_i13789 + 1) < 4611686018427387904 && ($t47432_i13789 + 1) >= -4611686018427387904 ? ($t47432_i13789 + 1) : march_int_ovf(($t47432_i13789 + 1), 0));
                }
                t = ({ t: $t47431_i13788, step: $t47433_i13790 });
              }
            }
          }
        }
      }
      {
        let drag;
        {
          const $t47479 = s.in_sand;
          if ($t47479 === true) {
            drag = tune.sand_drag;
          } else {
            drag = tune.green_drag;
          }
        }
        {
          let pull;
          {
            const $t47480 = c.wind;
            {
              let $t47484;
              {
                const $t47481 = c.hole;
                {
                  const $t47482 = $t47481.slopes;
                  {
                    const $t47483 = s.at;
                    $t47484 = Putt$Course$pull_at($t47482, $t47483);
                  }
                }
              }
              pull = Arcade$Vec2$add($t47480, $t47484);
            }
          }
          {
            let $p47497;
            {
              const $t47485 = s.at;
              {
                const $t47486 = s.vel;
                {
                  const $t47487 = tune.dt;
                  {
                    const v_i13776 = $t47486;
                    {
                      let speed_i13780;
                      speed_i13780 = Arcade$Vec2$length($t47486);
                      {
                        let a_i13784;
                        {
                          const $t49752_i13781 = (speed_i13780 > 0.);
                          if ($t49752_i13781 === true) {
                            {
                              let $t49754_i13783;
                              {
                                const $t49753_i13782 = (drag / speed_i13780);
                                $t49754_i13783 = Arcade$Vec2$scale($t47486, $t49753_i13782);
                              }
                              a_i13784 = Arcade$Vec2$sub(pull, $t49754_i13783);
                            }
                          } else {
                            a_i13784 = pull;
                          }
                        }
                        {
                          let v1_i16044;
                          {
                            const $t49746_i16043 = Arcade$Vec2$scale(a_i13784, $t47487);
                            v1_i16044 = Arcade$Vec2$add($t47486, $t49746_i16043);
                          }
                          {
                            let $t49748_i16046;
                            {
                              let $t49747_i16045;
                              $t49747_i16045 = Arcade$Vec2$scale(v1_i16044, $t47487);
                              $t49748_i16046 = Arcade$Vec2$add($t47485, $t49747_i16045);
                            }
                            $p47497 = { _0: $t49748_i16046, _1: v1_i16044 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            {
              const p1 = $p47497._0;
              {
                const v1 = $p47497._1;
                {
                  let $t47494;
                  {
                    let $t47490;
                    {
                      let $t47488;
                      $t47488 = Arcade$Vec2$length(v1);
                      {
                        const $t47489 = tune.rest_speed;
                        $t47490 = ($t47488 < $t47489);
                      }
                    }
                    {
                      let $t47493;
                      {
                        let $t47492;
                        {
                          const $t47491 = s.vel;
                          $t47492 = Arcade$Vec2$dot(v1, $t47491);
                        }
                        $t47493 = ($t47492 <= 0.);
                      }
                      $t47494 = ($t47490 || $t47493);
                    }
                  }
                  if ($t47494 === true) {
                    {
                      let $t47496;
                      {
                        const $t47495 = ({ x: 0., y: 0. });
                        $t47496 = ({ ...s, clock: t, vel: $t47495 });
                      }
                      {
                        const $rc_2563 = { $: "TurnStop", _0: $t47496 };
                        return $rc_2563;
                      }
                    }
                  } else {
                    return Putt$Roll$moved(c, s, t, p1, v1);
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
const Putt$Roll$step$clo = { _0: ($_, c, s) => Putt$Roll$step(c, s) };

function Putt$Roll$moved(c, s, t, p1, v1) {
  {
    const tune = c.tune;
    {
      let $p47526;
      {
        const $t47498 = c.hole;
        $p47526 = Putt$Roll$walls(tune, $t47498, p1, v1);
      }
      {
        const p2 = $p47526._0;
        {
          const v2 = $p47526._1;
          {
            const walled = $p47526._2;
            {
              let $p47525;
              {
                const $t47499 = c.hole;
                {
                  const $t47500 = $t47499.blocks;
                  $p47525 = Putt$Roll$blocks(tune, $t47500, p2, v2, false);
                }
              }
              {
                const p3 = $p47525._0;
                {
                  const v3 = $p47525._1;
                  {
                    const blocked = $p47525._2;
                    {
                      let sandy;
                      {
                        const $t47501 = c.hole;
                        {
                          const $t47502 = $t47501.sands;
                          sandy = Putt$Course$inside_any($t47502, p3);
                        }
                      }
                      {
                        let over;
                        {
                          let $t47506;
                          {
                            let $t47505;
                            {
                              let $t47504;
                              {
                                const $t47503 = c.hole;
                                $t47504 = $t47503.cup;
                              }
                              $t47505 = Arcade$Vec2$sub(p3, $t47504);
                            }
                            $t47506 = Arcade$Vec2$length($t47505);
                          }
                          {
                            const $t47507 = tune.cup_radius;
                            over = ($t47506 < $t47507);
                          }
                        }
                        {
                          const $t47508 = s.bumps;
                          {
                            const $t47509 = t.t;
                            {
                              const $t47510 = { $: "BumpWall" };
                              {
                                const e1 = Putt$Roll$emit_if($t47508, walled, $t47509, $t47510);
                                {
                                  const $t47511 = t.t;
                                  {
                                    const $t47512 = { $: "BumpBlock" };
                                    {
                                      const e2 = Putt$Roll$emit_if(e1, blocked, $t47511, $t47512);
                                      {
                                        let $t47515;
                                        {
                                          let $t47514;
                                          {
                                            const $t47513 = s.in_sand;
                                            $t47514 = (!$t47513);
                                          }
                                          $t47515 = (sandy && $t47514);
                                        }
                                        {
                                          const $t47516 = t.t;
                                          {
                                            const $t47517 = { $: "BumpSand" };
                                            {
                                              const e3 = Putt$Roll$emit_if(e2, $t47515, $t47516, $t47517);
                                              {
                                                let $t47520;
                                                {
                                                  const $t47518 = c.hole;
                                                  {
                                                    const $t47519 = $t47518.waters;
                                                    $t47520 = Putt$Course$inside_any($t47519, p3);
                                                  }
                                                }
                                                if ($t47520 === true) {
                                                  {
                                                    let $t47524;
                                                    {
                                                      const $t47521 = ({ ...s, bumps: e3 });
                                                      {
                                                        const $t47522 = c.struck_from;
                                                        {
                                                          const $t47523 = t.t;
                                                          {
                                                            const s_i13791 = $t47521;
                                                            {
                                                              const $t47470_i13795 = $t47521.bumps;
                                                              {
                                                                const $t47471_i13796 = { $: "BumpWater" };
                                                                {
                                                                  let $t47472_i13801;
                                                                  {
                                                                    const $t47434_i6177_i13800 = ({ at: $t47523, ev: $t47471_i13796 });
                                                                    $t47472_i13801 = { $: "Cons", _0: $t47434_i6177_i13800, _1: $t47470_i13795 };
                                                                  }
                                                                  {
                                                                    let $t47473_i13803;
                                                                    {
                                                                      const $t1095_i15923 = { $: "Nil" };
                                                                      $t47473_i13803 = List$reverse_onto$List_R_at_Float_ev_PuttBump$List_R_at_Float_ev_PuttBump($t47472_i13801, $t1095_i15923);
                                                                    }
                                                                    {
                                                                      const $t47474_i13804 = $t47521.trail;
                                                                      {
                                                                        let $t47475_i13809;
                                                                        {
                                                                          const $t47435_i6172_i13808 = ({ sampled_at: $t47523, point: p3 });
                                                                          $t47475_i13809 = { $: "Cons", _0: $t47435_i6172_i13808, _1: $t47474_i13804 };
                                                                        }
                                                                        {
                                                                          let $t47476_i13811;
                                                                          {
                                                                            const $t1095_i15921 = { $: "Nil" };
                                                                            $t47476_i13811 = List$reverse_onto$List_R_point_R_x_Float_y_Float_sampled_at_Float$List_R_point_R_x_Float_y_Float_sampled_at_Float($t47475_i13809, $t1095_i15921);
                                                                          }
                                                                          $t47524 = ({ rest: $t47522, holed: false, took: $t47523, met: $t47473_i13803, path: $t47476_i13811 });
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
                                                    {
                                                      const $rc_2567 = { $: "TurnDone", _0: $t47524 };
                                                      return $rc_2567;
                                                    }
                                                  }
                                                } else {
                                                  return Putt$Roll$landed(c, s, t, p3, v3, sandy, over, e3);
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
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Roll$moved$clo = { _0: ($_, c, s, t, p1, v1) => Putt$Roll$moved(c, s, t, p1, v1) };

function Putt$Roll$landed(c, s, t, p3, v3, sandy, over, e3) {
  {
    const tune = c.tune;
    {
      let $t47530;
      {
        let $t47529;
        {
          let $t47527;
          $t47527 = Arcade$Vec2$length(v3);
          {
            const $t47528 = tune.capture_speed;
            $t47529 = ($t47527 <= $t47528);
          }
        }
        $t47530 = (over && $t47529);
      }
      if ($t47530 === true) {
        {
          let $t47535;
          {
            const $t47531 = ({ ...s, bumps: e3 });
            {
              let $t47533;
              {
                const $t47532 = c.hole;
                $t47533 = $t47532.cup;
              }
              {
                const $t47534 = t.t;
                {
                  const s_i13815 = $t47531;
                  {
                    const cup_i13816 = $t47533;
                    {
                      const $t47463_i13818 = $t47531.bumps;
                      {
                        const $t47464_i13819 = { $: "BumpCup" };
                        {
                          let $t47465_i13824;
                          {
                            const $t47434_i6167_i13823 = ({ at: $t47534, ev: $t47464_i13819 });
                            $t47465_i13824 = { $: "Cons", _0: $t47434_i6167_i13823, _1: $t47463_i13818 };
                          }
                          {
                            let $t47466_i13826;
                            {
                              const $t1095_i15927 = { $: "Nil" };
                              $t47466_i13826 = List$reverse_onto$List_R_at_Float_ev_PuttBump$List_R_at_Float_ev_PuttBump($t47465_i13824, $t1095_i15927);
                            }
                            {
                              const $t47467_i13827 = $t47531.trail;
                              {
                                let $t47468_i13832;
                                {
                                  const $t47435_i6162_i13831 = ({ sampled_at: $t47534, point: $t47533 });
                                  $t47468_i13832 = { $: "Cons", _0: $t47435_i6162_i13831, _1: $t47467_i13827 };
                                }
                                {
                                  let $t47469_i13834;
                                  {
                                    const $t1095_i15925 = { $: "Nil" };
                                    $t47469_i13834 = List$reverse_onto$List_R_point_R_x_Float_y_Float_sampled_at_Float$List_R_point_R_x_Float_y_Float_sampled_at_Float($t47468_i13832, $t1095_i15925);
                                  }
                                  $t47535 = ({ rest: $t47533, holed: true, took: $t47534, met: $t47466_i13826, path: $t47469_i13834 });
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
          return { $: "TurnDone", _0: $t47535 };
        }
      } else {
        {
          let $t47538;
          {
            let $t47537;
            {
              const $t47536 = s.over_cup;
              $t47537 = (!$t47536);
            }
            $t47538 = (over && $t47537);
          }
          {
            const $t47539 = t.t;
            {
              const $t47540 = { $: "BumpLip" };
              {
                const e4 = Putt$Roll$emit_if(e3, $t47538, $t47539, $t47540);
                {
                  let $t47543;
                  {
                    const $t47541 = t.step;
                    {
                      const $t47542 = tune.trail_every;
                      {
                        const $t47436_i13814 = ($t47541 % $t47542);
                        $t47543 = ($t47436_i13814 === 0);
                      }
                    }
                  }
                  {
                    let trail;
                    if ($t47543 === true) {
                      {
                        const $t47544 = s.trail;
                        {
                          const $t47545 = t.t;
                          {
                            const $t47435_i6185 = ({ sampled_at: $t47545, point: p3 });
                            trail = { $: "Cons", _0: $t47435_i6185, _1: $t47544 };
                          }
                        }
                      }
                    } else {
                      {
                        const $rc_2572 = s.trail;
                        trail = $rc_2572;
                      }
                    }
                    {
                      let $t47546;
                      $t47546 = ({ clock: t, at: p3, vel: v3, in_sand: sandy, over_cup: over, bumps: e4, trail: trail });
                      return { $: "TurnOn", _0: $t47546 };
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
const Putt$Roll$landed$clo = { _0: ($_, c, s, t, p3, v3, sandy, over, e3) => Putt$Roll$landed(c, s, t, p3, v3, sandy, over, e3) };

function Putt$Roll$walls(tune, h, p, v) {
  {
    let cx;
    {
      const $t47547 = h.width;
      cx = ($t47547 / 2.);
    }
    {
      let cy;
      {
        const $t47548 = h.length;
        cy = ($t47548 / 2.);
      }
      {
        const r = tune.ball_radius;
        {
          let $p47563;
          {
            let $t47550;
            {
              const $t47549 = p.x;
              $t47550 = ($t47549 - cx);
            }
            {
              const $t47551 = v.x;
              {
                const $t47552 = (cx - r);
                {
                  const $t47553 = tune.wall_bounce;
                  $p47563 = Putt$Roll$axis($t47550, $t47551, $t47552, $t47553, cx);
                }
              }
            }
          }
          {
            const x = $p47563._0;
            {
              const vx = $p47563._1;
              {
                const hit_x = $p47563._2;
                {
                  let $p47562;
                  {
                    let $t47555;
                    {
                      const $t47554 = p.y;
                      $t47555 = ($t47554 - cy);
                    }
                    {
                      const $t47556 = v.y;
                      {
                        const $t47557 = (cy - r);
                        {
                          const $t47558 = tune.wall_bounce;
                          $p47562 = Putt$Roll$axis($t47555, $t47556, $t47557, $t47558, cy);
                        }
                      }
                    }
                  }
                  {
                    const y = $p47562._0;
                    {
                      const vy = $p47562._1;
                      {
                        const hit_y = $p47562._2;
                        {
                          const $t47559 = ({ x: x, y: y });
                          {
                            const $t47560 = ({ x: vx, y: vy });
                            {
                              const $t47561 = (hit_x || hit_y);
                              {
                                const $rc_2574 = { _0: $t47559, _1: $t47560, _2: $t47561 };
                                return $rc_2574;
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
const Putt$Roll$walls$clo = { _0: ($_, tune, h, p, v) => Putt$Roll$walls(tune, h, p, v) };

function Putt$Roll$axis(off, v, bound, e, centre) {
  {
    let $t47564;
    {
      let $t49762_i6195;
      {
        const $t49761_i6194 = Math.abs(off);
        $t49762_i6195 = ($t49761_i6194 > bound);
      }
      if ($t49762_i6195 === true) {
        {
          let edge_i6197;
          {
            const $t49763_i6196 = (off > 0.);
            if ($t49763_i6196 === true) {
              edge_i6197 = bound;
            } else {
              edge_i6197 = (-bound);
            }
          }
          {
            let $t49765_i6199;
            {
              const $t49764_i6198 = (-v);
              $t49765_i6199 = ($t49764_i6198 * e);
            }
            {
              const $t49766_i6200 = { _0: edge_i6197, _1: $t49765_i6199 };
              $t47564 = { $: "Some", _0: $t49766_i6200 };
            }
          }
        }
      } else {
        $t47564 = { $: "None" };
      }
    }
    switch ($t47564.$) {
      case "Some": {
        const $f47567 = $t47564._0;
        const $f47568 = $f47567._0;
        const $f47569 = $f47567._1;
        {
          const v1 = $f47569;
          {
            const edge = $f47568;
            {
              const $t47565 = (centre + edge);
              return { _0: $t47565, _1: v1, _2: true };
            }
          }
        }
        break;
      }
      case "None": {
        {
          const $t47566 = (centre + off);
          return { _0: $t47566, _1: v, _2: false };
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Putt$Roll$axis$clo = { _0: ($_, off, v, bound, e, centre) => Putt$Roll$axis(off, v, bound, e, centre) };

function Putt$Roll$blocks($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4) {
  __tco: for (;;) {
    const tune = $tco_a0;
    const bs = $tco_a1;
    const p = $tco_a2;
    const v = $tco_a3;
    const hit = $tco_a4;
    switch (bs.$) {
      case "Nil": {
        return { _0: p, _1: v, _2: hit };
        break;
      }
      case "Cons": {
        const $f47582 = bs._0;
        const $f47583 = bs._1;
        {
          const rest = $f47583;
          {
            const b = $f47582;
            {
              let $t47574;
              $t47574 = Putt$Roll$block(tune, b, p, v);
              switch ($t47574.$) {
                case "Some": {
                  const $f47575 = $t47574._0;
                  const $f47576 = $f47575._0;
                  const $f47577 = $f47575._1;
                  {
                    const v1 = $f47577;
                    {
                      const p1 = $f47576;
                      {
                        $tco_a0 = tune;
                        $tco_a1 = rest;
                        $tco_a2 = p1;
                        $tco_a3 = v1;
                        $tco_a4 = true;
                        continue __tco;
                      }
                    }
                  }
                  break;
                }
                case "None": {
                  {
                    $tco_a0 = tune;
                    $tco_a1 = rest;
                    $tco_a2 = p;
                    $tco_a3 = v;
                    $tco_a4 = hit;
                    continue __tco;
                  }
                  break;
                }
                default: {
                  return (() => { throw new Error("non-exhaustive pattern match"); })();
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
const Putt$Roll$blocks$clo = { _0: ($_, tune, bs, p, v, hit) => Putt$Roll$blocks(tune, bs, p, v, hit) };

function Putt$Roll$block(tune, b, p, v) {
  {
    const r = tune.ball_radius;
    {
      let q;
      {
        let $t47593;
        {
          const $t47588 = p.x;
          {
            let $t47590;
            {
              const $t47589 = b.lo;
              $t47590 = $t47589.x;
            }
            {
              let $t47592;
              {
                const $t47591 = b.hi;
                $t47592 = $t47591.x;
              }
              {
                let $t48417_i6211;
                {
                  const $t48415_i15940 = ($t47590 >= $t47588);
                  if ($t48415_i15940 === true) {
                    $t48417_i6211 = $t47590;
                  } else {
                    $t48417_i6211 = $t47588;
                  }
                }
                {
                  const $t48416_i15937 = ($t47592 < $t48417_i6211);
                  if ($t48416_i15937 === true) {
                    $t47593 = $t47592;
                  } else {
                    $t47593 = $t48417_i6211;
                  }
                }
              }
            }
          }
        }
        {
          let $t47599;
          {
            const $t47594 = p.y;
            {
              let $t47596;
              {
                const $t47595 = b.lo;
                $t47596 = $t47595.y;
              }
              {
                let $t47598;
                {
                  const $t47597 = b.hi;
                  $t47598 = $t47597.y;
                }
                {
                  let $t48417_i6207;
                  {
                    const $t48415_i15934 = ($t47596 >= $t47594);
                    if ($t48415_i15934 === true) {
                      $t48417_i6207 = $t47596;
                    } else {
                      $t48417_i6207 = $t47594;
                    }
                  }
                  {
                    const $t48416_i15931 = ($t47598 < $t48417_i6207);
                    if ($t48416_i15931 === true) {
                      $t47599 = $t47598;
                    } else {
                      $t47599 = $t48417_i6207;
                    }
                  }
                }
              }
            }
          }
          q = ({ x: $t47593, y: $t47599 });
        }
      }
      {
        let d;
        d = Arcade$Vec2$sub(p, q);
        {
          let d2;
          d2 = Arcade$Vec2$dot(d, d);
          {
            let $t47601;
            {
              const $t47600 = (r * r);
              $t47601 = (d2 >= $t47600);
            }
            if ($t47601 === true) {
              return { $: "None" };
            } else {
              {
                const $t47602 = (d2 > 0.);
                if ($t47602 === true) {
                  {
                    let n;
                    {
                      let $t47604;
                      {
                        const $t47603 = Math.sqrt(d2);
                        $t47604 = (1. / $t47603);
                      }
                      n = Arcade$Vec2$scale(d, $t47604);
                    }
                    {
                      let $t47606;
                      {
                        let $t47605;
                        $t47605 = Arcade$Vec2$scale(n, r);
                        $t47606 = Arcade$Vec2$add(q, $t47605);
                      }
                      {
                        let $t47608;
                        {
                          const $t47607 = tune.block_bounce;
                          $t47608 = Arcade$Physics$Kinematics$reflect_approaching(v, n, $t47607);
                        }
                        {
                          const $t47609 = { _0: $t47606, _1: $t47608 };
                          return { $: "Some", _0: $t47609 };
                        }
                      }
                    }
                  }
                } else {
                  {
                    const $t47610 = Putt$Roll$leave_by_face(tune, b, p, v);
                    return { $: "Some", _0: $t47610 };
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
const Putt$Roll$block$clo = { _0: ($_, tune, b, p, v) => Putt$Roll$block(tune, b, p, v) };

function Putt$Roll$leave_by_face(tune, b, p, v) {
  {
    const r = tune.ball_radius;
    {
      let left;
      {
        const $t47611 = p.x;
        {
          let $t47613;
          {
            const $t47612 = b.lo;
            $t47613 = $t47612.x;
          }
          left = ($t47611 - $t47613);
        }
      }
      {
        let right;
        {
          let $t47615;
          {
            const $t47614 = b.hi;
            $t47615 = $t47614.x;
          }
          {
            const $t47616 = p.x;
            right = ($t47615 - $t47616);
          }
        }
        {
          let below;
          {
            const $t47617 = p.y;
            {
              let $t47619;
              {
                const $t47618 = b.lo;
                $t47619 = $t47618.y;
              }
              below = ($t47617 - $t47619);
            }
          }
          {
            let above;
            {
              let $t47621;
              {
                const $t47620 = b.hi;
                $t47621 = $t47620.y;
              }
              {
                const $t47622 = p.y;
                above = ($t47621 - $t47622);
              }
            }
            {
              let side;
              {
                const $t48416_i6233 = (right < left);
                if ($t48416_i6233 === true) {
                  side = right;
                } else {
                  side = left;
                }
              }
              {
                let ends;
                {
                  const $t48416_i6230 = (above < below);
                  if ($t48416_i6230 === true) {
                    ends = above;
                  } else {
                    ends = below;
                  }
                }
                {
                  let $p47654;
                  {
                    const $t47623 = (side <= ends);
                    if ($t47623 === true) {
                      {
                        const $t47624 = (left <= right);
                        if ($t47624 === true) {
                          {
                            let $t47626;
                            {
                              const $t47625 = (-1.);
                              $t47626 = ({ x: $t47625, y: 0. });
                            }
                            {
                              let $t47631;
                              {
                                let $t47629;
                                {
                                  let $t47628;
                                  {
                                    const $t47627 = b.lo;
                                    $t47628 = $t47627.x;
                                  }
                                  $t47629 = ($t47628 - r);
                                }
                                {
                                  const $t47630 = p.y;
                                  $t47631 = ({ x: $t47629, y: $t47630 });
                                }
                              }
                              $p47654 = { _0: $t47626, _1: $t47631 };
                            }
                          }
                        } else {
                          {
                            const $t47632 = ({ x: 1., y: 0. });
                            {
                              let $t47637;
                              {
                                let $t47635;
                                {
                                  let $t47634;
                                  {
                                    const $t47633 = b.hi;
                                    $t47634 = $t47633.x;
                                  }
                                  $t47635 = ($t47634 + r);
                                }
                                {
                                  const $t47636 = p.y;
                                  $t47637 = ({ x: $t47635, y: $t47636 });
                                }
                              }
                              $p47654 = { _0: $t47632, _1: $t47637 };
                            }
                          }
                        }
                      }
                    } else {
                      {
                        const $t47638 = (below <= above);
                        if ($t47638 === true) {
                          {
                            let $t47640;
                            {
                              const $t47639 = (-1.);
                              $t47640 = ({ x: 0., y: $t47639 });
                            }
                            {
                              let $t47645;
                              {
                                const $t47641 = p.x;
                                {
                                  let $t47644;
                                  {
                                    let $t47643;
                                    {
                                      const $t47642 = b.lo;
                                      $t47643 = $t47642.y;
                                    }
                                    $t47644 = ($t47643 - r);
                                  }
                                  $t47645 = ({ x: $t47641, y: $t47644 });
                                }
                              }
                              $p47654 = { _0: $t47640, _1: $t47645 };
                            }
                          }
                        } else {
                          {
                            const $t47646 = ({ x: 0., y: 1. });
                            {
                              let $t47651;
                              {
                                const $t47647 = p.x;
                                {
                                  let $t47650;
                                  {
                                    let $t47649;
                                    {
                                      const $t47648 = b.hi;
                                      $t47649 = $t47648.y;
                                    }
                                    $t47650 = ($t47649 + r);
                                  }
                                  $t47651 = ({ x: $t47647, y: $t47650 });
                                }
                              }
                              $p47654 = { _0: $t47646, _1: $t47651 };
                            }
                          }
                        }
                      }
                    }
                  }
                  {
                    const n = $p47654._0;
                    {
                      const out = $p47654._1;
                      {
                        let $t47653;
                        {
                          const $t47652 = tune.block_bounce;
                          $t47653 = Arcade$Physics$Kinematics$reflect_approaching(v, n, $t47652);
                        }
                        {
                          const $rc_2578 = { _0: out, _1: $t47653 };
                          return $rc_2578;
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
const Putt$Roll$leave_by_face$clo = { _0: ($_, tune, b, p, v) => Putt$Roll$leave_by_face(tune, b, p, v) };

function Putt$Rules$draw_wind(rs, r) {
  {
    let $p47668;
    {
      const $t47657 = rs.num;
      $p47668 = Arcade$Rng$next_unit($t47657, r);
    }
    {
      const ux = $p47668._0;
      {
        const r1 = $p47668._1;
        {
          let $p47667;
          {
            const $t47658 = rs.num;
            $p47667 = Arcade$Rng$next_unit($t47658, r1);
          }
          {
            const uy = $p47667._0;
            {
              const r2 = $p47667._1;
              {
                let w;
                {
                  const $t47659 = rs.tune;
                  w = $t47659.wind_max;
                }
                {
                  let $t47666;
                  {
                    let $t47662;
                    {
                      let $t47661;
                      {
                        const $t47660 = (ux * 2.);
                        $t47661 = ($t47660 - 1.);
                      }
                      $t47662 = ($t47661 * w);
                    }
                    {
                      let $t47665;
                      {
                        let $t47664;
                        {
                          const $t47663 = (uy * 2.);
                          $t47664 = ($t47663 - 1.);
                        }
                        $t47665 = ($t47664 * w);
                      }
                      $t47666 = ({ x: $t47662, y: $t47665 });
                    }
                  }
                  {
                    const $rc_2580 = { _0: $t47666, _1: r2 };
                    return $rc_2580;
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
const Putt$Rules$draw_wind$clo = { _0: ($_, rs, r) => Putt$Rules$draw_wind(rs, r) };

function Putt$Rules$tee_up(rs, s, i, h) {
  {
    let $p47674;
    {
      const $t47669 = s.rng;
      $p47674 = Putt$Rules$draw_wind(rs, $t47669);
    }
    {
      const drawn = $p47674._0;
      {
        const r = $p47674._1;
        {
          const $t47670 = h.tee;
          {
            let $t47672;
            {
              const $t47671 = h.gust;
              $t47672 = Arcade$Vec2$scale(drawn, $t47671);
            }
            {
              const $t47673 = { $: "PuttAiming" };
              {
                const $rc_2584 = ({ ...s, rng: r, hole: i, ball: $t47670, strokes: 0, wind: $t47672, phase: $t47673 });
                return $rc_2584;
              }
            }
          }
        }
      }
    }
  }
}
const Putt$Rules$tee_up$clo = { _0: ($_, rs, s, i, h) => Putt$Rules$tee_up(rs, s, i, h) };

function Putt$Rules$new_game(rs, seed) {
  {
    let first;
    {
      const $t46126_i6244 = ({ x: 0.8, y: 0.6 });
      {
        const $t46127_i6245 = ({ x: 0.8, y: 5.2 });
        {
          const $t46128_i6246 = { $: "Nil" };
          {
            const $t46129_i6247 = { $: "Nil" };
            {
              const $t46130_i6248 = { $: "Nil" };
              {
                const $t46131_i6249 = { $: "Nil" };
                first = ({ title: "Straight", par: 2, width: 1.6, length: 6., tee: $t46126_i6244, cup: $t46127_i6245, blocks: $t46128_i6246, sands: $t46129_i6247, waters: $t46130_i6248, slopes: $t46131_i6249, gust: 1. });
              }
            }
          }
        }
      }
    }
    {
      let blank;
      {
        let $t47675;
        $t47675 = ({ word: seed });
        {
          const $t47676 = first.tee;
          {
            const $t47677 = ({ x: 0., y: 0. });
            {
              const $t47678 = { $: "Nil" };
              {
                const $t47679 = { $: "PuttAiming" };
                blank = ({ rng: $t47675, seed: seed, hole: 0, ball: $t47676, strokes: 0, wind: $t47677, card: $t47678, phase: $t47679 });
              }
            }
          }
        }
      }
      return Putt$Rules$tee_up(rs, blank, 0, first);
    }
  }
}
const Putt$Rules$new_game$clo = { _0: ($_, rs, seed) => Putt$Rules$new_game(rs, seed) };

function Putt$Rules$current(s) {
  {
    let $t47681;
    {
      const $t47680 = s.hole;
      {
        const $t46239_i6251 = ($t47680 < 0);
        if ($t46239_i6251 === true) {
          $t47681 = { $: "None" };
        } else {
          {
            const $t46240_i6252 = Putt$Course$holes();
            $t47681 = List$nth_opt$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int($t46240_i6252, $t47680);
          }
        }
      }
    }
    switch ($t47681.$) {
      case "Some": {
        const $f47682 = $t47681._0;
        {
          const h = $f47682;
          return h;
        }
        break;
      }
      case "None": {
        undefined;
        return unreachable();
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Putt$Rules$current$clo = { _0: ($_, s) => Putt$Rules$current(s) };

function Putt$Rules$total(s) {
  {
    const $t47683 = s.card;
    {
      const $t47685 = { $: "$Clo_$lam0_Putt_Rules_total$0_Putt_Rules_total", _0: $lam0_Putt_Rules_total$apply$0_Putt_Rules_total };
      {
        const $rc_2585 = List$fold_left$List_Int$Int$Fn_Int_Int_Int($t47683, 0, $t47685);
        return $rc_2585;
      }
    }
  }
}
const Putt$Rules$total$clo = { _0: ($_, s) => Putt$Rules$total(s) };

function Putt$Rules$play(rs, a, s) {
  switch (a.$) {
    case "PuttStrike": {
      const $f47686 = a._0;
      {
        const shot = $f47686;
        return Putt$Rules$strike(rs, shot, s);
      }
      break;
    }
    case "PuttNext": {
      return Putt$Rules$next_hole(rs, s);
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Putt$Rules$play$clo = { _0: ($_, rs, a, s) => Putt$Rules$play(rs, a, s) };

function Putt$Rules$checked_shot(rs, shot) {
  {
    let l;
    {
      const $t47692 = shot.aim;
      l = Arcade$Vec2$length($t47692);
    }
    {
      const $t47693 = (l > 0.);
      if ($t47693 === true) {
        {
          let $t47702;
          {
            let $t47697;
            {
              const $t47694 = shot.power;
              {
                let $t47696;
                {
                  const $t47695 = rs.tune;
                  $t47696 = $t47695.min_power;
                }
                $t47697 = ($t47694 >= $t47696);
              }
            }
            {
              let $t47701;
              {
                const $t47698 = shot.power;
                {
                  let $t47700;
                  {
                    const $t47699 = rs.tune;
                    $t47700 = $t47699.max_power;
                  }
                  $t47701 = ($t47698 <= $t47700);
                }
              }
              $t47702 = ($t47697 && $t47701);
            }
          }
          if ($t47702 === true) {
            {
              let $t47707;
              {
                let $t47705;
                {
                  const $t47703 = shot.aim;
                  {
                    const $t47704 = (1. / l);
                    $t47705 = Arcade$Vec2$scale($t47703, $t47704);
                  }
                }
                {
                  const $t47706 = shot.power;
                  $t47707 = ({ aim: $t47705, power: $t47706 });
                }
              }
              return { $: "Ok", _0: $t47707 };
            }
          } else {
            {
              let $t47709;
              {
                const $t47708 = shot.power;
                $t47709 = { $: "PuttPowerOut", _0: $t47708 };
              }
              return { $: "Err", _0: $t47709 };
            }
          }
        }
      } else {
        {
          const $t47710 = { $: "PuttNoAim" };
          return { $: "Err", _0: $t47710 };
        }
      }
    }
  }
}
const Putt$Rules$checked_shot$clo = { _0: ($_, rs, shot) => Putt$Rules$checked_shot(rs, shot) };

function Putt$Rules$strike(rs, shot, s) {
  {
    const $t47711 = s.phase;
    switch ($t47711.$) {
      case "PuttAiming": {
        {
          let $t47712;
          $t47712 = Putt$Rules$checked_shot(rs, shot);
          switch ($t47712.$) {
            case "Ok": {
              const $f47714 = $t47712._0;
              {
                const ok = $f47714;
                {
                  const $t47713 = Putt$Rules$struck(rs, ok, s);
                  return { $: "Ok", _0: $t47713 };
                }
              }
              break;
            }
            case "Err": {
              const $f47715 = $t47712._0;
              {
                const why = $f47715;
                return { $: "Err", _0: why };
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
        break;
      }
      case "PuttHoleDone": {
        {
          const $t47716 = { $: "PuttNotAiming" };
          return { $: "Err", _0: $t47716 };
        }
        break;
      }
      case "PuttCourseDone": {
        {
          const $t47717 = { $: "PuttCourseOver" };
          return { $: "Err", _0: $t47717 };
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Putt$Rules$strike$clo = { _0: ($_, rs, shot, s) => Putt$Rules$strike(rs, shot, s) };

function Putt$Rules$met_events($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f47720 = xs._0;
        const $f47721 = xs._1;
        {
          const rest = $f47721;
          {
            const x = $f47720;
            {
              const $t47718 = { $: "PuttMet", _0: x };
              {
                const $t47719 = { $: "Cons", _0: $t47718, _1: acc };
                {
                  $tco_a0 = rest;
                  $tco_a1 = $t47719;
                  continue __tco;
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
const Putt$Rules$met_events$clo = { _0: ($_, xs, acc) => Putt$Rules$met_events(xs, acc) };

function Putt$Rules$struck(rs, shot, s) {
  {
    let h;
    h = Putt$Rules$current(s);
    {
      let end_;
      {
        const $t47726 = rs.tune;
        {
          const $t47727 = s.wind;
          {
            const $t47728 = s.ball;
            {
              let $t47731;
              {
                const $t47729 = shot.aim;
                {
                  const $t47730 = shot.power;
                  $t47731 = Arcade$Vec2$scale($t47729, $t47730);
                }
              }
              end_ = Putt$Roll$roll($t47726, h, $t47727, $t47728, $t47731);
            }
          }
        }
      }
      {
        let strokes;
        {
          const $t47732 = s.strokes;
          strokes = (($t47732 + 1) < 4611686018427387904 && ($t47732 + 1) >= -4611686018427387904 ? ($t47732 + 1) : march_int_ovf(($t47732 + 1), 0));
        }
        {
          const $t47733 = end_.met;
          {
            const $t47734 = { $: "PuttStruck", _0: shot };
            {
              const $t47735 = { $: "Nil" };
              {
                const $t47736 = { $: "Cons", _0: $t47734, _1: $t47735 };
                {
                  let $t47737;
                  $t47737 = Putt$Rules$met_events($t47733, $t47736);
                  {
                    let met;
                    {
                      const $t1095_i6258 = { $: "Nil" };
                      met = List$reverse_onto$List_PuttEvent$List_PuttEvent($t47737, $t1095_i6258);
                    }
                    {
                      let $t47740;
                      {
                        const $t47738 = end_.rest;
                        {
                          const $t47739 = end_.took;
                          $t47740 = { $: "PuttRested", _0: $t47738, _1: $t47739 };
                        }
                      }
                      {
                        const $t47741 = { $: "Nil" };
                        {
                          const $t47742 = { $: "Cons", _0: $t47740, _1: $t47741 };
                          {
                            const rested = List$append$List_PuttEvent$List_PuttEvent(met, $t47742);
                            {
                              let moved;
                              {
                                const $t47743 = end_.rest;
                                moved = ({ ...s, ball: $t47743, strokes: strokes });
                              }
                              {
                                const $t47744 = end_.holed;
                                if ($t47744 === true) {
                                  {
                                    let $t47746;
                                    {
                                      const $t47745 = h.par;
                                      $t47746 = { $: "PuttHoled", _0: strokes, _1: $t47745 };
                                    }
                                    {
                                      const $t47747 = { $: "Nil" };
                                      {
                                        const $t47748 = { $: "Cons", _0: $t47746, _1: $t47747 };
                                        {
                                          const $t47749 = List$append$List_PuttEvent$List_PuttEvent(rested, $t47748);
                                          {
                                            const $t47750 = end_.path;
                                            return Putt$Rules$finish_hole(moved, $t47749, $t47750);
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  {
                                    let $t47753;
                                    {
                                      let $t47752;
                                      {
                                        const $t47751 = rs.tune;
                                        $t47752 = $t47751.stroke_cap;
                                      }
                                      $t47753 = (strokes >= $t47752);
                                    }
                                    if ($t47753 === true) {
                                      {
                                        let $t47755;
                                        {
                                          const $t47754 = h.par;
                                          $t47755 = { $: "PuttPickedUp", _0: strokes, _1: $t47754 };
                                        }
                                        {
                                          const $t47756 = { $: "Nil" };
                                          {
                                            const $t47757 = { $: "Cons", _0: $t47755, _1: $t47756 };
                                            {
                                              const $t47758 = List$append$List_PuttEvent$List_PuttEvent(rested, $t47757);
                                              {
                                                const $t47759 = end_.path;
                                                return Putt$Rules$finish_hole(moved, $t47758, $t47759);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      {
                                        const $t47760 = end_.path;
                                        {
                                          const $rc_2589 = ({ after: moved, told: rested, rolled: $t47760 });
                                          return $rc_2589;
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
      }
    }
  }
}
const Putt$Rules$struck$clo = { _0: ($_, rs, shot, s) => Putt$Rules$struck(rs, shot, s) };

function Putt$Rules$finish_hole(s, told, path) {
  {
    let $t47767;
    {
      const $t47761 = s.card;
      {
        const $t47762 = s.strokes;
        {
          const $t47763 = { $: "Nil" };
          {
            const $t47764 = { $: "Cons", _0: $t47762, _1: $t47763 };
            {
              let $t47765;
              {
                const xs_i16047 = $t47761;
                {
                  const ys_i16048 = $t47764;
                  switch (xs_i16047.$) {
                    case "Nil": {
                      $t47765 = $t47764;
                      break;
                    }
                    case "Cons": {
                      const $f1104_i16049 = xs_i16047._0;
                      const $f1105_i16050 = xs_i16047._1;
                      {
                        const t_i16051 = $f1105_i16050;
                        {
                          const h_i16052 = $f1104_i16049;
                          {
                            const $trmc11_i16053 = { $: "Cons", _0: h_i16052, _1: null };
                            List$append$dps$List_Int$List_Int$List_Int(t_i16051, $t47764, $trmc11_i16053);
                            $t47765 = $trmc11_i16053;
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
              {
                const $t47766 = { $: "PuttHoleDone" };
                $t47767 = ({ ...s, card: $t47765, phase: $t47766 });
              }
            }
          }
        }
      }
    }
    return ({ after: $t47767, told: told, rolled: path });
  }
}
const Putt$Rules$finish_hole$clo = { _0: ($_, s, told, path) => Putt$Rules$finish_hole(s, told, path) };

function Putt$Rules$next_hole(rs, s) {
  {
    const $t47768 = s.phase;
    switch ($t47768.$) {
      case "PuttAiming": {
        {
          const $t47769 = { $: "PuttHoleUnfinished" };
          return { $: "Err", _0: $t47769 };
        }
        break;
      }
      case "PuttCourseDone": {
        {
          const $t47770 = { $: "PuttCourseOver" };
          return { $: "Err", _0: $t47770 };
        }
        break;
      }
      case "PuttHoleDone": {
        {
          let $t47773;
          {
            let $t47772;
            {
              const $t47771 = s.hole;
              $t47772 = (($t47771 + 1) < 4611686018427387904 && ($t47771 + 1) >= -4611686018427387904 ? ($t47771 + 1) : march_int_ovf(($t47771 + 1), 0));
            }
            {
              const $t46239_i6262 = ($t47772 < 0);
              if ($t46239_i6262 === true) {
                $t47773 = { $: "None" };
              } else {
                {
                  const $t46240_i6263 = Putt$Course$holes();
                  $t47773 = List$nth_opt$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int($t46240_i6263, $t47772);
                }
              }
            }
          }
          switch ($t47773.$) {
            case "Some": {
              const $f47793 = $t47773._0;
              {
                const h = $f47793;
                {
                  let $t47783;
                  {
                    let $t47776;
                    {
                      let $t47775;
                      {
                        const $t47774 = s.hole;
                        $t47775 = (($t47774 + 1) < 4611686018427387904 && ($t47774 + 1) >= -4611686018427387904 ? ($t47774 + 1) : march_int_ovf(($t47774 + 1), 0));
                      }
                      $t47776 = Putt$Rules$tee_up(rs, s, $t47775, h);
                    }
                    {
                      let $t47779;
                      {
                        let $t47778;
                        {
                          const $t47777 = s.hole;
                          $t47778 = (($t47777 + 1) < 4611686018427387904 && ($t47777 + 1) >= -4611686018427387904 ? ($t47777 + 1) : march_int_ovf(($t47777 + 1), 0));
                        }
                        $t47779 = { $: "PuttTeedOff", _0: $t47778 };
                      }
                      {
                        const $t47780 = { $: "Nil" };
                        {
                          const $t47781 = { $: "Cons", _0: $t47779, _1: $t47780 };
                          {
                            const $t47782 = { $: "Nil" };
                            $t47783 = ({ after: $t47776, told: $t47781, rolled: $t47782 });
                          }
                        }
                      }
                    }
                  }
                  return { $: "Ok", _0: $t47783 };
                }
              }
              break;
            }
            case "None": {
              {
                let $t47792;
                {
                  let $t47785;
                  {
                    const $t47784 = { $: "PuttCourseDone" };
                    $t47785 = ({ ...s, phase: $t47784 });
                  }
                  {
                    let $t47788;
                    {
                      const $t47786 = Putt$Rules$total(s);
                      {
                        let $t47787;
                        {
                          const $t46245_i6259 = Putt$Course$holes();
                          {
                            const $t46248_i6260 = { $: "$Clo_$lam0_Putt_Course_course_par$0_Putt_Course_course_par", _0: $lam0_Putt_Course_course_par$apply$0_Putt_Course_course_par };
                            $t47787 = List$fold_left$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$Fn_Int_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_Int($t46245_i6259, 0, $t46248_i6260);
                          }
                        }
                        $t47788 = { $: "PuttFinished", _0: $t47786, _1: $t47787 };
                      }
                    }
                    {
                      const $t47789 = { $: "Nil" };
                      {
                        const $t47790 = { $: "Cons", _0: $t47788, _1: $t47789 };
                        {
                          const $t47791 = { $: "Nil" };
                          $t47792 = ({ after: $t47785, told: $t47790, rolled: $t47791 });
                        }
                      }
                    }
                  }
                }
                return { $: "Ok", _0: $t47792 };
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
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
const Putt$Rules$next_hole$clo = { _0: ($_, rs, s) => Putt$Rules$next_hole(rs, s) };

function Putt$View$px(rs, l, p) {
  {
    const $t47836 = rs.num;
    {
      let $t47839;
      {
        const $t47837 = p.x;
        {
          const $t47838 = p.y;
          $t47839 = ({ x: $t47837, y: $t47838, z: 0. });
        }
      }
      {
        const l_i13836 = l;
        {
          let $t48560_i13838;
          {
            const l_i16064 = l;
            {
              let d_i16067;
              {
                const $t48519_i16066 = l.eye;
                d_i16067 = Arcade$Vec3$sub($t47839, $t48519_i16066);
              }
              {
                let $t48521_i16069;
                {
                  const $t48520_i16068 = l.right;
                  $t48521_i16069 = Arcade$Vec3$dot(d_i16067, $t48520_i16068);
                }
                {
                  let $t48523_i16071;
                  {
                    const $t48522_i16070 = l.up;
                    $t48523_i16071 = Arcade$Vec3$dot(d_i16067, $t48522_i16070);
                  }
                  {
                    let $t48525_i16073;
                    {
                      const $t48524_i16072 = l.forward;
                      $t48525_i16073 = Arcade$Vec3$dot(d_i16067, $t48524_i16072);
                    }
                    $t48560_i13838 = ({ across: $t48521_i16069, rise: $t48523_i16071, depth: $t48525_i16073 });
                  }
                }
              }
            }
          }
          {
            const l_i16055 = l;
            {
              let f_i16057;
              f_i16057 = Arcade$Camera$fraction_of_seen($t47836, l, $t48560_i13838);
              {
                let $t48556_i16060;
                {
                  const $t48554_i16058 = f_i16057.x;
                  {
                    const $t48555_i16059 = l.width;
                    $t48556_i16060 = ($t48554_i16058 * $t48555_i16059);
                  }
                }
                {
                  let $t48559_i16063;
                  {
                    const $t48557_i16061 = f_i16057.y;
                    {
                      const $t48558_i16062 = l.height;
                      $t48559_i16063 = ($t48557_i16061 * $t48558_i16062);
                    }
                  }
                  return ({ x: $t48556_i16060, y: $t48559_i16063 });
                }
              }
            }
          }
        }
      }
    }
  }
}
const Putt$View$px$clo = { _0: ($_, rs, l, p) => Putt$View$px(rs, l, p) };

function Putt$View$pxs($tco_a0, $tco_a1, $tco_a2, $tco_a3) {
  __tco: for (;;) {
    const rs = $tco_a0;
    const l = $tco_a1;
    const ps = $tco_a2;
    const acc = $tco_a3;
    switch (ps.$) {
      case "Nil": {
        {
          const $t1095_i6286 = { $: "Nil" };
          return List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float(acc, $t1095_i6286);
        }
        break;
      }
      case "Cons": {
        const $f47843 = ps._0;
        const $f47844 = ps._1;
        {
          const rest = $f47844;
          {
            const p = $f47843;
            {
              let $t47841;
              $t47841 = Putt$View$px(rs, l, p);
              {
                const $t47842 = { $: "Cons", _0: $t47841, _1: acc };
                {
                  $tco_a0 = rs;
                  $tco_a1 = l;
                  $tco_a2 = rest;
                  $tco_a3 = $t47842;
                  continue __tco;
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
const Putt$View$pxs$clo = { _0: ($_, rs, l, ps, acc) => Putt$View$pxs(rs, l, ps, acc) };

function Putt$View$flat(rs, l, bs, ink) {
  switch (bs.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f47859 = bs._0;
      const $f47860 = bs._1;
      {
        const rest = $f47860;
        {
          const b = $f47859;
          {
            let $t47857;
            {
              let $t47854;
              {
                const $t47849_i6290 = Putt$Course$corners(b);
                {
                  const $t47850_i6291 = { $: "Nil" };
                  {
                    const $t47851_i6292 = Putt$View$pxs(rs, l, $t47849_i6290, $t47850_i6291);
                    $t47854 = { $: "Poly", _0: $t47851_i6292 };
                  }
                }
              }
              {
                let $t47855;
                $t47855 = { $: "Flat", _0: ink };
                {
                  const $t47856 = { $: "Over" };
                  $t47857 = { $: "FillShape", _0: $t47854, _1: $t47855, _2: $t47856 };
                }
              }
            }
            {
              const $trmc201 = { $: "Cons", _0: $t47857, _1: null };
              Putt$View$flat$dps(rs, l, rest, ink, $trmc201);
              return $trmc201;
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
const Putt$View$flat$clo = { _0: ($_, rs, l, bs, ink) => Putt$View$flat(rs, l, bs, ink) };

function Putt$View$flat$dps($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4) {
  __tco: for (;;) {
    const rs = $tco_a0;
    const l = $tco_a1;
    const bs = $tco_a2;
    const ink = $tco_a3;
    const $dst = $tco_a4;
    switch (bs.$) {
      case "Nil": {
        {
          const $trmc199 = { $: "Nil" };
          return ($dst._1 = $trmc199, undefined);
        }
        break;
      }
      case "Cons": {
        const $f47859 = bs._0;
        const $f47860 = bs._1;
        {
          const rest = $f47860;
          {
            const b = $f47859;
            {
              let $t47857;
              {
                let $t47854;
                {
                  const $t47849_i6296 = Putt$Course$corners(b);
                  {
                    const $t47850_i6297 = { $: "Nil" };
                    {
                      const $t47851_i6298 = Putt$View$pxs(rs, l, $t47849_i6296, $t47850_i6297);
                      $t47854 = { $: "Poly", _0: $t47851_i6298 };
                    }
                  }
                }
                {
                  let $t47855;
                  $t47855 = { $: "Flat", _0: ink };
                  {
                    const $t47856 = { $: "Over" };
                    $t47857 = { $: "FillShape", _0: $t47854, _1: $t47855, _2: $t47856 };
                  }
                }
              }
              {
                const $trmc200 = { $: "Cons", _0: $t47857, _1: null };
                ($dst._1 = $trmc200, undefined);
                {
                  $tco_a0 = rs;
                  $tco_a1 = l;
                  $tco_a2 = rest;
                  $tco_a3 = ink;
                  $tco_a4 = $trmc200;
                  continue __tco;
                }
              }
            }
          }
        }
        break;
      }
      default: {
        {
          const $trmc198 = (() => { throw new Error("non-exhaustive pattern match"); })();
          return ($dst._1 = $trmc198, undefined);
        }
      }
    }
    return undefined;
  }
}
const Putt$View$flat$dps$clo = { _0: ($_, rs, l, bs, ink, $dst) => Putt$View$flat$dps(rs, l, bs, ink, $dst) };

function Putt$View$walled(rs, l, bs, wood, rim) {
  switch (bs.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f47875 = bs._0;
      const $f47876 = bs._1;
      {
        const rest = $f47876;
        {
          const b = $f47875;
          {
            let $t47868;
            {
              let $t47865;
              {
                const $t47849_i6312 = Putt$Course$corners(b);
                {
                  const $t47850_i6313 = { $: "Nil" };
                  {
                    const $t47851_i6314 = Putt$View$pxs(rs, l, $t47849_i6312, $t47850_i6313);
                    $t47865 = { $: "Poly", _0: $t47851_i6314 };
                  }
                }
              }
              {
                let $t47866;
                $t47866 = { $: "Flat", _0: wood };
                {
                  const $t47867 = { $: "Over" };
                  $t47868 = { $: "FillShape", _0: $t47865, _1: $t47866, _2: $t47867 };
                }
              }
            }
            {
              let $t47872;
              {
                let $t47869;
                {
                  const $t47849_i6306 = Putt$Course$corners(b);
                  {
                    const $t47850_i6307 = { $: "Nil" };
                    {
                      const $t47851_i6308 = Putt$View$pxs(rs, l, $t47849_i6306, $t47850_i6307);
                      $t47869 = { $: "Poly", _0: $t47851_i6308 };
                    }
                  }
                }
                {
                  let $t47870;
                  {
                    const $t47852_i6301 = { $: "RoundEnd" };
                    {
                      const $t47853_i6302 = { $: "RoundCorner" };
                      $t47870 = ({ ink: rim, width: 2., ends: $t47852_i6301, corners: $t47853_i6302 });
                    }
                  }
                  {
                    const $t47871 = { $: "Over" };
                    $t47872 = { $: "StrokeShape", _0: $t47869, _1: $t47870, _2: $t47871 };
                  }
                }
              }
              {
                const $t47873 = Putt$View$walled(rs, l, rest, wood, rim);
                {
                  const $t47874 = { $: "Cons", _0: $t47872, _1: $t47873 };
                  return { $: "Cons", _0: $t47868, _1: $t47874 };
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
const Putt$View$walled$clo = { _0: ($_, rs, l, bs, wood, rim) => Putt$View$walled(rs, l, bs, wood, rim) };

function Putt$View$pools(rs, l, bs) {
  switch (bs.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f47893 = bs._0;
      const $f47894 = bs._1;
      {
        const rest = $f47894;
        {
          const b = $f47893;
          {
            let $t47885;
            {
              let $t47881;
              {
                const $t47849_i6328 = Putt$Course$corners(b);
                {
                  const $t47850_i6329 = { $: "Nil" };
                  {
                    const $t47851_i6330 = Putt$View$pxs(rs, l, $t47849_i6328, $t47850_i6329);
                    $t47881 = { $: "Poly", _0: $t47851_i6330 };
                  }
                }
              }
              {
                let $t47883;
                {
                  const $t47882 = Arcade$Draw$hex(3112897);
                  $t47883 = { $: "Flat", _0: $t47882 };
                }
                {
                  const $t47884 = { $: "Over" };
                  $t47885 = { $: "FillShape", _0: $t47881, _1: $t47883, _2: $t47884 };
                }
              }
            }
            {
              let $t47890;
              {
                let $t47886;
                {
                  const $t47849_i6322 = Putt$Course$corners(b);
                  {
                    const $t47850_i6323 = { $: "Nil" };
                    {
                      const $t47851_i6324 = Putt$View$pxs(rs, l, $t47849_i6322, $t47850_i6323);
                      $t47886 = { $: "Poly", _0: $t47851_i6324 };
                    }
                  }
                }
                {
                  let $t47888;
                  {
                    const $t47887 = Arcade$Draw$hex(9422826);
                    {
                      const $t47852_i6317 = { $: "RoundEnd" };
                      {
                        const $t47853_i6318 = { $: "RoundCorner" };
                        $t47888 = ({ ink: $t47887, width: 2., ends: $t47852_i6317, corners: $t47853_i6318 });
                      }
                    }
                  }
                  {
                    const $t47889 = { $: "Over" };
                    $t47890 = { $: "StrokeShape", _0: $t47886, _1: $t47888, _2: $t47889 };
                  }
                }
              }
              {
                const $t47891 = Putt$View$pools(rs, l, rest);
                {
                  const $t47892 = { $: "Cons", _0: $t47890, _1: $t47891 };
                  return { $: "Cons", _0: $t47885, _1: $t47892 };
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
const Putt$View$pools$clo = { _0: ($_, rs, l, bs) => Putt$View$pools(rs, l, bs) };

function Putt$View$chevron(rs, l, c, d) {
  {
    let back;
    {
      let $t47899;
      $t47899 = Arcade$Vec2$scale(d, 0.04);
      back = Arcade$Vec2$sub(c, $t47899);
    }
    {
      let across;
      {
        let $t47903;
        {
          let $t47901;
          {
            const $t47900 = d.y;
            $t47901 = (0. - $t47900);
          }
          {
            const $t47902 = d.x;
            $t47903 = ({ x: $t47901, y: $t47902 });
          }
        }
        across = Arcade$Vec2$scale($t47903, 0.09);
      }
      {
        let $t47906;
        {
          let $t47905;
          {
            let $t47904;
            $t47904 = Arcade$Vec2$add(back, across);
            $t47905 = Putt$View$px(rs, l, $t47904);
          }
          $t47906 = { $: "MoveTo", _0: $t47905 };
        }
        {
          let $t47910;
          {
            let $t47909;
            {
              let $t47908;
              {
                const $t47907 = Arcade$Vec2$scale(d, 0.1);
                $t47908 = Arcade$Vec2$add(c, $t47907);
              }
              $t47909 = Putt$View$px(rs, l, $t47908);
            }
            $t47910 = { $: "LineTo", _0: $t47909 };
          }
          {
            let $t47913;
            {
              let $t47912;
              {
                const $t47911 = Arcade$Vec2$sub(back, across);
                $t47912 = Putt$View$px(rs, l, $t47911);
              }
              $t47913 = { $: "LineTo", _0: $t47912 };
            }
            {
              const $t47914 = { $: "Nil" };
              {
                const $t47915 = { $: "Cons", _0: $t47913, _1: $t47914 };
                {
                  const $t47916 = { $: "Cons", _0: $t47910, _1: $t47915 };
                  return { $: "Cons", _0: $t47906, _1: $t47916 };
                }
              }
            }
          }
        }
      }
    }
  }
}
const Putt$View$chevron$clo = { _0: ($_, rs, l, c, d) => Putt$View$chevron(rs, l, c, d) };

function Putt$View$chevron_row(rs, l, b, d, x, y) {
  {
    let $t47919;
    {
      let $t47918;
      {
        const $t47917 = b.hi;
        $t47918 = $t47917.x;
      }
      $t47919 = (x < $t47918);
    }
    if ($t47919 === true) {
      {
        const $t47920 = ({ x: x, y: y });
        {
          let $t47921;
          $t47921 = Putt$View$chevron(rs, l, $t47920, d);
          {
            const $t47923 = (x + 0.5);
            {
              const $t47924 = Putt$View$chevron_row(rs, l, b, d, $t47923, y);
              return List$append$List_PathStep$List_PathStep($t47921, $t47924);
            }
          }
        }
      }
    } else {
      return { $: "Nil" };
    }
  }
}
const Putt$View$chevron_row$clo = { _0: ($_, rs, l, b, d, x, y) => Putt$View$chevron_row(rs, l, b, d, x, y) };

function Putt$View$chevron_rows(rs, l, b, d, y) {
  {
    let $t47927;
    {
      let $t47926;
      {
        const $t47925 = b.hi;
        $t47926 = $t47925.y;
      }
      $t47927 = (y < $t47926);
    }
    if ($t47927 === true) {
      {
        let $t47932;
        {
          let $t47929;
          {
            const $t47928 = b.lo;
            $t47929 = $t47928.x;
          }
          {
            const $t47931 = (0.5 / 2.);
            $t47932 = ($t47929 + $t47931);
          }
        }
        {
          let $t47933;
          $t47933 = Putt$View$chevron_row(rs, l, b, d, $t47932, y);
          {
            const $t47935 = (y + 0.5);
            {
              const $t47936 = Putt$View$chevron_rows(rs, l, b, d, $t47935);
              return List$append$List_PathStep$List_PathStep($t47933, $t47936);
            }
          }
        }
      }
    } else {
      return { $: "Nil" };
    }
  }
}
const Putt$View$chevron_rows$clo = { _0: ($_, rs, l, b, d, y) => Putt$View$chevron_rows(rs, l, b, d, y) };

function Putt$View$banks(rs, l, ss) {
  switch (ss.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f47961 = ss._0;
      const $f47962 = ss._1;
      {
        const rest = $f47962;
        {
          const s = $f47961;
          {
            let steep;
            {
              const $t47937 = s.pull;
              steep = Arcade$Vec2$length($t47937);
            }
            {
              const $t47938 = (steep > 0.);
              if ($t47938 === true) {
                {
                  let d;
                  {
                    const $t47939 = s.pull;
                    {
                      const $t47940 = (1. / steep);
                      d = Arcade$Vec2$scale($t47939, $t47940);
                    }
                  }
                  {
                    const $t47941 = s.area;
                    {
                      let $t47947;
                      {
                        let $t47944;
                        {
                          let $t47943;
                          {
                            const $t47942 = s.area;
                            $t47943 = $t47942.lo;
                          }
                          $t47944 = $t47943.y;
                        }
                        {
                          const $t47946 = (0.5 / 2.);
                          $t47947 = ($t47944 + $t47946);
                        }
                      }
                      {
                        let marks;
                        marks = Putt$View$chevron_rows(rs, l, $t47941, d, $t47947);
                        {
                          let $t47953;
                          {
                            let $t47949;
                            {
                              const $t47948 = s.area;
                              {
                                const $t47849_i6342 = Putt$Course$corners($t47948);
                                {
                                  const $t47850_i6343 = { $: "Nil" };
                                  {
                                    const $t47851_i6344 = Putt$View$pxs(rs, l, $t47849_i6342, $t47850_i6343);
                                    $t47949 = { $: "Poly", _0: $t47851_i6344 };
                                  }
                                }
                              }
                            }
                            {
                              let $t47951;
                              {
                                const $t47950 = Arcade$Draw$hex(5615706);
                                $t47951 = { $: "Flat", _0: $t47950 };
                              }
                              {
                                const $t47952 = { $: "Over" };
                                $t47953 = { $: "FillShape", _0: $t47949, _1: $t47951, _2: $t47952 };
                              }
                            }
                          }
                          {
                            let $t47958;
                            {
                              const $t47954 = { $: "Outline", _0: marks };
                              {
                                let $t47956;
                                {
                                  const $t47955 = Arcade$Draw$hex(2780723);
                                  {
                                    const $t47852_i6337 = { $: "RoundEnd" };
                                    {
                                      const $t47853_i6338 = { $: "RoundCorner" };
                                      $t47956 = ({ ink: $t47955, width: 2., ends: $t47852_i6337, corners: $t47853_i6338 });
                                    }
                                  }
                                }
                                {
                                  const $t47957 = { $: "Over" };
                                  $t47958 = { $: "StrokeShape", _0: $t47954, _1: $t47956, _2: $t47957 };
                                }
                              }
                            }
                            {
                              const $t47959 = Putt$View$banks(rs, l, rest);
                              {
                                const $t47960 = { $: "Cons", _0: $t47958, _1: $t47959 };
                                {
                                  const $rc_2591 = { $: "Cons", _0: $t47953, _1: $t47960 };
                                  return $rc_2591;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                undefined;
                return unreachable();
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
const Putt$View$banks$clo = { _0: ($_, rs, l, ss) => Putt$View$banks(rs, l, ss) };

function Putt$View$cup_ops(rs, l, h) {
  {
    let k;
    k = Arcade$Camera$pixels_per_metre(l, 10.);
    {
      let c;
      {
        const $t47972 = h.cup;
        c = Putt$View$px(rs, l, $t47972);
      }
      {
        let top;
        {
          const $t47973 = c.x;
          {
            let $t47976;
            {
              const $t47974 = c.y;
              {
                const $t47975 = (0.5 * k);
                $t47976 = ($t47974 - $t47975);
              }
            }
            top = ({ x: $t47973, y: $t47976 });
          }
        }
        {
          let flag;
          {
            let $t47983;
            {
              let $t47979;
              {
                const $t47977 = top.x;
                {
                  const $t47978 = (0.25 * k);
                  $t47979 = ($t47977 + $t47978);
                }
              }
              {
                let $t47982;
                {
                  const $t47980 = top.y;
                  {
                    const $t47981 = (0.08 * k);
                    $t47982 = ($t47980 + $t47981);
                  }
                }
                $t47983 = ({ x: $t47979, y: $t47982 });
              }
            }
            {
              let $t47988;
              {
                const $t47984 = top.x;
                {
                  let $t47987;
                  {
                    const $t47985 = top.y;
                    {
                      const $t47986 = (0.16 * k);
                      $t47987 = ($t47985 + $t47986);
                    }
                  }
                  $t47988 = ({ x: $t47984, y: $t47987 });
                }
              }
              {
                const $t47989 = { $: "Nil" };
                {
                  const $t47990 = { $: "Cons", _0: $t47988, _1: $t47989 };
                  {
                    const $t47991 = { $: "Cons", _0: $t47983, _1: $t47990 };
                    {
                      let $t47992;
                      $t47992 = { $: "Cons", _0: top, _1: $t47991 };
                      flag = { $: "Poly", _0: $t47992 };
                    }
                  }
                }
              }
            }
          }
          {
            let $t48000;
            {
              let $t47996;
              {
                let $t47995;
                {
                  let $t47994;
                  {
                    const $t47993 = rs.tune;
                    $t47994 = $t47993.cup_radius;
                  }
                  $t47995 = ($t47994 * k);
                }
                $t47996 = { $: "Disc", _0: c, _1: $t47995 };
              }
              {
                let $t47998;
                {
                  const $t47997 = Arcade$Draw$hex(1052688);
                  $t47998 = { $: "Flat", _0: $t47997 };
                }
                {
                  const $t47999 = { $: "Over" };
                  $t48000 = { $: "FillShape", _0: $t47996, _1: $t47998, _2: $t47999 };
                }
              }
            }
            {
              let $t48005;
              {
                let $t48001;
                {
                  const $t47967_i6351 = { $: "MoveTo", _0: c };
                  {
                    const $t47968_i6352 = { $: "LineTo", _0: top };
                    {
                      const $t47969_i6353 = { $: "Nil" };
                      {
                        const $t47970_i6354 = { $: "Cons", _0: $t47968_i6352, _1: $t47969_i6353 };
                        {
                          const $t47971_i6355 = { $: "Cons", _0: $t47967_i6351, _1: $t47970_i6354 };
                          $t48001 = { $: "Outline", _0: $t47971_i6355 };
                        }
                      }
                    }
                  }
                }
                {
                  let $t48003;
                  {
                    const $t48002 = Arcade$Draw$hex(15921906);
                    {
                      const $t47852_i6347 = { $: "RoundEnd" };
                      {
                        const $t47853_i6348 = { $: "RoundCorner" };
                        $t48003 = ({ ink: $t48002, width: 2., ends: $t47852_i6347, corners: $t47853_i6348 });
                      }
                    }
                  }
                  {
                    const $t48004 = { $: "Over" };
                    $t48005 = { $: "StrokeShape", _0: $t48001, _1: $t48003, _2: $t48004 };
                  }
                }
              }
              {
                let $t48009;
                {
                  let $t48007;
                  {
                    const $t48006 = Arcade$Draw$hex(15221311);
                    $t48007 = { $: "Flat", _0: $t48006 };
                  }
                  {
                    const $t48008 = { $: "Over" };
                    $t48009 = { $: "FillShape", _0: flag, _1: $t48007, _2: $t48008 };
                  }
                }
                {
                  const $t48010 = { $: "Nil" };
                  {
                    const $t48011 = { $: "Cons", _0: $t48009, _1: $t48010 };
                    {
                      const $t48012 = { $: "Cons", _0: $t48005, _1: $t48011 };
                      return { $: "Cons", _0: $t48000, _1: $t48012 };
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
const Putt$View$cup_ops$clo = { _0: ($_, rs, l, h) => Putt$View$cup_ops(rs, l, h) };

function Putt$View$ball_ops(rs, l, at) {
  {
    let r;
    {
      let $t48014;
      {
        const $t48013 = rs.tune;
        $t48014 = $t48013.ball_radius;
      }
      {
        let $t48015;
        $t48015 = Arcade$Camera$pixels_per_metre(l, 10.);
        r = ($t48014 * $t48015);
      }
    }
    {
      const c = Putt$View$px(rs, l, at);
      {
        let $t48020;
        {
          let $t48016;
          $t48016 = { $: "Disc", _0: c, _1: r };
          {
            let $t48018;
            {
              const $t48017 = Arcade$Draw$hex(16777215);
              $t48018 = { $: "Flat", _0: $t48017 };
            }
            {
              const $t48019 = { $: "Over" };
              $t48020 = { $: "FillShape", _0: $t48016, _1: $t48018, _2: $t48019 };
            }
          }
        }
        {
          let $t48025;
          {
            const $t48021 = { $: "Disc", _0: c, _1: r };
            {
              let $t48023;
              {
                const $t48022 = Arcade$Draw$hex(3355443);
                {
                  const $t47852_i6366 = { $: "RoundEnd" };
                  {
                    const $t47853_i6367 = { $: "RoundCorner" };
                    $t48023 = ({ ink: $t48022, width: 1., ends: $t47852_i6366, corners: $t47853_i6367 });
                  }
                }
              }
              {
                const $t48024 = { $: "Over" };
                $t48025 = { $: "StrokeShape", _0: $t48021, _1: $t48023, _2: $t48024 };
              }
            }
          }
          {
            const $t48026 = { $: "Nil" };
            {
              const $t48027 = { $: "Cons", _0: $t48025, _1: $t48026 };
              return { $: "Cons", _0: $t48020, _1: $t48027 };
            }
          }
        }
      }
    }
  }
}
const Putt$View$ball_ops$clo = { _0: ($_, rs, l, at) => Putt$View$ball_ops(rs, l, at) };

function Putt$View$field_ops(rs, l, h) {
  {
    let green;
    {
      let $t48091;
      {
        const h_i13857 = h;
        {
          const $t46124_i13858 = h.width;
          {
            const $t46125_i13859 = h.length;
            {
              const $t46069_i5217_i13864 = ({ x: 0., y: 0. });
              {
                const $t46070_i5218_i13865 = ({ x: $t46124_i13858, y: $t46125_i13859 });
                $t48091 = ({ lo: $t46069_i5217_i13864, hi: $t46070_i5218_i13865 });
              }
            }
          }
        }
      }
      {
        const $t47849_i6404 = Putt$Course$corners($t48091);
        {
          const $t47850_i6405 = { $: "Nil" };
          {
            const $t47851_i6406 = Putt$View$pxs(rs, l, $t47849_i6404, $t47850_i6405);
            green = { $: "Poly", _0: $t47851_i6406 };
          }
        }
      }
    }
    {
      let $t48093;
      {
        const $t48092 = Arcade$Draw$hex(1780258);
        $t48093 = { $: "ClearTo", _0: $t48092 };
      }
      {
        let $t48097;
        {
          let $t48095;
          {
            const $t48094 = Arcade$Draw$hex(4168522);
            $t48095 = { $: "Flat", _0: $t48094 };
          }
          {
            const $t48096 = { $: "Over" };
            $t48097 = { $: "FillShape", _0: green, _1: $t48095, _2: $t48096 };
          }
        }
        {
          const $t48098 = { $: "Nil" };
          {
            const $t48099 = { $: "Cons", _0: $t48097, _1: $t48098 };
            {
              const $t48100 = { $: "Cons", _0: $t48093, _1: $t48099 };
              {
                const $t48101 = h.slopes;
                {
                  let $t48102;
                  $t48102 = Putt$View$banks(rs, l, $t48101);
                  {
                    const $t48103 = h.sands;
                    {
                      const $t48104 = Arcade$Draw$hex(14862730);
                      {
                        let $t48105;
                        $t48105 = Putt$View$flat(rs, l, $t48103, $t48104);
                        {
                          const $t48106 = h.waters;
                          {
                            let $t48107;
                            $t48107 = Putt$View$pools(rs, l, $t48106);
                            {
                              let $t48108;
                              $t48108 = Putt$View$cup_ops(rs, l, h);
                              {
                                const $t48109 = h.blocks;
                                {
                                  const $t48110 = Arcade$Draw$hex(8014634);
                                  {
                                    const $t48111 = Arcade$Draw$hex(5911832);
                                    {
                                      let $t48112;
                                      $t48112 = Putt$View$walled(rs, l, $t48109, $t48110, $t48111);
                                      {
                                        let $t48116;
                                        {
                                          let $t48114;
                                          {
                                            const $t48113 = Arcade$Draw$hex(8014634);
                                            {
                                              const $t47852_i6399 = { $: "RoundEnd" };
                                              {
                                                const $t47853_i6400 = { $: "RoundCorner" };
                                                $t48114 = ({ ink: $t48113, width: 6., ends: $t47852_i6399, corners: $t47853_i6400 });
                                              }
                                            }
                                          }
                                          {
                                            const $t48115 = { $: "Over" };
                                            $t48116 = { $: "StrokeShape", _0: green, _1: $t48114, _2: $t48115 };
                                          }
                                        }
                                        {
                                          const $t48117 = { $: "Nil" };
                                          {
                                            const $t48118 = { $: "Cons", _0: $t48116, _1: $t48117 };
                                            {
                                              const $t48119 = { $: "Nil" };
                                              {
                                                const $t48120 = { $: "Cons", _0: $t48118, _1: $t48119 };
                                                {
                                                  const $t48121 = { $: "Cons", _0: $t48112, _1: $t48120 };
                                                  {
                                                    const $t48122 = { $: "Cons", _0: $t48108, _1: $t48121 };
                                                    {
                                                      const $t48123 = { $: "Cons", _0: $t48107, _1: $t48122 };
                                                      {
                                                        const $t48124 = { $: "Cons", _0: $t48105, _1: $t48123 };
                                                        {
                                                          const $t48125 = { $: "Cons", _0: $t48102, _1: $t48124 };
                                                          {
                                                            const $t48126 = { $: "Cons", _0: $t48100, _1: $t48125 };
                                                            {
                                                              const prepend_reversed_i6394 = { $: "$Clo_prepend_reversed$0_List_concat_List_List_DrawOp", _0: prepend_reversed$apply$0_List_concat_List_List_DrawOp };
                                                              {
                                                                const go_i6395 = { $: "$Clo_go$1_List_concat_List_List_DrawOp", _0: go$apply$1_List_concat_List_List_DrawOp, _1: prepend_reversed_i6394 };
                                                                {
                                                                  const $t1230_i6396 = { $: "Nil" };
                                                                  return go$apply$1_List_concat_List_List_DrawOp(go_i6395, $t48126, $t1230_i6396);
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
const Putt$View$field_ops$clo = { _0: ($_, rs, l, h) => Putt$View$field_ops(rs, l, h) };

function Arcade$Web$Glue$request_frame(cb) {
  return glue_request_frame$clo._0(glue_request_frame$clo, cb);
}
const Arcade$Web$Glue$request_frame$clo = { _0: ($_, cb) => Arcade$Web$Glue$request_frame(cb) };

function Arcade$Web$Glue$size_canvas(canvas, w, h, dpr) {
  {
    const $rc_2618 = glue_size_canvas$clo._0(glue_size_canvas$clo, canvas, w, h, dpr);
    return $rc_2618;
  }
}
const Arcade$Web$Glue$size_canvas$clo = { _0: ($_, canvas, w, h, dpr) => Arcade$Web$Glue$size_canvas(canvas, w, h, dpr) };

function Arcade$Web$Paint$evenodd(r) {
  switch (r.$) {
    case "RuleEvenOdd": {
      return true;
      break;
    }
    case "RuleNonZero": {
      return false;
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Web$Paint$evenodd$clo = { _0: ($_, r) => Arcade$Web$Paint$evenodd(r) };

function Arcade$Web$Paint$call(ctx, c) {
  switch (c.$) {
    case "CvSave": {
      {
        const ctx_i13883 = ctx;
        {
          const $rc_2467_i13884 = canvas_save$clo._0(canvas_save$clo, ctx);
          return $rc_2467_i13884;
        }
      }
      break;
    }
    case "CvRestore": {
      {
        const ctx_i13885 = ctx;
        {
          const $rc_2468_i13886 = canvas_restore$clo._0(canvas_restore$clo, ctx);
          return $rc_2468_i13886;
        }
      }
      break;
    }
    case "CvSetTransform": {
      const $f48154 = c._0;
      const $f48155 = c._1;
      const $f48156 = c._2;
      const $f48157 = c._3;
      const $f48158 = c._4;
      const $f48159 = c._5;
      {
        const f = $f48159;
        {
          const e = $f48158;
          {
            const d = $f48157;
            {
              const cc = $f48156;
              {
                const b = $f48155;
                {
                  const a = $f48154;
                  {
                    const ctx_i13887 = ctx;
                    {
                      const $rc_2607_i13894 = canvas2d_set_transform$clo._0(canvas2d_set_transform$clo, ctx, a, b, cc, d, e, f);
                      return $rc_2607_i13894;
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
    case "CvComposite": {
      const $f48180 = c._0;
      {
        const op = $f48180;
        {
          const ctx_i13895 = ctx;
          {
            const op_i13896 = op;
            {
              const $rc_2608_i13897 = canvas2d_composite$clo._0(canvas2d_composite$clo, ctx, op);
              return $rc_2608_i13897;
            }
          }
        }
      }
      break;
    }
    case "CvBeginPath": {
      {
        const ctx_i13898 = ctx;
        {
          const $rc_2480_i13899 = canvas_begin_path$clo._0(canvas_begin_path$clo, ctx);
          return $rc_2480_i13899;
        }
      }
      break;
    }
    case "CvMoveTo": {
      const $f48181 = c._0;
      const $f48182 = c._1;
      {
        const y = $f48182;
        {
          const x = $f48181;
          {
            const ctx_i13900 = ctx;
            {
              const $rc_2482_i13903 = canvas_move_to$clo._0(canvas_move_to$clo, ctx, x, y);
              return $rc_2482_i13903;
            }
          }
        }
      }
      break;
    }
    case "CvLineTo": {
      const $f48187 = c._0;
      const $f48188 = c._1;
      {
        const y = $f48188;
        {
          const x = $f48187;
          {
            const ctx_i13904 = ctx;
            {
              const $rc_2483_i13907 = canvas_line_to$clo._0(canvas_line_to$clo, ctx, x, y);
              return $rc_2483_i13907;
            }
          }
        }
      }
      break;
    }
    case "CvQuadTo": {
      const $f48193 = c._0;
      const $f48194 = c._1;
      const $f48195 = c._2;
      const $f48196 = c._3;
      {
        const y = $f48196;
        {
          const x = $f48195;
          {
            const b = $f48194;
            {
              const a = $f48193;
              {
                const ctx_i13908 = ctx;
                {
                  const $rc_2485_i13913 = canvas_quadratic_curve_to$clo._0(canvas_quadratic_curve_to$clo, ctx, a, b, x, y);
                  return $rc_2485_i13913;
                }
              }
            }
          }
        }
      }
      break;
    }
    case "CvCubicTo": {
      const $f48209 = c._0;
      const $f48210 = c._1;
      const $f48211 = c._2;
      const $f48212 = c._3;
      const $f48213 = c._4;
      const $f48214 = c._5;
      {
        const y = $f48214;
        {
          const x = $f48213;
          {
            const d = $f48212;
            {
              const cc = $f48211;
              {
                const b = $f48210;
                {
                  const a = $f48209;
                  {
                    const ctx_i13914 = ctx;
                    {
                      const $rc_2486_i13921 = canvas_bezier_curve_to$clo._0(canvas_bezier_curve_to$clo, ctx, a, b, cc, d, x, y);
                      return $rc_2486_i13921;
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
    case "CvClosePath": {
      {
        const ctx_i13922 = ctx;
        {
          const $rc_2481_i13923 = canvas_close_path$clo._0(canvas_close_path$clo, ctx);
          return $rc_2481_i13923;
        }
      }
      break;
    }
    case "CvArc": {
      const $f48235 = c._0;
      const $f48236 = c._1;
      const $f48237 = c._2;
      const $f48238 = c._3;
      {
        const sweep = $f48238;
        {
          const r = $f48237;
          {
            const y = $f48236;
            {
              const x = $f48235;
              {
                const ctx_i13924 = ctx;
                {
                  const $rc_2614_i13929 = canvas2d_arc_full$clo._0(canvas2d_arc_full$clo, ctx, x, y, r, sweep);
                  return $rc_2614_i13929;
                }
              }
            }
          }
        }
      }
      break;
    }
    case "CvFillStyle": {
      const $f48251 = c._0;
      {
        const css = $f48251;
        {
          const ctx_i13930 = ctx;
          {
            const color_i13931 = css;
            {
              const $rc_2472_i13932 = canvas_set_fill_style$clo._0(canvas_set_fill_style$clo, ctx, css);
              return $rc_2472_i13932;
            }
          }
        }
      }
      break;
    }
    case "CvRadialStyle": {
      const $f48252 = c._0;
      const $f48253 = c._1;
      const $f48254 = c._2;
      const $f48255 = c._3;
      const $f48256 = c._4;
      const $f48257 = c._5;
      const $f48258 = c._6;
      {
        const stops = $f48258;
        {
          const r1 = $f48257;
          {
            const y1 = $f48256;
            {
              const x1 = $f48255;
              {
                const r0 = $f48254;
                {
                  const y0 = $f48253;
                  {
                    const x0 = $f48252;
                    {
                      const ctx_i13933 = ctx;
                      {
                        let $eff;
                        {
                          const ctx_i16076 = ctx;
                          {
                            const $rc_2615_i16083 = canvas2d_radial$clo._0(canvas2d_radial$clo, ctx, x0, y0, r0, x1, y1, r1);
                            $eff = $rc_2615_i16083;
                          }
                        }
                      }
                      {
                        let $eff;
                        {
                          const $t48151_i13941 = { $: "$Clo_$lam0_Arcade_Web_Paint_radial$0_Arcade_Web_Paint_radial", _0: $lam0_Arcade_Web_Paint_radial$apply$0_Arcade_Web_Paint_radial };
                          {
                            const f_i6414_i13943 = $t48151_i13941;
                            {
                              const go_i6415_i13944 = { $: "$Clo_go$0_List_each_List_R_stop_at_Float_stop_css_String_Fn_R_stop_at_Float_stop_css_String_T_", _0: go$apply$0_List_each_List_R_stop_at_Float_stop_css_String_Fn_R_stop_at_Float_stop_css_String_T_, _1: f_i6414_i13943 };
                              $eff = go$apply$0_List_each_List_R_stop_at_Float_stop_css_String_Fn_R_stop_at_Float_stop_css_String_T_(go_i6415_i13944, stops);
                            }
                          }
                        }
                      }
                      {
                        const ctx_i16074 = ctx;
                        {
                          const $rc_2617_i16075 = canvas2d_fill_gradient$clo._0(canvas2d_fill_gradient$clo, ctx);
                          return $rc_2617_i16075;
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
    case "CvFill": {
      const $f48283 = c._0;
      {
        const r = $f48283;
        {
          let $t48152;
          {
            const $rc_2625 = Arcade$Web$Paint$evenodd(r);
            $t48152 = $rc_2625;
          }
          {
            const ctx_i13945 = ctx;
            {
              const $rc_2609_i13947 = canvas2d_fill_rule$clo._0(canvas2d_fill_rule$clo, ctx, $t48152);
              return $rc_2609_i13947;
            }
          }
        }
      }
      break;
    }
    case "CvClip": {
      const $f48284 = c._0;
      {
        const r = $f48284;
        {
          let $t48153;
          {
            const $rc_2626 = Arcade$Web$Paint$evenodd(r);
            $t48153 = $rc_2626;
          }
          {
            const ctx_i13948 = ctx;
            {
              const $rc_2610_i13950 = canvas2d_clip_rule$clo._0(canvas2d_clip_rule$clo, ctx, $t48153);
              return $rc_2610_i13950;
            }
          }
        }
      }
      break;
    }
    case "CvFillRect": {
      const $f48285 = c._0;
      const $f48286 = c._1;
      const $f48287 = c._2;
      const $f48288 = c._3;
      {
        const h = $f48288;
        {
          const w = $f48287;
          {
            const y = $f48286;
            {
              const x = $f48285;
              {
                const ctx_i13951 = ctx;
                {
                  const $rc_2478_i13956 = canvas_fill_rect$clo._0(canvas_fill_rect$clo, ctx, x, y, w, h);
                  return $rc_2478_i13956;
                }
              }
            }
          }
        }
      }
      break;
    }
    case "CvStrokeStyle": {
      const $f48301 = c._0;
      {
        const css = $f48301;
        {
          const ctx_i13957 = ctx;
          {
            const color_i13958 = css;
            {
              const $rc_2473_i13959 = canvas_set_stroke_style$clo._0(canvas_set_stroke_style$clo, ctx, css);
              return $rc_2473_i13959;
            }
          }
        }
      }
      break;
    }
    case "CvLineWidth": {
      const $f48302 = c._0;
      {
        const w = $f48302;
        {
          const ctx_i13960 = ctx;
          {
            const $rc_2474_i13962 = canvas_set_line_width$clo._0(canvas_set_line_width$clo, ctx, w);
            return $rc_2474_i13962;
          }
        }
      }
      break;
    }
    case "CvLineCap": {
      const $f48303 = c._0;
      {
        const cap = $f48303;
        {
          const ctx_i13963 = ctx;
          {
            const cap_i13964 = cap;
            {
              const $rc_2611_i13965 = canvas2d_line_cap$clo._0(canvas2d_line_cap$clo, ctx, cap);
              return $rc_2611_i13965;
            }
          }
        }
      }
      break;
    }
    case "CvLineJoin": {
      const $f48304 = c._0;
      {
        const join = $f48304;
        {
          const ctx_i13966 = ctx;
          {
            const join_i13967 = join;
            {
              const $rc_2612_i13968 = canvas2d_line_join$clo._0(canvas2d_line_join$clo, ctx, join);
              return $rc_2612_i13968;
            }
          }
        }
      }
      break;
    }
    case "CvStroke": {
      {
        const ctx_i13969 = ctx;
        {
          const $rc_2488_i13970 = canvas_stroke$clo._0(canvas_stroke$clo, ctx);
          return $rc_2488_i13970;
        }
      }
      break;
    }
    case "CvFont": {
      const $f48305 = c._0;
      {
        const font = $f48305;
        {
          const ctx_i13971 = ctx;
          {
            const font_i13972 = font;
            {
              const $rc_2476_i13973 = canvas_set_font$clo._0(canvas_set_font$clo, ctx, font);
              return $rc_2476_i13973;
            }
          }
        }
      }
      break;
    }
    case "CvTextCentred": {
      {
        const ctx_i13974 = ctx;
        {
          const $rc_2613_i13975 = canvas2d_text_centred$clo._0(canvas2d_text_centred$clo, ctx);
          return $rc_2613_i13975;
        }
      }
      break;
    }
    case "CvFillText": {
      const $f48306 = c._0;
      const $f48307 = c._1;
      const $f48308 = c._2;
      {
        const y = $f48308;
        {
          const x = $f48307;
          {
            const words = $f48306;
            {
              const ctx_i13976 = ctx;
              {
                const text_i13977 = words;
                {
                  const $rc_2490_i13980 = canvas_fill_text$clo._0(canvas_fill_text$clo, ctx, words, x, y);
                  return $rc_2490_i13980;
                }
              }
            }
          }
        }
      }
      break;
    }
    case "CvStrokeText": {
      const $f48317 = c._0;
      const $f48318 = c._1;
      const $f48319 = c._2;
      {
        const y = $f48319;
        {
          const x = $f48318;
          {
            const words = $f48317;
            {
              const ctx_i13981 = ctx;
              {
                const text_i13982 = words;
                {
                  const $rc_2491_i13985 = canvas_stroke_text$clo._0(canvas_stroke_text$clo, ctx, words, x, y);
                  return $rc_2491_i13985;
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
const Arcade$Web$Paint$call$clo = { _0: ($_, ctx, c) => Arcade$Web$Paint$call(ctx, c) };

function Arcade$Web$Runtime$mark(pair) {
  {
    const $p48349 = pair;
    {
      const name = pair._0;
      {
        const value = pair._1;
        {
          const name_i13986 = name;
          {
            const value_i13987 = value;
            {
              const $rc_2619_i13988 = glue_mark$clo._0(glue_mark$clo, name, value);
              return $rc_2619_i13988;
            }
          }
        }
      }
    }
  }
}
const Arcade$Web$Runtime$mark$clo = { _0: ($_, pair) => Arcade$Web$Runtime$mark(pair) };

function Arcade$Web$Runtime$element(id, tag) {
  {
    let $t48370;
    {
      const id_i13998 = id;
      {
        const $rc_2420_i13999 = dom_get_element_by_id$clo._0(dom_get_element_by_id$clo, id);
        $t48370 = $rc_2420_i13999;
      }
    }
    switch ($t48370.$) {
      case "Some": {
        const $f48372 = $t48370._0;
        {
          const node = $f48372;
          return node;
        }
        break;
      }
      case "None": {
        {
          let node;
          {
            const tag_i13996 = tag;
            {
              const $rc_2423_i13997 = dom_create_element$clo._0(dom_create_element$clo, tag);
              node = $rc_2423_i13997;
            }
          }
          {
            let $eff;
            {
              const el_i13992 = node;
              {
                const name_i13993 = "id";
                {
                  const val_i13994 = id;
                  {
                    const $rc_2440_i13995 = dom_set_attribute$clo._0(dom_set_attribute$clo, node, "id", id);
                    $eff = $rc_2440_i13995;
                  }
                }
              }
            }
          }
          {
            let $eff;
            {
              const $t48371 = dom_body();
              {
                const parent_i13989 = $t48371;
                {
                  const child_i13990 = node;
                  {
                    const $rc_2426_i13991 = dom_append_child$clo._0(dom_append_child$clo, $t48371, node);
                    $eff = $rc_2426_i13991;
                  }
                }
              }
            }
          }
          return node;
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Arcade$Web$Runtime$element$clo = { _0: ($_, id, tag) => Arcade$Web$Runtime$element(id, tag) };

function Arcade$Num$ieee_div(n, a, b) {
  {
    const $t48422 = (b !== 0.);
    if ($t48422 === true) {
      return (a / b);
    } else {
      {
        let $t48425;
        {
          const $t48423 = (a === 0.);
          {
            const $t48424 = (a !== a);
            $t48425 = ($t48423 || $t48424);
          }
        }
        if ($t48425 === true) {
          {
            const $rc_2629 = n.nan;
            return $rc_2629;
          }
        } else {
          {
            let $t48428;
            {
              let $t48426;
              {
                const $t48419_i6436 = (a === 0.);
                if ($t48419_i6436 === true) {
                  {
                    let $t48421_i6438;
                    {
                      const $t48420_i6437 = (-1.);
                      $t48421_i6438 = Math.atan2(a, $t48420_i6437);
                    }
                    $t48426 = ($t48421_i6438 < 0.);
                  }
                } else {
                  $t48426 = (a < 0.);
                }
              }
              {
                let $t48427;
                {
                  const $t48419_i6432 = (b === 0.);
                  if ($t48419_i6432 === true) {
                    {
                      let $t48421_i6434;
                      {
                        const $t48420_i6433 = (-1.);
                        $t48421_i6434 = Math.atan2(b, $t48420_i6433);
                      }
                      $t48427 = ($t48421_i6434 < 0.);
                    }
                  } else {
                    $t48427 = (b < 0.);
                  }
                }
                $t48428 = ($t48426 === $t48427);
              }
            }
            if ($t48428 === true) {
              {
                const $rc_2628 = n.infinity;
                return $rc_2628;
              }
            } else {
              {
                const $t48429 = n.infinity;
                return (-$t48429);
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Num$ieee_div$clo = { _0: ($_, n, a, b) => Arcade$Num$ieee_div(n, a, b) };

function Arcade$Vec3$sub(a, b) {
  {
    let $t48443;
    {
      const $t48441 = a.x;
      {
        const $t48442 = b.x;
        $t48443 = ($t48441 - $t48442);
      }
    }
    {
      let $t48446;
      {
        const $t48444 = a.y;
        {
          const $t48445 = b.y;
          $t48446 = ($t48444 - $t48445);
        }
      }
      {
        let $t48449;
        {
          const $t48447 = a.z;
          {
            const $t48448 = b.z;
            $t48449 = ($t48447 - $t48448);
          }
        }
        return ({ x: $t48443, y: $t48446, z: $t48449 });
      }
    }
  }
}
const Arcade$Vec3$sub$clo = { _0: ($_, a, b) => Arcade$Vec3$sub(a, b) };

function Arcade$Vec3$dot(a, b) {
  {
    let $t48462;
    {
      let $t48458;
      {
        const $t48456 = a.x;
        {
          const $t48457 = b.x;
          $t48458 = ($t48456 * $t48457);
        }
      }
      {
        let $t48461;
        {
          const $t48459 = a.y;
          {
            const $t48460 = b.y;
            $t48461 = ($t48459 * $t48460);
          }
        }
        $t48462 = ($t48458 + $t48461);
      }
    }
    {
      let $t48465;
      {
        const $t48463 = a.z;
        {
          const $t48464 = b.z;
          $t48465 = ($t48463 * $t48464);
        }
      }
      return ($t48462 + $t48465);
    }
  }
}
const Arcade$Vec3$dot$clo = { _0: ($_, a, b) => Arcade$Vec3$dot(a, b) };

function Arcade$Vec3$cross(a, b) {
  {
    let $t48472;
    {
      let $t48468;
      {
        const $t48466 = a.y;
        {
          const $t48467 = b.z;
          $t48468 = ($t48466 * $t48467);
        }
      }
      {
        let $t48471;
        {
          const $t48469 = a.z;
          {
            const $t48470 = b.y;
            $t48471 = ($t48469 * $t48470);
          }
        }
        $t48472 = ($t48468 - $t48471);
      }
    }
    {
      let $t48479;
      {
        let $t48475;
        {
          const $t48473 = a.z;
          {
            const $t48474 = b.x;
            $t48475 = ($t48473 * $t48474);
          }
        }
        {
          let $t48478;
          {
            const $t48476 = a.x;
            {
              const $t48477 = b.z;
              $t48478 = ($t48476 * $t48477);
            }
          }
          $t48479 = ($t48475 - $t48478);
        }
      }
      {
        let $t48486;
        {
          let $t48482;
          {
            const $t48480 = a.x;
            {
              const $t48481 = b.y;
              $t48482 = ($t48480 * $t48481);
            }
          }
          {
            let $t48485;
            {
              const $t48483 = a.y;
              {
                const $t48484 = b.x;
                $t48485 = ($t48483 * $t48484);
              }
            }
            $t48486 = ($t48482 - $t48485);
          }
        }
        return ({ x: $t48472, y: $t48479, z: $t48486 });
      }
    }
  }
}
const Arcade$Vec3$cross$clo = { _0: ($_, a, b) => Arcade$Vec3$cross(a, b) };

function Arcade$Vec3$normalized(a) {
  {
    let l;
    {
      const a_i14000 = a;
      {
        let $t48487_i14001;
        $t48487_i14001 = Arcade$Vec3$dot(a, a);
        l = Math.sqrt($t48487_i14001);
      }
    }
    {
      const $t48488 = (l === 0.);
      if ($t48488 === true) {
        return a;
      } else {
        {
          const $t48489 = (1. / l);
          {
            const a_i16084 = a;
            {
              let $t48451_i16087;
              {
                const $t48450_i16086 = a.x;
                $t48451_i16087 = ($t48450_i16086 * $t48489);
              }
              {
                let $t48453_i16089;
                {
                  const $t48452_i16088 = a.y;
                  $t48453_i16089 = ($t48452_i16088 * $t48489);
                }
                {
                  let $t48455_i16091;
                  {
                    const $t48454_i16090 = a.z;
                    $t48455_i16091 = ($t48454_i16090 * $t48489);
                  }
                  return ({ x: $t48451_i16087, y: $t48453_i16089, z: $t48455_i16091 });
                }
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Vec3$normalized$clo = { _0: ($_, a) => Arcade$Vec3$normalized(a) };

function Arcade$Camera$projection(n, rig, v) {
  {
    let $p48518;
    {
      const $t48509 = rig.pose;
      {
        const p_i14015 = $t48509;
        {
          let f_i14019;
          {
            let $t48505_i14018;
            {
              const $t48503_i14016 = $t48509.target;
              {
                const $t48504_i14017 = $t48509.eye;
                $t48505_i14018 = Arcade$Vec3$sub($t48503_i14016, $t48504_i14017);
              }
            }
            f_i14019 = Arcade$Vec3$normalized($t48505_i14018);
          }
          {
            let r_i14022;
            {
              let $t48507_i14021;
              {
                const $t48506_i14020 = $t48509.up;
                $t48507_i14021 = Arcade$Vec3$cross(f_i14019, $t48506_i14020);
              }
              r_i14022 = Arcade$Vec3$normalized($t48507_i14021);
            }
            {
              let $t48508_i14023;
              $t48508_i14023 = Arcade$Vec3$cross(r_i14022, f_i14019);
              $p48518 = { _0: f_i14019, _1: r_i14022, _2: $t48508_i14023 };
            }
          }
        }
      }
    }
    {
      const f = $p48518._0;
      {
        const r = $p48518._1;
        {
          const u = $p48518._2;
          {
            let $t48511;
            {
              const $t48510 = rig.pose;
              $t48511 = $t48510.eye;
            }
            {
              const $t48512 = rig.lens;
              {
                let $t48514;
                {
                  const $t48513 = rig.lens;
                  {
                    const n_i14009 = n;
                    {
                      const lens_i14010 = $t48513;
                      switch (lens_i14010.$) {
                        case "Perspective": {
                          const $f48501_i14011 = lens_i14010._0;
                          {
                            const fov_i14012 = $f48501_i14011;
                            {
                              const n_i16095 = n;
                              {
                                let $t48500_i16099;
                                {
                                  let $t48499_i16098;
                                  {
                                    const $t48498_i16097 = n.pi;
                                    $t48499_i16098 = (fov_i14012 * $t48498_i16097);
                                  }
                                  $t48500_i16099 = ($t48499_i16098 / 360.);
                                }
                                $t48514 = Math.tan($t48500_i16099);
                              }
                            }
                          }
                          break;
                        }
                        case "Orthographic": {
                          const $f48502_i14013 = lens_i14010._0;
                          {
                            const extent_i14014 = $f48502_i14013;
                            $t48514 = (extent_i14014 / 2.);
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
                  let $t48515;
                  {
                    const v_i16092 = v;
                    {
                      const $t48493_i16093 = v.width;
                      {
                        const $t48494_i16094 = v.height;
                        $t48515 = ($t48493_i16093 / $t48494_i16094);
                      }
                    }
                  }
                  {
                    const $t48516 = v.width;
                    {
                      const $t48517 = v.height;
                      {
                        const $rc_2631 = ({ eye: $t48511, forward: f, right: r, up: u, lens: $t48512, half: $t48514, aspect: $t48515, width: $t48516, height: $t48517 });
                        return $rc_2631;
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
const Arcade$Camera$projection$clo = { _0: ($_, n, rig, v) => Arcade$Camera$projection(n, rig, v) };

function Arcade$Camera$fraction_of_seen(n, l, s) {
  {
    const $t48526 = l.lens;
    switch ($t48526.$) {
      case "Perspective": {
        const $f48551 = $t48526._0;
        {
          let x;
          {
            let $t48534;
            {
              let $t48533;
              {
                const $t48527 = s.across;
                {
                  let $t48532;
                  {
                    let $t48530;
                    {
                      const $t48528 = s.depth;
                      {
                        const $t48529 = l.half;
                        $t48530 = ($t48528 * $t48529);
                      }
                    }
                    {
                      const $t48531 = l.aspect;
                      $t48532 = ($t48530 * $t48531);
                    }
                  }
                  $t48533 = Arcade$Num$ieee_div(n, $t48527, $t48532);
                }
              }
              $t48534 = ($t48533 + 1.);
            }
            x = ($t48534 / 2.);
          }
          {
            let y;
            {
              let $t48540;
              {
                let $t48539;
                {
                  const $t48535 = s.rise;
                  {
                    let $t48538;
                    {
                      const $t48536 = s.depth;
                      {
                        const $t48537 = l.half;
                        $t48538 = ($t48536 * $t48537);
                      }
                    }
                    $t48539 = Arcade$Num$ieee_div(n, $t48535, $t48538);
                  }
                }
                $t48540 = (1. - $t48539);
              }
              y = ($t48540 / 2.);
            }
            return ({ x: x, y: y });
          }
        }
        break;
      }
      case "Orthographic": {
        const $f48552 = $t48526._0;
        {
          let x;
          {
            let $t48546;
            {
              let $t48545;
              {
                const $t48541 = s.across;
                {
                  let $t48544;
                  {
                    const $t48542 = l.half;
                    {
                      const $t48543 = l.aspect;
                      $t48544 = ($t48542 * $t48543);
                    }
                  }
                  $t48545 = Arcade$Num$ieee_div(n, $t48541, $t48544);
                }
              }
              $t48546 = ($t48545 + 1.);
            }
            x = ($t48546 / 2.);
          }
          {
            let y;
            {
              let $t48550;
              {
                let $t48549;
                {
                  const $t48547 = s.rise;
                  {
                    const $t48548 = l.half;
                    $t48549 = Arcade$Num$ieee_div(n, $t48547, $t48548);
                  }
                }
                $t48550 = (1. - $t48549);
              }
              y = ($t48550 / 2.);
            }
            return ({ x: x, y: y });
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
const Arcade$Camera$fraction_of_seen$clo = { _0: ($_, n, l, s) => Arcade$Camera$fraction_of_seen(n, l, s) };

function Arcade$Camera$pixels_per_metre(l, depth) {
  {
    const $t48561 = l.lens;
    switch ($t48561.$) {
      case "Perspective": {
        const $f48570 = $t48561._0;
        {
          const $t48562 = (depth <= 0.);
          if ($t48562 === true) {
            return 0.;
          } else {
            {
              const $t48563 = l.height;
              {
                let $t48566;
                {
                  let $t48565;
                  {
                    const $t48564 = l.half;
                    $t48565 = (2. * $t48564);
                  }
                  $t48566 = ($t48565 * depth);
                }
                return ($t48563 / $t48566);
              }
            }
          }
        }
        break;
      }
      case "Orthographic": {
        const $f48571 = $t48561._0;
        {
          const $t48567 = l.height;
          {
            let $t48569;
            {
              const $t48568 = l.half;
              $t48569 = (2. * $t48568);
            }
            return ($t48567 / $t48569);
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
const Arcade$Camera$pixels_per_metre$clo = { _0: ($_, l, depth) => Arcade$Camera$pixels_per_metre(l, depth) };

function Arcade$Canvas$close_clips($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const rev = $tco_a0;
    const n = $tco_a1;
    {
      const $t48642 = (n <= 0);
      if ($t48642 === true) {
        return rev;
      } else {
        {
          const $t48643 = { $: "CvRestore" };
          {
            const $t48644 = { $: "Cons", _0: $t48643, _1: rev };
            {
              const $t48645 = ((n - 1) < 4611686018427387904 && (n - 1) >= -4611686018427387904 ? (n - 1) : march_int_ovf((n - 1), 1));
              {
                $tco_a0 = $t48644;
                $tco_a1 = $t48645;
                continue __tco;
              }
            }
          }
        }
      }
    }
    return undefined;
  }
}
const Arcade$Canvas$close_clips$clo = { _0: ($_, rev, n) => Arcade$Canvas$close_clips(rev, n) };

function Arcade$Canvas$push(p, c) {
  {
    const $t48646 = p.rev;
    {
      let $t48647;
      $t48647 = { $: "Cons", _0: c, _1: $t48646 };
      {
        const $rc_2632 = ({ ...p, rev: $t48647 });
        return $rc_2632;
      }
    }
  }
}
const Arcade$Canvas$push$clo = { _0: ($_, p, c) => Arcade$Canvas$push(p, c) };

function Arcade$Canvas$paint_op(p, op) {
  switch (op.$) {
    case "ClearTo": {
      const $f48682 = op._0;
      {
        const c = $f48682;
        {
          const $t48648 = { $: "CvComposite", _0: "source-over" };
          {
            let $t48650;
            {
              const $t48649 = Arcade$Draw$css(c);
              $t48650 = { $: "CvFillStyle", _0: $t48649 };
            }
            {
              let $t48653;
              {
                const $t48651 = p.view_w;
                {
                  const $t48652 = p.view_h;
                  $t48653 = { $: "CvFillRect", _0: 0., _1: 0., _2: $t48651, _3: $t48652 };
                }
              }
              {
                const $t48654 = { $: "Nil" };
                {
                  const $t48655 = { $: "Cons", _0: $t48653, _1: $t48654 };
                  {
                    const $t48656 = { $: "Cons", _0: $t48650, _1: $t48655 };
                    {
                      const $t48657 = { $: "Cons", _0: $t48648, _1: $t48656 };
                      return List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48657, p, Arcade$Canvas$push$clo);
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
    case "FillShape": {
      const $f48683 = op._0;
      const $f48684 = op._1;
      const $f48685 = op._2;
      {
        const b = $f48685;
        {
          const paint = $f48684;
          {
            const sh = $f48683;
            {
              let $t48661;
              {
                let $t48658;
                $t48658 = Arcade$Canvas$path(p, sh);
                {
                  let $t48660;
                  {
                    let $t48659;
                    {
                      const $rc_2634 = Arcade$Canvas$blend(b);
                      $t48659 = $rc_2634;
                    }
                    $t48660 = { $: "CvComposite", _0: $t48659 };
                  }
                  $t48661 = Arcade$Canvas$push($t48658, $t48660);
                }
              }
              {
                const $rc_2633 = Arcade$Canvas$fill($t48661, sh, paint);
                return $rc_2633;
              }
            }
          }
        }
      }
      break;
    }
    case "StrokeShape": {
      const $f48694 = op._0;
      const $f48695 = op._1;
      const $f48696 = op._2;
      {
        const b = $f48696;
        {
          const pen = $f48695;
          {
            const sh = $f48694;
            {
              let $t48665;
              {
                const $t48662 = Arcade$Canvas$path(p, sh);
                {
                  let $t48664;
                  {
                    let $t48663;
                    {
                      const $rc_2635 = Arcade$Canvas$blend(b);
                      $t48663 = $rc_2635;
                    }
                    $t48664 = { $: "CvComposite", _0: $t48663 };
                  }
                  $t48665 = Arcade$Canvas$push($t48662, $t48664);
                }
              }
              return Arcade$Canvas$stroke($t48665, pen);
            }
          }
        }
      }
      break;
    }
    case "DrawText": {
      const $f48705 = op._0;
      {
        const t = $f48705;
        {
          let $t48667;
          {
            const $t48666 = { $: "CvComposite", _0: "source-over" };
            $t48667 = Arcade$Canvas$push(p, $t48666);
          }
          return Arcade$Canvas$letter($t48667, t);
        }
      }
      break;
    }
    case "PushClip": {
      const $f48706 = op._0;
      {
        const sh = $f48706;
        {
          let clipped;
          {
            let $t48670;
            {
              let $t48669;
              {
                const $t48668 = { $: "CvSave" };
                $t48669 = Arcade$Canvas$push(p, $t48668);
              }
              $t48670 = Arcade$Canvas$path($t48669, sh);
            }
            {
              let $t48672;
              {
                let $t48671;
                {
                  const $rc_2638 = Arcade$Canvas$rule(sh);
                  $t48671 = $rc_2638;
                }
                $t48672 = { $: "CvClip", _0: $t48671 };
              }
              clipped = Arcade$Canvas$push($t48670, $t48672);
            }
          }
          {
            let $t48674;
            {
              const $t48673 = clipped.open_clips;
              $t48674 = (($t48673 + 1) < 4611686018427387904 && ($t48673 + 1) >= -4611686018427387904 ? ($t48673 + 1) : march_int_ovf(($t48673 + 1), 0));
            }
            {
              const $rc_2637 = ({ ...clipped, open_clips: $t48674 });
              return $rc_2637;
            }
          }
        }
      }
      break;
    }
    case "PopClip": {
      {
        let $t48676;
        {
          const $t48675 = p.open_clips;
          $t48676 = ($t48675 > 0);
        }
        if ($t48676 === true) {
          {
            const $t48677 = { $: "CvRestore" };
            {
              const $t48678 = p.rev;
              {
                let $t48679;
                $t48679 = { $: "Cons", _0: $t48677, _1: $t48678 };
                {
                  let $t48681;
                  {
                    const $t48680 = p.open_clips;
                    $t48681 = (($t48680 - 1) < 4611686018427387904 && ($t48680 - 1) >= -4611686018427387904 ? ($t48680 - 1) : march_int_ovf(($t48680 - 1), 1));
                  }
                  {
                    const $rc_2639 = ({ ...p, rev: $t48679, open_clips: $t48681 });
                    return $rc_2639;
                  }
                }
              }
            }
          }
        } else {
          return p;
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Canvas$paint_op$clo = { _0: ($_, p, op) => Arcade$Canvas$paint_op(p, op) };

function Arcade$Canvas$blend(b) {
  switch (b.$) {
    case "Over": {
      return "source-over";
      break;
    }
    case "Lighter": {
      return "lighter";
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Canvas$blend$clo = { _0: ($_, b) => Arcade$Canvas$blend(b) };

function Arcade$Canvas$rule(sh) {
  switch (sh.$) {
    case "Holed": {
      const $f48707 = sh._0;
      const $f48708 = sh._1;
      return { $: "RuleEvenOdd" };
      break;
    }
    case "Poly": {
      const $f48713 = sh._0;
      return { $: "RuleNonZero" };
      break;
    }
    case "Polys": {
      const $f48714 = sh._0;
      return { $: "RuleNonZero" };
      break;
    }
    case "Disc": {
      const $f48715 = sh._0;
      const $f48716 = sh._1;
      return { $: "RuleNonZero" };
      break;
    }
    case "Outline": {
      const $f48721 = sh._0;
      return { $: "RuleNonZero" };
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Canvas$rule$clo = { _0: ($_, sh) => Arcade$Canvas$rule(sh) };

function Arcade$Canvas$path(p, sh) {
  {
    let begun;
    {
      const $t48722 = { $: "CvBeginPath" };
      begun = Arcade$Canvas$push(p, $t48722);
    }
    switch (sh.$) {
      case "Poly": {
        const $f48729 = sh._0;
        {
          const ps = $f48729;
          return Arcade$Canvas$ring(begun, ps);
        }
        break;
      }
      case "Holed": {
        const $f48730 = sh._0;
        const $f48731 = sh._1;
        {
          const inner = $f48731;
          {
            const outer = $f48730;
            {
              const $t48723 = Arcade$Canvas$ring(begun, outer);
              return Arcade$Canvas$ring($t48723, inner);
            }
          }
        }
        break;
      }
      case "Polys": {
        const $f48736 = sh._0;
        {
          const rings = $f48736;
          return List$fold_left$List_List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_List_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(rings, begun, Arcade$Canvas$ring$clo);
        }
        break;
      }
      case "Disc": {
        const $f48737 = sh._0;
        const $f48738 = sh._1;
        {
          const r = $f48738;
          {
            const c = $f48737;
            {
              let $t48728;
              {
                const $t48724 = c.x;
                {
                  const $t48725 = c.y;
                  {
                    let $t48726;
                    {
                      const $t48415_i6478 = (r >= 0.);
                      if ($t48415_i6478 === true) {
                        $t48726 = r;
                      } else {
                        $t48726 = 0.;
                      }
                    }
                    {
                      const $t48727 = p.sweep;
                      $t48728 = { $: "CvArc", _0: $t48724, _1: $t48725, _2: $t48726, _3: $t48727 };
                    }
                  }
                }
              }
              return Arcade$Canvas$push(begun, $t48728);
            }
          }
        }
        break;
      }
      case "Outline": {
        const $f48743 = sh._0;
        {
          const steps = $f48743;
          return List$fold_left$List_PathStep$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_PathStep_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(steps, begun, Arcade$Canvas$path_step$clo);
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Arcade$Canvas$path$clo = { _0: ($_, p, sh) => Arcade$Canvas$path(p, sh) };

function Arcade$Canvas$ring(p, ps) {
  switch (ps.$) {
    case "Nil": {
      return p;
      break;
    }
    case "Cons": {
      const $f48749 = ps._0;
      const $f48750 = ps._1;
      {
        const rest = $f48750;
        {
          const first = $f48749;
          {
            let started;
            {
              let $t48746;
              {
                const $t48744 = first.x;
                {
                  const $t48745 = first.y;
                  $t48746 = { $: "CvMoveTo", _0: $t48744, _1: $t48745 };
                }
              }
              started = Arcade$Canvas$push(p, $t48746);
            }
            {
              const $t48747 = List$fold_left$List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(rest, started, Arcade$Canvas$line_to$clo);
              {
                const $t48748 = { $: "CvClosePath" };
                return Arcade$Canvas$push($t48747, $t48748);
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
const Arcade$Canvas$ring$clo = { _0: ($_, p, ps) => Arcade$Canvas$ring(p, ps) };

function Arcade$Canvas$line_to(p, v) {
  {
    let $t48757;
    {
      const $t48755 = v.x;
      {
        const $t48756 = v.y;
        $t48757 = { $: "CvLineTo", _0: $t48755, _1: $t48756 };
      }
    }
    return Arcade$Canvas$push(p, $t48757);
  }
}
const Arcade$Canvas$line_to$clo = { _0: ($_, p, v) => Arcade$Canvas$line_to(p, v) };

function Arcade$Canvas$path_step(p, s) {
  switch (s.$) {
    case "MoveTo": {
      const $f48777 = s._0;
      {
        const a = $f48777;
        {
          let $t48760;
          {
            const $t48758 = a.x;
            {
              const $t48759 = a.y;
              $t48760 = { $: "CvMoveTo", _0: $t48758, _1: $t48759 };
            }
          }
          return Arcade$Canvas$push(p, $t48760);
        }
      }
      break;
    }
    case "LineTo": {
      const $f48778 = s._0;
      {
        const a = $f48778;
        {
          let $t48763;
          {
            const $t48761 = a.x;
            {
              const $t48762 = a.y;
              $t48763 = { $: "CvLineTo", _0: $t48761, _1: $t48762 };
            }
          }
          return Arcade$Canvas$push(p, $t48763);
        }
      }
      break;
    }
    case "QuadTo": {
      const $f48779 = s._0;
      const $f48780 = s._1;
      {
        const b = $f48780;
        {
          const a = $f48779;
          {
            let $t48768;
            {
              const $t48764 = a.x;
              {
                const $t48765 = a.y;
                {
                  const $t48766 = b.x;
                  {
                    const $t48767 = b.y;
                    $t48768 = { $: "CvQuadTo", _0: $t48764, _1: $t48765, _2: $t48766, _3: $t48767 };
                  }
                }
              }
            }
            return Arcade$Canvas$push(p, $t48768);
          }
        }
      }
      break;
    }
    case "CubicTo": {
      const $f48785 = s._0;
      const $f48786 = s._1;
      const $f48787 = s._2;
      {
        const c = $f48787;
        {
          const b = $f48786;
          {
            const a = $f48785;
            {
              let $t48775;
              {
                const $t48769 = a.x;
                {
                  const $t48770 = a.y;
                  {
                    const $t48771 = b.x;
                    {
                      const $t48772 = b.y;
                      {
                        const $t48773 = c.x;
                        {
                          const $t48774 = c.y;
                          $t48775 = { $: "CvCubicTo", _0: $t48769, _1: $t48770, _2: $t48771, _3: $t48772, _4: $t48773, _5: $t48774 };
                        }
                      }
                    }
                  }
                }
              }
              return Arcade$Canvas$push(p, $t48775);
            }
          }
        }
      }
      break;
    }
    case "ClosePath": {
      {
        const $t48776 = { $: "CvClosePath" };
        return Arcade$Canvas$push(p, $t48776);
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Canvas$path_step$clo = { _0: ($_, p, s) => Arcade$Canvas$path_step(p, s) };

function Arcade$Canvas$fill(p, sh, paint) {
  switch (paint.$) {
    case "Flat": {
      const $f48828 = paint._0;
      {
        const c = $f48828;
        {
          let $t48797;
          {
            const $t48796 = Arcade$Draw$css(c);
            $t48797 = { $: "CvFillStyle", _0: $t48796 };
          }
          {
            let $t48799;
            {
              const $t48798 = Arcade$Canvas$rule(sh);
              $t48799 = { $: "CvFill", _0: $t48798 };
            }
            {
              const $t48800 = { $: "Nil" };
              {
                const $t48801 = { $: "Cons", _0: $t48799, _1: $t48800 };
                {
                  const $t48802 = { $: "Cons", _0: $t48797, _1: $t48801 };
                  return List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48802, p, Arcade$Canvas$push$clo);
                }
              }
            }
          }
        }
      }
      break;
    }
    case "RadialPaint": {
      const $f48829 = paint._0;
      {
        const g = $f48829;
        {
          let framed;
          {
            let $t48804;
            {
              const $t48803 = { $: "CvSave" };
              $t48804 = Arcade$Canvas$push(p, $t48803);
            }
            {
              let $t48807;
              {
                const $t48805 = p.dpr;
                {
                  const $t48806 = g.frame;
                  $t48807 = Arcade$Canvas$framed_by($t48805, $t48806);
                }
              }
              framed = Arcade$Canvas$push($t48804, $t48807);
            }
          }
          {
            let $t48820;
            {
              let $t48809;
              {
                const $t48808 = g.inner;
                $t48809 = $t48808.x;
              }
              {
                let $t48811;
                {
                  const $t48810 = g.inner;
                  $t48811 = $t48810.y;
                }
                {
                  const $t48812 = g.inner_radius;
                  {
                    let $t48814;
                    {
                      const $t48813 = g.outer;
                      $t48814 = $t48813.x;
                    }
                    {
                      let $t48816;
                      {
                        const $t48815 = g.outer;
                        $t48816 = $t48815.y;
                      }
                      {
                        const $t48817 = g.outer_radius;
                        {
                          const $t48818 = g.stops;
                          {
                            let $t48819;
                            {
                              const xs_i14036 = $t48818;
                              {
                                const f_i14037 = Arcade$Canvas$colour_stop$clo;
                                switch (xs_i14036.$) {
                                  case "Nil": {
                                    $t48819 = { $: "Nil" };
                                    break;
                                  }
                                  case "Cons": {
                                    const $f1112_i14038 = xs_i14036._0;
                                    const $f1113_i14039 = xs_i14036._1;
                                    {
                                      const t_i14040 = $f1113_i14039;
                                      {
                                        const h_i14041 = $f1112_i14038;
                                        {
                                          let $t1110_i14042;
                                          $t1110_i14042 = f_i14037._0(f_i14037, h_i14041);
                                          {
                                            const $trmc15_i14043 = { $: "Cons", _0: $t1110_i14042, _1: null };
                                            List$map$dps$List_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float$Fn_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float_R_stop_at_Float_stop_css_String$List_R_stop_at_Float_stop_css_String(t_i14040, f_i14037, $trmc15_i14043);
                                            $t48819 = $trmc15_i14043;
                                          }
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
                            $t48820 = { $: "CvRadialStyle", _0: $t48809, _1: $t48811, _2: $t48812, _3: $t48814, _4: $t48816, _5: $t48817, _6: $t48819 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            {
              let $t48822;
              {
                const $t48821 = Arcade$Canvas$rule(sh);
                $t48822 = { $: "CvFill", _0: $t48821 };
              }
              {
                const $t48823 = { $: "CvRestore" };
                {
                  const $t48824 = { $: "Nil" };
                  {
                    const $t48825 = { $: "Cons", _0: $t48823, _1: $t48824 };
                    {
                      const $t48826 = { $: "Cons", _0: $t48822, _1: $t48825 };
                      {
                        const $t48827 = { $: "Cons", _0: $t48820, _1: $t48826 };
                        return List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48827, framed, Arcade$Canvas$push$clo);
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
const Arcade$Canvas$fill$clo = { _0: ($_, p, sh, paint) => Arcade$Canvas$fill(p, sh, paint) };

function Arcade$Canvas$colour_stop(s) {
  {
    const $t48830 = s.offset;
    {
      let $t48832;
      {
        const $t48831 = s.colour;
        $t48832 = Arcade$Draw$css($t48831);
      }
      return ({ stop_at: $t48830, stop_css: $t48832 });
    }
  }
}
const Arcade$Canvas$colour_stop$clo = { _0: ($_, s) => Arcade$Canvas$colour_stop(s) };

function Arcade$Canvas$framed_by(dpr, f) {
  {
    let $t48834;
    {
      const $t48833 = f.a;
      $t48834 = (dpr * $t48833);
    }
    {
      let $t48836;
      {
        const $t48835 = f.b;
        $t48836 = (dpr * $t48835);
      }
      {
        let $t48838;
        {
          const $t48837 = f.c;
          $t48838 = (dpr * $t48837);
        }
        {
          let $t48840;
          {
            const $t48839 = f.d;
            $t48840 = (dpr * $t48839);
          }
          {
            let $t48842;
            {
              const $t48841 = f.e;
              $t48842 = (dpr * $t48841);
            }
            {
              let $t48844;
              {
                const $t48843 = f.f;
                $t48844 = (dpr * $t48843);
              }
              return { $: "CvSetTransform", _0: $t48834, _1: $t48836, _2: $t48838, _3: $t48840, _4: $t48842, _5: $t48844 };
            }
          }
        }
      }
    }
  }
}
const Arcade$Canvas$framed_by$clo = { _0: ($_, dpr, f) => Arcade$Canvas$framed_by(dpr, f) };

function Arcade$Canvas$stroke(p, pen) {
  {
    let $t48847;
    {
      let $t48846;
      {
        const $t48845 = pen.ink;
        $t48846 = Arcade$Draw$css($t48845);
      }
      $t48847 = { $: "CvStrokeStyle", _0: $t48846 };
    }
    {
      let $t48849;
      {
        const $t48848 = pen.width;
        $t48849 = { $: "CvLineWidth", _0: $t48848 };
      }
      {
        let $t48852;
        {
          let $t48851;
          {
            const $t48850 = pen.ends;
            switch ($t48850.$) {
              case "ButtEnd": {
                $t48851 = "butt";
                break;
              }
              case "RoundEnd": {
                $t48851 = "round";
                break;
              }
              default: {
                throw new Error("non-exhaustive pattern match");
                break;
              }
            }
          }
          $t48852 = { $: "CvLineCap", _0: $t48851 };
        }
        {
          let $t48855;
          {
            let $t48854;
            {
              const $t48853 = pen.corners;
              switch ($t48853.$) {
                case "MitreCorner": {
                  $t48854 = "miter";
                  break;
                }
                case "RoundCorner": {
                  $t48854 = "round";
                  break;
                }
                default: {
                  throw new Error("non-exhaustive pattern match");
                  break;
                }
              }
            }
            $t48855 = { $: "CvLineJoin", _0: $t48854 };
          }
          {
            const $t48856 = { $: "CvStroke" };
            {
              const $t48857 = { $: "Nil" };
              {
                const $t48858 = { $: "Cons", _0: $t48856, _1: $t48857 };
                {
                  const $t48859 = { $: "Cons", _0: $t48855, _1: $t48858 };
                  {
                    const $t48860 = { $: "Cons", _0: $t48852, _1: $t48859 };
                    {
                      const $t48861 = { $: "Cons", _0: $t48849, _1: $t48860 };
                      {
                        const $t48862 = { $: "Cons", _0: $t48847, _1: $t48861 };
                        return List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48862, p, Arcade$Canvas$push$clo);
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
const Arcade$Canvas$stroke$clo = { _0: ($_, p, pen) => Arcade$Canvas$stroke(p, pen) };

function Arcade$Canvas$letter(p, t) {
  {
    let ready;
    {
      const $t48863 = { $: "CvSave" };
      {
        let $t48866;
        {
          const $t48864 = p.dpr;
          {
            const $t48865 = t.frame;
            $t48866 = Arcade$Canvas$framed_by($t48864, $t48865);
          }
        }
        {
          let $t48868;
          {
            const $t48867 = t.font;
            $t48868 = { $: "CvFont", _0: $t48867 };
          }
          {
            const $t48869 = { $: "CvTextCentred" };
            {
              const $t48870 = { $: "Nil" };
              {
                const $t48871 = { $: "Cons", _0: $t48869, _1: $t48870 };
                {
                  const $t48872 = { $: "Cons", _0: $t48868, _1: $t48871 };
                  {
                    const $t48873 = { $: "Cons", _0: $t48866, _1: $t48872 };
                    {
                      const $t48874 = { $: "Cons", _0: $t48863, _1: $t48873 };
                      ready = List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48874, p, Arcade$Canvas$push$clo);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    {
      let edged;
      {
        const $t48875 = t.edge;
        switch ($t48875.$) {
          case "Some": {
            const $f48893 = $t48875._0;
            {
              const pen = $f48893;
              {
                let $t48878;
                {
                  let $t48877;
                  {
                    const $t48876 = pen.ink;
                    $t48877 = Arcade$Draw$css($t48876);
                  }
                  $t48878 = { $: "CvStrokeStyle", _0: $t48877 };
                }
                {
                  let $t48880;
                  {
                    const $t48879 = pen.width;
                    $t48880 = { $: "CvLineWidth", _0: $t48879 };
                  }
                  {
                    const $t48881 = { $: "CvLineJoin", _0: "round" };
                    {
                      let $t48887;
                      {
                        const $t48882 = t.words;
                        {
                          let $t48884;
                          {
                            const $t48883 = t.middle;
                            $t48884 = $t48883.x;
                          }
                          {
                            let $t48886;
                            {
                              const $t48885 = t.middle;
                              $t48886 = $t48885.y;
                            }
                            $t48887 = { $: "CvStrokeText", _0: $t48882, _1: $t48884, _2: $t48886 };
                          }
                        }
                      }
                      {
                        const $t48888 = { $: "Nil" };
                        {
                          const $t48889 = { $: "Cons", _0: $t48887, _1: $t48888 };
                          {
                            const $t48890 = { $: "Cons", _0: $t48881, _1: $t48889 };
                            {
                              const $t48891 = { $: "Cons", _0: $t48880, _1: $t48890 };
                              {
                                const $t48892 = { $: "Cons", _0: $t48878, _1: $t48891 };
                                edged = List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48892, ready, Arcade$Canvas$push$clo);
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
          case "None": {
            edged = ready;
            break;
          }
          default: {
            throw new Error("non-exhaustive pattern match");
            break;
          }
        }
      }
      {
        let $t48896;
        {
          let $t48895;
          {
            const $t48894 = t.fill;
            $t48895 = Arcade$Draw$css($t48894);
          }
          $t48896 = { $: "CvFillStyle", _0: $t48895 };
        }
        {
          let $t48902;
          {
            const $t48897 = t.words;
            {
              let $t48899;
              {
                const $t48898 = t.middle;
                $t48899 = $t48898.x;
              }
              {
                let $t48901;
                {
                  const $t48900 = t.middle;
                  $t48901 = $t48900.y;
                }
                $t48902 = { $: "CvFillText", _0: $t48897, _1: $t48899, _2: $t48901 };
              }
            }
          }
          {
            const $t48903 = { $: "CvRestore" };
            {
              const $t48904 = { $: "Nil" };
              {
                const $t48905 = { $: "Cons", _0: $t48903, _1: $t48904 };
                {
                  const $t48906 = { $: "Cons", _0: $t48902, _1: $t48905 };
                  {
                    const $t48907 = { $: "Cons", _0: $t48896, _1: $t48906 };
                    return List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48907, edged, Arcade$Canvas$push$clo);
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
const Arcade$Canvas$letter$clo = { _0: ($_, p, t) => Arcade$Canvas$letter(p, t) };

function Arcade$Float32$pow2($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const e = $tco_a0;
    const acc = $tco_a1;
    {
      const $t48908 = (e > 0);
      if ($t48908 === true) {
        {
          const $t48909 = ((e - 1) < 4611686018427387904 && (e - 1) >= -4611686018427387904 ? (e - 1) : march_int_ovf((e - 1), 1));
          {
            const $t48910 = (acc * 2.);
            {
              $tco_a0 = $t48909;
              $tco_a1 = $t48910;
              continue __tco;
            }
          }
        }
      } else {
        {
          const $t48911 = (e < 0);
          if ($t48911 === true) {
            {
              const $t48912 = ((e + 1) < 4611686018427387904 && (e + 1) >= -4611686018427387904 ? (e + 1) : march_int_ovf((e + 1), 0));
              {
                const $t48913 = (acc * 0.5);
                {
                  $tco_a0 = $t48912;
                  $tco_a1 = $t48913;
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
      const $t48923 = (x < 0.);
      if ($t48923 === true) {
        ax = (0. - x);
      } else {
        ax = x;
      }
    }
    {
      let $t48925;
      {
        const $t48924 = c.overflow;
        $t48925 = (ax >= $t48924);
      }
      if ($t48925 === true) {
        {
          const $t48926 = (x < 0.);
          if ($t48926 === true) {
            {
              const $t48927 = c.infinity;
              return (0. - $t48927);
            }
          } else {
            {
              const $rc_2640 = c.infinity;
              return $rc_2640;
            }
          }
        }
      } else {
        {
          let $t48929;
          {
            const $t48928 = c.tiny;
            $t48929 = (ax < $t48928);
          }
          if ($t48929 === true) {
            {
              let r;
              {
                let $t48931;
                {
                  const $t48930 = c.subnormal_shift;
                  $t48931 = (x + $t48930);
                }
                {
                  const $t48932 = c.subnormal_shift;
                  r = ($t48931 - $t48932);
                }
              }
              {
                const $t48933 = (r === 0.);
                if ($t48933 === true) {
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
                const $t48934 = c.split;
                p = (x * $t48934);
              }
              {
                const $t48935 = (p - x);
                return (p - $t48935);
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
    const $t48971 = march_string_to_float(text);
    switch ($t48971.$) {
      case "Some": {
        const $f48972 = $t48971._0;
        {
          const x = $f48972;
          return x;
        }
        break;
      }
      case "None": {
        undefined;
        return unreachable();
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Arcade$Numerics$float_of_text$clo = { _0: ($_, text) => Arcade$Numerics$float_of_text(text) };

function Arcade$U64$add(a, b) {
  {
    let low;
    {
      const $t49079 = a.lo;
      {
        const $t49080 = b.lo;
        low = (($t49079 + $t49080) < 4611686018427387904 && ($t49079 + $t49080) >= -4611686018427387904 ? ($t49079 + $t49080) : march_int_ovf(($t49079 + $t49080), 0));
      }
    }
    {
      let $t49087;
      {
        let $t49086;
        {
          let $t49083;
          {
            const $t49081 = a.hi;
            {
              const $t49082 = b.hi;
              $t49083 = (($t49081 + $t49082) < 4611686018427387904 && ($t49081 + $t49082) >= -4611686018427387904 ? ($t49081 + $t49082) : march_int_ovf(($t49081 + $t49082), 0));
            }
          }
          {
            let $t49085;
            {
              const $t49084 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
              $t49085 = ((low - low % $t49084) / $t49084);
            }
            $t49086 = (($t49083 + $t49085) < 4611686018427387904 && ($t49083 + $t49085) >= -4611686018427387904 ? ($t49083 + $t49085) : march_int_ovf(($t49083 + $t49085), 0));
          }
        }
        {
          let $t49012_i6533;
          {
            const $t49011_i6532 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
            $t49012_i6533 = (($t49011_i6532 - 1) < 4611686018427387904 && ($t49011_i6532 - 1) >= -4611686018427387904 ? ($t49011_i6532 - 1) : march_int_ovf(($t49011_i6532 - 1), 1));
          }
          $t49087 = (($t49086 | 0) === $t49086 && ($t49012_i6533 | 0) === $t49012_i6533 ? ($t49086 & $t49012_i6533) : march_int_and($t49086, $t49012_i6533));
        }
      }
      {
        let $t49088;
        {
          let $t49012_i6530;
          {
            const $t49011_i6529 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
            $t49012_i6530 = (($t49011_i6529 - 1) < 4611686018427387904 && ($t49011_i6529 - 1) >= -4611686018427387904 ? ($t49011_i6529 - 1) : march_int_ovf(($t49011_i6529 - 1), 1));
          }
          $t49088 = ((low | 0) === low && ($t49012_i6530 | 0) === $t49012_i6530 ? (low & $t49012_i6530) : march_int_and(low, $t49012_i6530));
        }
        return ({ hi: $t49087, lo: $t49088 });
      }
    }
  }
}
const Arcade$U64$add$clo = { _0: ($_, a, b) => Arcade$U64$add(a, b) };

function Arcade$U64$xor(a, b) {
  {
    let $t49091;
    {
      const $t49089 = a.hi;
      {
        const $t49090 = b.hi;
        $t49091 = (($t49089 | 0) === $t49089 && ($t49090 | 0) === $t49090 ? ($t49089 ^ $t49090) : march_int_xor($t49089, $t49090));
      }
    }
    {
      let $t49094;
      {
        const $t49092 = a.lo;
        {
          const $t49093 = b.lo;
          $t49094 = (($t49092 | 0) === $t49092 && ($t49093 | 0) === $t49093 ? ($t49092 ^ $t49093) : march_int_xor($t49092, $t49093));
        }
      }
      return ({ hi: $t49091, lo: $t49094 });
    }
  }
}
const Arcade$U64$xor$clo = { _0: ($_, a, b) => Arcade$U64$xor(a, b) };

function Arcade$U64$shr(a, k) {
  {
    let carried;
    {
      let $t49098;
      {
        const $t49095 = a.hi;
        {
          let $t49097;
          {
            const $t49096 = march_int_shl(1, k);
            $t49097 = (($t49096 - 1) < 4611686018427387904 && ($t49096 - 1) >= -4611686018427387904 ? ($t49096 - 1) : march_int_ovf(($t49096 - 1), 1));
          }
          $t49098 = (($t49095 | 0) === $t49095 && ($t49097 | 0) === $t49097 ? ($t49095 & $t49097) : march_int_and($t49095, $t49097));
        }
      }
      {
        let $t49100;
        {
          const $t49099 = ((32 - k) < 4611686018427387904 && (32 - k) >= -4611686018427387904 ? (32 - k) : march_int_ovf((32 - k), 1));
          $t49100 = march_int_shl(1, $t49099);
        }
        carried = (($t49098 * $t49100) < 4611686018427387904 && ($t49098 * $t49100) >= -4611686018427387904 ? ($t49098 * $t49100) : march_int_ovf(($t49098 * $t49100), 2));
      }
    }
    {
      let $t49102;
      {
        const $t49101 = a.hi;
        $t49102 = (($t49101 | 0) === $t49101 && k >= 0 && k < 32 ? ($t49101 >> k) : march_int_shr($t49101, k));
      }
      {
        let $t49105;
        {
          let $t49104;
          {
            const $t49103 = a.lo;
            $t49104 = (($t49103 | 0) === $t49103 && k >= 0 && k < 32 ? ($t49103 >> k) : march_int_shr($t49103, k));
          }
          $t49105 = ((carried + $t49104) < 4611686018427387904 && (carried + $t49104) >= -4611686018427387904 ? (carried + $t49104) : march_int_ovf((carried + $t49104), 0));
        }
        return ({ hi: $t49102, lo: $t49105 });
      }
    }
  }
}
const Arcade$U64$shr$clo = { _0: ($_, a, k) => Arcade$U64$shr(a, k) };

function Arcade$U64$mul(a, b) {
  {
    let a0;
    {
      const $t49118 = a.lo;
      a0 = (($t49118 | 0) === $t49118 && (65535 | 0) === 65535 ? ($t49118 & 65535) : march_int_and($t49118, 65535));
    }
    {
      let a1;
      {
        const $t49119 = a.lo;
        a1 = (($t49119 | 0) === $t49119 && 16 >= 0 && 16 < 32 ? ($t49119 >> 16) : march_int_shr($t49119, 16));
      }
      {
        let b0;
        {
          const $t49120 = b.lo;
          b0 = (($t49120 | 0) === $t49120 && (65535 | 0) === 65535 ? ($t49120 & 65535) : march_int_and($t49120, 65535));
        }
        {
          let b1;
          {
            const $t49121 = b.lo;
            b1 = (($t49121 | 0) === $t49121 && 16 >= 0 && 16 < 32 ? ($t49121 >> 16) : march_int_shr($t49121, 16));
          }
          {
            const p00 = ((a0 * b0) < 4611686018427387904 && (a0 * b0) >= -4611686018427387904 ? (a0 * b0) : march_int_ovf((a0 * b0), 2));
            {
              let mid;
              {
                let $t49124;
                {
                  const $t49122 = ((a0 * b1) < 4611686018427387904 && (a0 * b1) >= -4611686018427387904 ? (a0 * b1) : march_int_ovf((a0 * b1), 2));
                  {
                    const $t49123 = ((a1 * b0) < 4611686018427387904 && (a1 * b0) >= -4611686018427387904 ? (a1 * b0) : march_int_ovf((a1 * b0), 2));
                    $t49124 = (($t49122 + $t49123) < 4611686018427387904 && ($t49122 + $t49123) >= -4611686018427387904 ? ($t49122 + $t49123) : march_int_ovf(($t49122 + $t49123), 0));
                  }
                }
                {
                  const $t49125 = ((p00 | 0) === p00 && 16 >= 0 && 16 < 32 ? (p00 >> 16) : march_int_shr(p00, 16));
                  mid = (($t49124 + $t49125) < 4611686018427387904 && ($t49124 + $t49125) >= -4611686018427387904 ? ($t49124 + $t49125) : march_int_ovf(($t49124 + $t49125), 0));
                }
              }
              {
                let low;
                {
                  const $t49126 = ((p00 | 0) === p00 && (65535 | 0) === 65535 ? (p00 & 65535) : march_int_and(p00, 65535));
                  {
                    let $t49128;
                    {
                      const $t49127 = ((mid | 0) === mid && (65535 | 0) === 65535 ? (mid & 65535) : march_int_and(mid, 65535));
                      $t49128 = (($t49127 * 65536) < 4611686018427387904 && ($t49127 * 65536) >= -4611686018427387904 ? ($t49127 * 65536) : march_int_ovf(($t49127 * 65536), 2));
                    }
                    low = (($t49126 + $t49128) < 4611686018427387904 && ($t49126 + $t49128) >= -4611686018427387904 ? ($t49126 + $t49128) : march_int_ovf(($t49126 + $t49128), 0));
                  }
                }
                {
                  let carry;
                  {
                    const $t49129 = ((a1 * b1) < 4611686018427387904 && (a1 * b1) >= -4611686018427387904 ? (a1 * b1) : march_int_ovf((a1 * b1), 2));
                    {
                      const $t49130 = ((mid | 0) === mid && 16 >= 0 && 16 < 32 ? (mid >> 16) : march_int_shr(mid, 16));
                      carry = (($t49129 + $t49130) < 4611686018427387904 && ($t49129 + $t49130) >= -4611686018427387904 ? ($t49129 + $t49130) : march_int_ovf(($t49129 + $t49130), 0));
                    }
                  }
                  {
                    let $t49139;
                    {
                      let $t49138;
                      {
                        let $t49134;
                        {
                          let $t49133;
                          {
                            const $t49131 = a.hi;
                            {
                              const $t49132 = b.lo;
                              {
                                let cross_i6571;
                                {
                                  let $t49112_i6570;
                                  {
                                    let $t49108_i6566;
                                    {
                                      const $t49106_i6564 = (($t49131 | 0) === $t49131 && 16 >= 0 && 16 < 32 ? ($t49131 >> 16) : march_int_shr($t49131, 16));
                                      {
                                        const $t49107_i6565 = (($t49132 | 0) === $t49132 && (65535 | 0) === 65535 ? ($t49132 & 65535) : march_int_and($t49132, 65535));
                                        $t49108_i6566 = (($t49106_i6564 * $t49107_i6565) < 4611686018427387904 && ($t49106_i6564 * $t49107_i6565) >= -4611686018427387904 ? ($t49106_i6564 * $t49107_i6565) : march_int_ovf(($t49106_i6564 * $t49107_i6565), 2));
                                      }
                                    }
                                    {
                                      let $t49111_i6569;
                                      {
                                        const $t49109_i6567 = (($t49131 | 0) === $t49131 && (65535 | 0) === 65535 ? ($t49131 & 65535) : march_int_and($t49131, 65535));
                                        {
                                          const $t49110_i6568 = (($t49132 | 0) === $t49132 && 16 >= 0 && 16 < 32 ? ($t49132 >> 16) : march_int_shr($t49132, 16));
                                          $t49111_i6569 = (($t49109_i6567 * $t49110_i6568) < 4611686018427387904 && ($t49109_i6567 * $t49110_i6568) >= -4611686018427387904 ? ($t49109_i6567 * $t49110_i6568) : march_int_ovf(($t49109_i6567 * $t49110_i6568), 2));
                                        }
                                      }
                                      $t49112_i6570 = (($t49108_i6566 + $t49111_i6569) < 4611686018427387904 && ($t49108_i6566 + $t49111_i6569) >= -4611686018427387904 ? ($t49108_i6566 + $t49111_i6569) : march_int_ovf(($t49108_i6566 + $t49111_i6569), 0));
                                    }
                                  }
                                  cross_i6571 = (($t49112_i6570 | 0) === $t49112_i6570 && (65535 | 0) === 65535 ? ($t49112_i6570 & 65535) : march_int_and($t49112_i6570, 65535));
                                }
                                {
                                  let $t49117_i6576;
                                  {
                                    let $t49115_i6574;
                                    {
                                      const $t49113_i6572 = (($t49131 | 0) === $t49131 && (65535 | 0) === 65535 ? ($t49131 & 65535) : march_int_and($t49131, 65535));
                                      {
                                        const $t49114_i6573 = (($t49132 | 0) === $t49132 && (65535 | 0) === 65535 ? ($t49132 & 65535) : march_int_and($t49132, 65535));
                                        $t49115_i6574 = (($t49113_i6572 * $t49114_i6573) < 4611686018427387904 && ($t49113_i6572 * $t49114_i6573) >= -4611686018427387904 ? ($t49113_i6572 * $t49114_i6573) : march_int_ovf(($t49113_i6572 * $t49114_i6573), 2));
                                      }
                                    }
                                    {
                                      const $t49116_i6575 = ((cross_i6571 * 65536) < 4611686018427387904 && (cross_i6571 * 65536) >= -4611686018427387904 ? (cross_i6571 * 65536) : march_int_ovf((cross_i6571 * 65536), 2));
                                      $t49117_i6576 = (($t49115_i6574 + $t49116_i6575) < 4611686018427387904 && ($t49115_i6574 + $t49116_i6575) >= -4611686018427387904 ? ($t49115_i6574 + $t49116_i6575) : march_int_ovf(($t49115_i6574 + $t49116_i6575), 0));
                                    }
                                  }
                                  {
                                    let $t49012_i15969;
                                    {
                                      const $t49011_i15968 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                                      $t49012_i15969 = (($t49011_i15968 - 1) < 4611686018427387904 && ($t49011_i15968 - 1) >= -4611686018427387904 ? ($t49011_i15968 - 1) : march_int_ovf(($t49011_i15968 - 1), 1));
                                    }
                                    $t49133 = (($t49117_i6576 | 0) === $t49117_i6576 && ($t49012_i15969 | 0) === $t49012_i15969 ? ($t49117_i6576 & $t49012_i15969) : march_int_and($t49117_i6576, $t49012_i15969));
                                  }
                                }
                              }
                            }
                          }
                          $t49134 = ((carry + $t49133) < 4611686018427387904 && (carry + $t49133) >= -4611686018427387904 ? (carry + $t49133) : march_int_ovf((carry + $t49133), 0));
                        }
                        {
                          let $t49137;
                          {
                            const $t49135 = a.lo;
                            {
                              const $t49136 = b.hi;
                              {
                                let cross_i6556;
                                {
                                  let $t49112_i6555;
                                  {
                                    let $t49108_i6551;
                                    {
                                      const $t49106_i6549 = (($t49135 | 0) === $t49135 && 16 >= 0 && 16 < 32 ? ($t49135 >> 16) : march_int_shr($t49135, 16));
                                      {
                                        const $t49107_i6550 = (($t49136 | 0) === $t49136 && (65535 | 0) === 65535 ? ($t49136 & 65535) : march_int_and($t49136, 65535));
                                        $t49108_i6551 = (($t49106_i6549 * $t49107_i6550) < 4611686018427387904 && ($t49106_i6549 * $t49107_i6550) >= -4611686018427387904 ? ($t49106_i6549 * $t49107_i6550) : march_int_ovf(($t49106_i6549 * $t49107_i6550), 2));
                                      }
                                    }
                                    {
                                      let $t49111_i6554;
                                      {
                                        const $t49109_i6552 = (($t49135 | 0) === $t49135 && (65535 | 0) === 65535 ? ($t49135 & 65535) : march_int_and($t49135, 65535));
                                        {
                                          const $t49110_i6553 = (($t49136 | 0) === $t49136 && 16 >= 0 && 16 < 32 ? ($t49136 >> 16) : march_int_shr($t49136, 16));
                                          $t49111_i6554 = (($t49109_i6552 * $t49110_i6553) < 4611686018427387904 && ($t49109_i6552 * $t49110_i6553) >= -4611686018427387904 ? ($t49109_i6552 * $t49110_i6553) : march_int_ovf(($t49109_i6552 * $t49110_i6553), 2));
                                        }
                                      }
                                      $t49112_i6555 = (($t49108_i6551 + $t49111_i6554) < 4611686018427387904 && ($t49108_i6551 + $t49111_i6554) >= -4611686018427387904 ? ($t49108_i6551 + $t49111_i6554) : march_int_ovf(($t49108_i6551 + $t49111_i6554), 0));
                                    }
                                  }
                                  cross_i6556 = (($t49112_i6555 | 0) === $t49112_i6555 && (65535 | 0) === 65535 ? ($t49112_i6555 & 65535) : march_int_and($t49112_i6555, 65535));
                                }
                                {
                                  let $t49117_i6561;
                                  {
                                    let $t49115_i6559;
                                    {
                                      const $t49113_i6557 = (($t49135 | 0) === $t49135 && (65535 | 0) === 65535 ? ($t49135 & 65535) : march_int_and($t49135, 65535));
                                      {
                                        const $t49114_i6558 = (($t49136 | 0) === $t49136 && (65535 | 0) === 65535 ? ($t49136 & 65535) : march_int_and($t49136, 65535));
                                        $t49115_i6559 = (($t49113_i6557 * $t49114_i6558) < 4611686018427387904 && ($t49113_i6557 * $t49114_i6558) >= -4611686018427387904 ? ($t49113_i6557 * $t49114_i6558) : march_int_ovf(($t49113_i6557 * $t49114_i6558), 2));
                                      }
                                    }
                                    {
                                      const $t49116_i6560 = ((cross_i6556 * 65536) < 4611686018427387904 && (cross_i6556 * 65536) >= -4611686018427387904 ? (cross_i6556 * 65536) : march_int_ovf((cross_i6556 * 65536), 2));
                                      $t49117_i6561 = (($t49115_i6559 + $t49116_i6560) < 4611686018427387904 && ($t49115_i6559 + $t49116_i6560) >= -4611686018427387904 ? ($t49115_i6559 + $t49116_i6560) : march_int_ovf(($t49115_i6559 + $t49116_i6560), 0));
                                    }
                                  }
                                  {
                                    let $t49012_i15959;
                                    {
                                      const $t49011_i15958 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                                      $t49012_i15959 = (($t49011_i15958 - 1) < 4611686018427387904 && ($t49011_i15958 - 1) >= -4611686018427387904 ? ($t49011_i15958 - 1) : march_int_ovf(($t49011_i15958 - 1), 1));
                                    }
                                    $t49137 = (($t49117_i6561 | 0) === $t49117_i6561 && ($t49012_i15959 | 0) === $t49012_i15959 ? ($t49117_i6561 & $t49012_i15959) : march_int_and($t49117_i6561, $t49012_i15959));
                                  }
                                }
                              }
                            }
                          }
                          $t49138 = (($t49134 + $t49137) < 4611686018427387904 && ($t49134 + $t49137) >= -4611686018427387904 ? ($t49134 + $t49137) : march_int_ovf(($t49134 + $t49137), 0));
                        }
                      }
                      {
                        let $t49012_i6546;
                        {
                          const $t49011_i6545 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                          $t49012_i6546 = (($t49011_i6545 - 1) < 4611686018427387904 && ($t49011_i6545 - 1) >= -4611686018427387904 ? ($t49011_i6545 - 1) : march_int_ovf(($t49011_i6545 - 1), 1));
                        }
                        $t49139 = (($t49138 | 0) === $t49138 && ($t49012_i6546 | 0) === $t49012_i6546 ? ($t49138 & $t49012_i6546) : march_int_and($t49138, $t49012_i6546));
                      }
                    }
                    return ({ hi: $t49139, lo: low });
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
const Arcade$U64$mul$clo = { _0: ($_, a, b) => Arcade$U64$mul(a, b) };

function Arcade$Rng$next(r) {
  {
    let word;
    {
      const $t49140 = r.word;
      {
        let $t49141;
        {
          let $t49019_i6594;
          {
            let $t49012_i15994;
            {
              const $t49011_i15993 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
              $t49012_i15994 = (($t49011_i15993 - 1) < 4611686018427387904 && ($t49011_i15993 - 1) >= -4611686018427387904 ? ($t49011_i15993 - 1) : march_int_ovf(($t49011_i15993 - 1), 1));
            }
            $t49019_i6594 = ((2654435769 | 0) === 2654435769 && ($t49012_i15994 | 0) === $t49012_i15994 ? (2654435769 & $t49012_i15994) : march_int_and(2654435769, $t49012_i15994));
          }
          {
            let $t49020_i6595;
            {
              let $t49012_i15991;
              {
                const $t49011_i15990 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                $t49012_i15991 = (($t49011_i15990 - 1) < 4611686018427387904 && ($t49011_i15990 - 1) >= -4611686018427387904 ? ($t49011_i15990 - 1) : march_int_ovf(($t49011_i15990 - 1), 1));
              }
              $t49020_i6595 = ((2135587861 | 0) === 2135587861 && ($t49012_i15991 | 0) === $t49012_i15991 ? (2135587861 & $t49012_i15991) : march_int_and(2135587861, $t49012_i15991));
            }
            $t49141 = ({ hi: $t49019_i6594, lo: $t49020_i6595 });
          }
        }
        word = Arcade$U64$add($t49140, $t49141);
      }
    }
    {
      let z1;
      {
        let $t49143;
        {
          let $t49142;
          $t49142 = Arcade$U64$shr(word, 30);
          $t49143 = Arcade$U64$xor(word, $t49142);
        }
        {
          let $t49144;
          {
            let $t49019_i6590;
            {
              let $t49012_i15988;
              {
                const $t49011_i15987 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                $t49012_i15988 = (($t49011_i15987 - 1) < 4611686018427387904 && ($t49011_i15987 - 1) >= -4611686018427387904 ? ($t49011_i15987 - 1) : march_int_ovf(($t49011_i15987 - 1), 1));
              }
              $t49019_i6590 = ((3210233709 | 0) === 3210233709 && ($t49012_i15988 | 0) === $t49012_i15988 ? (3210233709 & $t49012_i15988) : march_int_and(3210233709, $t49012_i15988));
            }
            {
              let $t49020_i6591;
              {
                let $t49012_i15985;
                {
                  const $t49011_i15984 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                  $t49012_i15985 = (($t49011_i15984 - 1) < 4611686018427387904 && ($t49011_i15984 - 1) >= -4611686018427387904 ? ($t49011_i15984 - 1) : march_int_ovf(($t49011_i15984 - 1), 1));
                }
                $t49020_i6591 = ((484763065 | 0) === 484763065 && ($t49012_i15985 | 0) === $t49012_i15985 ? (484763065 & $t49012_i15985) : march_int_and(484763065, $t49012_i15985));
              }
              $t49144 = ({ hi: $t49019_i6590, lo: $t49020_i6591 });
            }
          }
          z1 = Arcade$U64$mul($t49143, $t49144);
        }
      }
      {
        let z2;
        {
          let $t49146;
          {
            let $t49145;
            $t49145 = Arcade$U64$shr(z1, 27);
            $t49146 = Arcade$U64$xor(z1, $t49145);
          }
          {
            let $t49147;
            {
              let $t49019_i6586;
              {
                let $t49012_i15982;
                {
                  const $t49011_i15981 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                  $t49012_i15982 = (($t49011_i15981 - 1) < 4611686018427387904 && ($t49011_i15981 - 1) >= -4611686018427387904 ? ($t49011_i15981 - 1) : march_int_ovf(($t49011_i15981 - 1), 1));
                }
                $t49019_i6586 = ((2496678331 | 0) === 2496678331 && ($t49012_i15982 | 0) === $t49012_i15982 ? (2496678331 & $t49012_i15982) : march_int_and(2496678331, $t49012_i15982));
              }
              {
                let $t49020_i6587;
                {
                  let $t49012_i15979;
                  {
                    const $t49011_i15978 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                    $t49012_i15979 = (($t49011_i15978 - 1) < 4611686018427387904 && ($t49011_i15978 - 1) >= -4611686018427387904 ? ($t49011_i15978 - 1) : march_int_ovf(($t49011_i15978 - 1), 1));
                  }
                  $t49020_i6587 = ((321982955 | 0) === 321982955 && ($t49012_i15979 | 0) === $t49012_i15979 ? (321982955 & $t49012_i15979) : march_int_and(321982955, $t49012_i15979));
                }
                $t49147 = ({ hi: $t49019_i6586, lo: $t49020_i6587 });
              }
            }
            z2 = Arcade$U64$mul($t49146, $t49147);
          }
        }
        {
          let $t49149;
          {
            let $t49148;
            $t49148 = Arcade$U64$shr(z2, 31);
            $t49149 = Arcade$U64$xor(z2, $t49148);
          }
          {
            const $t49150 = ({ word: word });
            return { _0: $t49149, _1: $t49150 };
          }
        }
      }
    }
  }
}
const Arcade$Rng$next$clo = { _0: ($_, r) => Arcade$Rng$next(r) };

function Arcade$Rng$next_unit(n, r) {
  {
    const $p49158 = Arcade$Rng$next(r);
    {
      const v = $p49158._0;
      {
        const after = $p49158._1;
        {
          let top53;
          {
            let $t49152;
            {
              const $t49151 = v.hi;
              $t49152 = (($t49151 * 2097152) < 4611686018427387904 && ($t49151 * 2097152) >= -4611686018427387904 ? ($t49151 * 2097152) : march_int_ovf(($t49151 * 2097152), 2));
            }
            {
              let $t49154;
              {
                const $t49153 = v.lo;
                $t49154 = (($t49153 | 0) === $t49153 && 11 >= 0 && 11 < 32 ? ($t49153 >> 11) : march_int_shr($t49153, 11));
              }
              top53 = (($t49152 + $t49154) < 4611686018427387904 && ($t49152 + $t49154) >= -4611686018427387904 ? ($t49152 + $t49154) : march_int_ovf(($t49152 + $t49154), 0));
            }
          }
          {
            let $t49157;
            {
              const $t49155 = top53;
              {
                const $t49156 = n.unit53;
                $t49157 = ($t49155 * $t49156);
              }
            }
            {
              const $rc_2654 = { _0: $t49157, _1: after };
              return $rc_2654;
            }
          }
        }
      }
    }
  }
}
const Arcade$Rng$next_unit$clo = { _0: ($_, n, r) => Arcade$Rng$next_unit(n, r) };

function Arcade$Physics$Kinematics$reflect_approaching(v, n, restitution) {
  {
    let $t49760;
    {
      let $t49759;
      $t49759 = Arcade$Vec2$dot(v, n);
      $t49760 = ($t49759 < 0.);
    }
    if ($t49760 === true) {
      {
        const v_i14137 = v;
        {
          const n_i14138 = n;
          {
            let $t49758_i14143;
            {
              let $t49757_i14142;
              {
                const $t49755_i14140 = (1. + restitution);
                {
                  let $t49756_i14141;
                  $t49756_i14141 = Arcade$Vec2$dot(v, n);
                  $t49757_i14142 = ($t49755_i14140 * $t49756_i14141);
                }
              }
              $t49758_i14143 = Arcade$Vec2$scale(n, $t49757_i14142);
            }
            return Arcade$Vec2$sub(v, $t49758_i14143);
          }
        }
      }
    } else {
      return v;
    }
  }
}
const Arcade$Physics$Kinematics$reflect_approaching$clo = { _0: ($_, v, n, restitution) => Arcade$Physics$Kinematics$reflect_approaching(v, n, restitution) };

function unheld(b) {
  switch (b.$) {
    case "HeldModel": {
      const $f49773 = b._0;
      {
        const m = $f49773;
        return m;
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const unheld$clo = { _0: ($_, b) => unheld(b) };

function held(r) {
  {
    const $p49775 = r;
    {
      const m = r._0;
      {
        const effects = r._1;
        {
          let $t49774;
          $t49774 = { $: "HeldModel", _0: m };
          {
            const $rc_2691 = { _0: $t49774, _1: effects };
            return $rc_2691;
          }
        }
      }
    }
  }
}
const held$clo = { _0: ($_, r) => held(r) };

function update(m, x) {
  switch (x.$) {
    case "PmTick": {
      const $f49788 = x._0;
      {
        let t;
        t = $f49788;
        {
          const m_i14144 = m;
          {
            const $t49919_i14146 = m.shown;
            switch ($t49919_i14146.$) {
              case "None": {
                {
                  const $t49776_i6770_i14148 = { $: "Nil" };
                  return { _0: m, _1: $t49776_i6770_i14148 };
                }
                break;
              }
              case "Some": {
                const $f49922_i14149 = $t49919_i14146._0;
                {
                  const p_i14150 = $f49922_i14149;
                  {
                    let $t49921_i14152;
                    {
                      const $t49920_i14151 = p_i14150.began;
                      $t49921_i14152 = (t - $t49920_i14151);
                    }
                    return play_to(m, p_i14150, $t49921_i14152);
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
      }
      break;
    }
    case "PmResize": {
      const $f49789 = x._0;
      const $f49790 = x._1;
      {
        let h;
        h = $f49790;
        {
          let w;
          w = $f49789;
          {
            const $t49782 = ({ ...m, view_w: w, view_h: h });
            {
              const $t49776_i6734 = { $: "Nil" };
              return { _0: $t49782, _1: $t49776_i6734 };
            }
          }
        }
      }
      break;
    }
    case "PmDown": {
      const $f49795 = x._0;
      {
        const ps = $f49795;
        {
          const $t49783 = pressed(m, ps);
          {
            const $t49776_i6736 = { $: "Nil" };
            return { _0: $t49783, _1: $t49776_i6736 };
          }
        }
      }
      break;
    }
    case "PmMove": {
      const $f49796 = x._0;
      {
        const ps = $f49796;
        {
          const $t49784 = moved(m, ps);
          {
            const $t49776_i6738 = { $: "Nil" };
            return { _0: $t49784, _1: $t49776_i6738 };
          }
        }
      }
      break;
    }
    case "PmUp": {
      const $f49797 = x._0;
      {
        const ps = $f49797;
        {
          const $t49785 = moved(m, ps);
          return lift($t49785, ps);
        }
      }
      break;
    }
    case "PmCancel": {
      {
        let $t49787;
        {
          const $t49786 = { $: "None" };
          $t49787 = ({ ...m, drag: $t49786 });
        }
        {
          const $t49776_i6740 = { $: "Nil" };
          return { _0: $t49787, _1: $t49776_i6740 };
        }
      }
      break;
    }
    case "PmVisible": {
      const $f49798 = x._0;
      {
        const $t49776_i6742 = { $: "Nil" };
        return { _0: m, _1: $t49776_i6742 };
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const update$clo = { _0: ($_, m, x) => update(m, x) };

function newest($tco_a0) {
  __tco: for (;;) {
    const ps = $tco_a0;
    switch (ps.$) {
      case "Nil": {
        return { $: "None" };
        break;
      }
      case "Cons": {
        const $f49804 = ps._0;
        const $f49805 = ps._1;
        switch ($f49805.$) {
          case "Nil": {
            {
              const p = $f49804;
              {
                const $t49799 = p.gt;
                {
                  let $t49802;
                  {
                    const $t49800 = p.gx;
                    {
                      const $t49801 = p.gy;
                      $t49802 = ({ x: $t49800, y: $t49801 });
                    }
                  }
                  {
                    const $t49803 = { _0: $t49799, _1: $t49802 };
                    return { $: "Some", _0: $t49803 };
                  }
                }
              }
            }
            break;
          }
          default: {
            {
              const rest = $f49805;
              {
                $tco_a0 = rest;
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
const newest$clo = { _0: ($_, ps) => newest(ps) };

function pressed(m, ps) {
  {
    const $t49814 = m.shown;
    switch ($t49814.$) {
      case "Some": {
        const $f49827 = $t49814._0;
        {
          const $t49815 = { $: "None" };
          {
            const $rc_2692 = ({ ...m, drag: $t49815 });
            return $rc_2692;
          }
        }
        break;
      }
      case "None": {
        {
          const $t49816 = newest(ps);
          switch ($t49816.$) {
            case "Some": {
              const $f49820 = $t49816._0;
              const $f49821 = $f49820._0;
              const $f49822 = $f49820._1;
              {
                const at = $f49822;
                {
                  let $t49818;
                  {
                    let $t49817;
                    $t49817 = ({ pressed: at, now: at });
                    $t49818 = { $: "Some", _0: $t49817 };
                  }
                  {
                    const $rc_2693 = ({ ...m, drag: $t49818 });
                    return $rc_2693;
                  }
                }
              }
              break;
            }
            case "None": {
              {
                const $t49819 = { $: "None" };
                {
                  const $rc_2694 = ({ ...m, drag: $t49819 });
                  return $rc_2694;
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
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
const pressed$clo = { _0: ($_, m, ps) => pressed(m, ps) };

function moved(m, ps) {
  {
    const $t49828 = m.drag;
    switch ($t49828.$) {
      case "None": {
        return m;
        break;
      }
      case "Some": {
        const $f49839 = $t49828._0;
        {
          const d = $f49839;
          {
            const $t49829 = newest(ps);
            switch ($t49829.$) {
              case "Some": {
                const $f49832 = $t49829._0;
                const $f49833 = $f49832._0;
                const $f49834 = $f49832._1;
                {
                  const at = $f49834;
                  {
                    let $t49831;
                    {
                      const $t49830 = ({ ...d, now: at });
                      $t49831 = { $: "Some", _0: $t49830 };
                    }
                    {
                      const $rc_2696 = ({ ...m, drag: $t49831 });
                      return $rc_2696;
                    }
                  }
                }
                break;
              }
              case "None": {
                return m;
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
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
}
const moved$clo = { _0: ($_, m, ps) => moved(m, ps) };

function lift(m0, ps) {
  {
    let m;
    {
      const $t49840 = { $: "None" };
      m = ({ ...m0, drag: $t49840 });
    }
    {
      const $t49841 = m0.drag;
      switch ($t49841.$) {
        case "None": {
          {
            const $t49776_i6746 = { $: "Nil" };
            return { _0: m, _1: $t49776_i6746 };
          }
          break;
        }
        case "Some": {
          const $f49852 = $t49841._0;
          {
            const d = $f49852;
            {
              let button;
              {
                let $t49844;
                {
                  const $t49842 = m.view_w;
                  {
                    const $t49843 = m.view_h;
                    {
                      const $t48495_i6757 = ($t49842 > 0.);
                      {
                        const $jp1191_$t48496_i6758 = ($t49843 > 0.);
                        if ($t48495_i6757 === true) {
                          if ($jp1191_$t48496_i6758 === true) {
                            $t49844 = ({ width: $t49842, height: $t49843 });
                          } else {
                            $t49844 = ({ width: $t49842, height: 1. });
                          }
                        } else {
                          if ($jp1191_$t48496_i6758 === true) {
                            $t49844 = ({ width: 1., height: $t49843 });
                          } else {
                            $t49844 = ({ width: 1., height: 1. });
                          }
                        }
                      }
                    }
                  }
                }
                {
                  let right_i6753;
                  {
                    let $t46885_i6752;
                    {
                      let $t46882_i6749;
                      {
                        const $t46881_i6748 = $t49844.width;
                        $t46882_i6749 = ($t46881_i6748 / 2.);
                      }
                      {
                        let $t46884_i6751;
                        {
                          const $t46883_i6750 = Putt$Hud$column($t49844);
                          $t46884_i6751 = ($t46883_i6750 / 2.);
                        }
                        $t46885_i6752 = ($t46882_i6749 + $t46884_i6751);
                      }
                    }
                    right_i6753 = ($t46885_i6752 - 8.);
                  }
                  {
                    const $t46886_i6754 = (right_i6753 - 86.);
                    button = ({ left: $t46886_i6754, top: 68., right: right_i6753, bottom: 96. });
                  }
                }
              }
              {
                let $t49849;
                {
                  let $t49846;
                  {
                    const $t49845 = d.pressed;
                    $t49846 = Putt$Hud$in_box(button, $t49845);
                  }
                  {
                    let $t49848;
                    {
                      const $t49847 = d.now;
                      $t49848 = Putt$Hud$in_box(button, $t49847);
                    }
                    $t49849 = ($t49846 && $t49848);
                  }
                }
                if ($t49849 === true) {
                  return again(m);
                } else {
                  {
                    let $t49851;
                    {
                      const $t49850 = m.game;
                      $t49851 = $t49850.phase;
                    }
                    switch ($t49851.$) {
                      case "PuttAiming": {
                        return released(m, d, ps);
                        break;
                      }
                      case "PuttHoleDone": {
                        return next(m);
                        break;
                      }
                      case "PuttCourseDone": {
                        return again(m);
                        break;
                      }
                      default: {
                        return (() => { throw new Error("non-exhaustive pattern match"); })();
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
  }
}
const lift$clo = { _0: ($_, m0, ps) => lift(m0, ps) };

function released(m, d, ps) {
  {
    let $t49858;
    {
      const $t49853 = m.rs;
      {
        const $t49854 = m.aim;
        {
          let $t49857;
          {
            const $t49855 = d.now;
            {
              const $t49856 = d.pressed;
              $t49857 = Arcade$Vec2$sub($t49855, $t49856);
            }
          }
          $t49858 = Putt$Aim$shot_of_pull($t49853, $t49854, $t49857);
        }
      }
    }
    {
      const $t49859 = newest(ps);
      {
        const $t49860 = { _0: $t49858, _1: $t49859 };
        const $f49861 = $t49860._0;
        const $f49862 = $t49860._1;
        switch ($f49861.$) {
          case "Some": {
            const $f49867 = $f49861._0;
            {
              let $jp_clo49873;
              $jp_clo49873 = { $: "$Clo_$jp4_released$0_released", _0: $jp4_released$apply$0_released, _1: m };
              switch ($f49862.$) {
                case "Some": {
                  const $f49874 = $f49862._0;
                  const $f49877 = $f49874._0;
                  const $f49878 = $f49874._1;
                  {
                    const at = $f49877;
                    {
                      const shot = $f49867;
                      return strike(m, shot, at);
                    }
                  }
                  break;
                }
                default: {
                  return $jp4_released$apply$0_released($jp_clo49873);
                }
              }
            }
            break;
          }
          default: {
            {
              const $t49776_i6760 = { $: "Nil" };
              return { _0: m, _1: $t49776_i6760 };
            }
          }
        }
      }
    }
  }
}
const released$clo = { _0: ($_, m, d, ps) => released(m, d, ps) };

function strike(m, shot, at) {
  {
    let $t49890;
    {
      const $t49887 = m.rs;
      {
        const $t49888 = { $: "PuttStrike", _0: shot };
        {
          const $t49889 = m.game;
          $t49890 = Putt$Rules$play($t49887, $t49888, $t49889);
        }
      }
    }
    switch ($t49890.$) {
      case "Err": {
        const $f49897 = $t49890._0;
        {
          const $t49776_i6762 = { $: "Nil" };
          return { _0: m, _1: $t49776_i6762 };
        }
        break;
      }
      case "Ok": {
        const $f49898 = $t49890._0;
        {
          const turn = $f49898;
          {
            let p;
            {
              const $t49891 = m.game;
              {
                const $t49892 = (-1.);
                p = ({ from_state: $t49891, turn: turn, began: at, reached: $t49892 });
              }
            }
            {
              let $t49896;
              {
                const $t49893 = { $: "Some", _0: p };
                {
                  let $t49895;
                  {
                    const $t49894 = m.putts;
                    $t49895 = (($t49894 + 1) < 4611686018427387904 && ($t49894 + 1) >= -4611686018427387904 ? ($t49894 + 1) : march_int_ovf(($t49894 + 1), 0));
                  }
                  $t49896 = ({ ...m, shown: $t49893, putts: $t49895 });
                }
              }
              {
                const $t49776_i6764 = { $: "Nil" };
                return { _0: $t49896, _1: $t49776_i6764 };
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
}
const strike$clo = { _0: ($_, m, shot, at) => strike(m, shot, at) };

function next(m) {
  {
    let $t49902;
    {
      const $t49899 = m.rs;
      {
        const $t49900 = { $: "PuttNext" };
        {
          const $t49901 = m.game;
          $t49902 = Putt$Rules$play($t49899, $t49900, $t49901);
        }
      }
    }
    switch ($t49902.$) {
      case "Err": {
        const $f49911 = $t49902._0;
        {
          const $t49776_i6766 = { $: "Nil" };
          return { _0: m, _1: $t49776_i6766 };
        }
        break;
      }
      case "Ok": {
        const $f49912 = $t49902._0;
        {
          const turn = $f49912;
          {
            let $t49904;
            {
              const $t49903 = turn.after;
              $t49904 = ({ ...m, game: $t49903 });
            }
            {
              let $t49908;
              {
                const $t49905 = m.rs;
                {
                  const $t49906 = turn.told;
                  {
                    let $t49907;
                    $t49907 = Putt$Cues$audio($t49905, $t49906);
                    $t49908 = { $: "PfAudio", _0: $t49907 };
                  }
                }
              }
              {
                const $t49909 = { $: "Nil" };
                {
                  const $t49910 = { $: "Cons", _0: $t49908, _1: $t49909 };
                  {
                    const $rc_2698 = { _0: $t49904, _1: $t49910 };
                    return $rc_2698;
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
}
const next$clo = { _0: ($_, m) => next(m) };

function again(m) {
  {
    let $p49918;
    {
      let $t49914;
      {
        const $t49913 = m.game;
        $t49914 = $t49913.rng;
      }
      $p49918 = Arcade$Rng$next($t49914);
    }
    {
      const seed = $p49918._0;
      {
        let $t49917;
        {
          let $t49916;
          {
            const $t49915 = m.rs;
            $t49916 = Putt$Rules$new_game($t49915, seed);
          }
          $t49917 = ({ ...m, game: $t49916 });
        }
        {
          const $t49776_i6768 = { $: "Nil" };
          return { _0: $t49917, _1: $t49776_i6768 };
        }
      }
    }
  }
}
const again$clo = { _0: ($_, m) => again(m) };

function play_to(m, p, upto) {
  {
    let sounds;
    {
      const $t49923 = m.rs;
      {
        const $t49924 = p.turn;
        {
          const $t49925 = $t49924.told;
          {
            const $t49926 = p.reached;
            {
              let $t49927;
              {
                const $t46632_i6775 = { $: "Nil" };
                $t49927 = Putt$Cues$window($t49923, $t49925, $t49926, upto, 0., $t46632_i6775);
              }
              sounds = { $: "PfAudio", _0: $t49927 };
            }
          }
        }
      }
    }
    {
      let $t49931;
      {
        let $t49930;
        {
          const $t49928 = p.turn;
          {
            const $t49929 = $t49928.rolled;
            $t49930 = path_end($t49929);
          }
        }
        $t49931 = (upto >= $t49930);
      }
      if ($t49931 === true) {
        {
          let $t49935;
          {
            let $t49933;
            {
              const $t49932 = p.turn;
              $t49933 = $t49932.after;
            }
            {
              const $t49934 = { $: "None" };
              $t49935 = ({ ...m, game: $t49933, shown: $t49934 });
            }
          }
          {
            const $t49936 = { $: "Nil" };
            {
              const $t49937 = { $: "Cons", _0: sounds, _1: $t49936 };
              return { _0: $t49935, _1: $t49937 };
            }
          }
        }
      } else {
        {
          let $t49940;
          {
            let $t49939;
            {
              const $t49938 = ({ ...p, reached: upto });
              $t49939 = { $: "Some", _0: $t49938 };
            }
            $t49940 = ({ ...m, shown: $t49939 });
          }
          {
            const $t49941 = { $: "Nil" };
            {
              const $t49942 = { $: "Cons", _0: sounds, _1: $t49941 };
              return { _0: $t49940, _1: $t49942 };
            }
          }
        }
      }
    }
  }
}
const play_to$clo = { _0: ($_, m, p, upto) => play_to(m, p, upto) };

function path_end($tco_a0) {
  __tco: for (;;) {
    const path = $tco_a0;
    switch (path.$) {
      case "Nil": {
        return 0.;
        break;
      }
      case "Cons": {
        const $f49943 = path._0;
        const $f49944 = path._1;
        switch ($f49944.$) {
          case "Nil": {
            {
              const a = $f49943;
              return a.sampled_at;
            }
            break;
          }
          default: {
            {
              const rest = $f49944;
              {
                $tco_a0 = rest;
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
const path_end$clo = { _0: ($_, path) => path_end(path) };

function along($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const a = $tco_a0;
    const rest = $tco_a1;
    const t = $tco_a2;
    switch (rest.$) {
      case "Nil": {
        {
          const $rc_2702 = a.point;
          return $rc_2702;
        }
        break;
      }
      case "Cons": {
        const $f49963 = rest._0;
        const $f49964 = rest._1;
        {
          const more = $f49964;
          {
            const b = $f49963;
            {
              let $t49962;
              {
                const $t49961 = b.sampled_at;
                $t49962 = (t <= $t49961);
              }
              if ($t49962 === true) {
                return between(a, b, t);
              } else {
                {
                  $tco_a0 = b;
                  $tco_a1 = more;
                  $tco_a2 = t;
                  continue __tco;
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
const along$clo = { _0: ($_, a, rest, t) => along(a, rest, t) };

function between(a, b, t) {
  {
    let span;
    {
      const $t49969 = b.sampled_at;
      {
        const $t49970 = a.sampled_at;
        span = ($t49969 - $t49970);
      }
    }
    {
      const $t49971 = (span > 0.);
      if ($t49971 === true) {
        {
          const $t49972 = a.point;
          {
            let $t49979;
            {
              let $t49975;
              {
                const $t49973 = b.point;
                {
                  const $t49974 = a.point;
                  $t49975 = Arcade$Vec2$sub($t49973, $t49974);
                }
              }
              {
                let $t49978;
                {
                  let $t49977;
                  {
                    const $t49976 = a.sampled_at;
                    $t49977 = (t - $t49976);
                  }
                  $t49978 = ($t49977 / span);
                }
                $t49979 = Arcade$Vec2$scale($t49975, $t49978);
              }
            }
            return Arcade$Vec2$add($t49972, $t49979);
          }
        }
      } else {
        {
          const $rc_2703 = b.point;
          return $rc_2703;
        }
      }
    }
  }
}
const between$clo = { _0: ($_, a, b, t) => between(a, b, t) };

function scene(m) {
  {
    let vp;
    {
      const $t49980 = m.view_w;
      {
        const $t49981 = m.view_h;
        {
          const $t48495_i6778 = ($t49980 > 0.);
          {
            const $jp1191_$t48496_i6779 = ($t49981 > 0.);
            if ($t48495_i6778 === true) {
              if ($jp1191_$t48496_i6779 === true) {
                vp = ({ width: $t49980, height: $t49981 });
              } else {
                vp = ({ width: $t49980, height: 1. });
              }
            } else {
              if ($jp1191_$t48496_i6779 === true) {
                vp = ({ width: 1., height: $t49981 });
              } else {
                vp = ({ width: 1., height: 1. });
              }
            }
          }
        }
      }
    }
    {
      const $t49982 = m.shown;
      switch ($t49982.$) {
        case "None": {
          {
            const $t49983 = m.rs;
            {
              const $t49984 = m.aim;
              {
                const $t49985 = m.game;
                {
                  let $t49987;
                  {
                    const $t49986 = m.game;
                    $t49987 = $t49986.ball;
                  }
                  {
                    let $t49988;
                    {
                      const m_i14153 = m;
                      {
                        const $t49999_i14154 = m.drag;
                        switch ($t49999_i14154.$) {
                          case "None": {
                            $t49988 = { $: "HudWaiting" };
                            break;
                          }
                          case "Some": {
                            const $f50003_i14155 = $t49999_i14154._0;
                            {
                              const d_i14156 = $f50003_i14155;
                              {
                                let $t50002_i14159;
                                {
                                  const $t50000_i14157 = d_i14156.now;
                                  {
                                    const $t50001_i14158 = d_i14156.pressed;
                                    $t50002_i14159 = Arcade$Vec2$sub($t50000_i14157, $t50001_i14158);
                                  }
                                }
                                $t49988 = { $: "HudPulling", _0: $t50002_i14159 };
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
                    return Putt$Hud$frame($t49983, $t49984, $t49985, vp, $t49987, $t49988);
                  }
                }
              }
            }
          }
          break;
        }
        case "Some": {
          const $f49998 = $t49982._0;
          {
            const p = $f49998;
            {
              let at;
              {
                const $t49989 = p.turn;
                {
                  const $t49990 = $t49989.rolled;
                  {
                    const $t49991 = p.reached;
                    {
                      let $t49993;
                      {
                        const $t49992 = p.from_state;
                        $t49993 = $t49992.ball;
                      }
                      {
                        const path_i14160 = $t49990;
                        {
                          const fallback_i14162 = $t49993;
                          switch (path_i14160.$) {
                            case "Nil": {
                              at = $t49993;
                              break;
                            }
                            case "Cons": {
                              const $f49955_i14163 = path_i14160._0;
                              const $f49956_i14164 = path_i14160._1;
                              {
                                const rest_i14165 = $f49956_i14164;
                                {
                                  const a_i14166 = $f49955_i14163;
                                  {
                                    let $t49954_i14168;
                                    {
                                      const $t49953_i14167 = a_i14166.sampled_at;
                                      $t49954_i14168 = ($t49991 <= $t49953_i14167);
                                    }
                                    if ($t49954_i14168 === true) {
                                      {
                                        const $rc_2699_i14169 = a_i14166.point;
                                        at = $rc_2699_i14169;
                                      }
                                    } else {
                                      at = along(a_i14166, rest_i14165, $t49991);
                                    }
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
                  }
                }
              }
              {
                const $t49994 = m.rs;
                {
                  const $t49995 = m.aim;
                  {
                    const $t49996 = p.from_state;
                    {
                      const $t49997 = { $: "HudRolling" };
                      return Putt$Hud$frame($t49994, $t49995, $t49996, vp, at, $t49997);
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
  }
}
const scene$clo = { _0: ($_, m) => scene(m) };

function moment(m) {
  {
    const $t49999 = m.drag;
    switch ($t49999.$) {
      case "None": {
        return { $: "HudWaiting" };
        break;
      }
      case "Some": {
        const $f50003 = $t49999._0;
        {
          const d = $f50003;
          {
            let $t50002;
            {
              const $t50000 = d.now;
              {
                const $t50001 = d.pressed;
                $t50002 = Arcade$Vec2$sub($t50000, $t50001);
              }
            }
            return { $: "HudPulling", _0: $t50002 };
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
const moment$clo = { _0: ($_, m) => moment(m) };

function effect(e) {
  switch (e.$) {
    case "PfAudio": {
      const $f50004 = e._0;
      {
        const cmds = $f50004;
        {
          const cmds_i16100 = cmds;
          switch (cmds_i16100.$) {
            case "Nil": {
              return {  };
              break;
            }
            case "Cons": {
              const $f48139_i16101 = cmds_i16100._0;
              const $f48140_i16102 = cmds_i16100._1;
              {
                let $eff;
                {
                  let $t48138_i16105;
                  {
                    const $t48137_i16103 = audio_levels_get();
                    {
                      const $t49552_i6409_i16104 = { $: "$Clo_$lam0_Arcade_SynthFeed_track$0_Arcade_SynthFeed_track_R_lvl_drum_Bool_lvl_rumble_Float_List_AudioCmd_PuttCue", _0: $lam0_Arcade_SynthFeed_track$apply$0_Arcade_SynthFeed_track_R_lvl_drum_Bool_lvl_rumble_Float_List_AudioCmd_PuttCue };
                      $t48138_i16105 = List$fold_left$List_AudioCmd_PuttCue$R_lvl_drum_Bool_lvl_rumble_Float$Fn_R_lvl_drum_Bool_lvl_rumble_Float_AudioCmd_PuttCue_R_lvl_drum_Bool_lvl_rumble_Float(cmds, $t48137_i16103, $t49552_i6409_i16104);
                    }
                  }
                  {
                    const $rc_2606_i16106 = audio_levels_put$clo._0(audio_levels_put$clo, $t48138_i16105);
                    $eff = $rc_2606_i16106;
                  }
                }
              }
              {
                const $rc_2605_i16107 = audio_send$clo._0(audio_send$clo, cmds);
                return $rc_2605_i16107;
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
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
const effect$clo = { _0: ($_, e) => effect(e) };

function track_point(p) {
  {
    const $p50005 = p;
    {
      const t = p._0;
      {
        const x = p._1;
        {
          const y = p._2;
          return ({ gt: t, gx: x, gy: y });
        }
      }
    }
  }
}
const track_point$clo = { _0: ($_, p) => track_point(p) };

function place(p) {
  {
    let $t50007;
    {
      const $t50006 = p.x;
      $t50007 = Arcade$Draw$css_number($t50006);
    }
    {
      let $t50009;
      {
        const $t50008 = p.y;
        $t50009 = Arcade$Draw$css_number($t50008);
      }
      {
        const $rc_2704 = march_string_concat3($t50007, ",", $t50009);
        return $rc_2704;
      }
    }
  }
}
const place$clo = { _0: ($_, p) => place(p) };

function aim_marks(m) {
  {
    let held;
    {
      const $t50010 = m.drag;
      {
        let $t50012;
        {
          const $t50011 = m.game;
          $t50012 = $t50011.phase;
        }
        {
          let $t50013;
          $t50013 = { _0: $t50010, _1: $t50012 };
          const $f50019 = $t50013._0;
          const $f50020 = $t50013._1;
          switch ($f50019.$) {
            case "Some": {
              const $f50025 = $f50019._0;
              switch ($f50020.$) {
                case "PuttAiming": {
                  {
                    const d = $f50025;
                    {
                      const $t50014 = m.rs;
                      {
                        const $t50015 = m.aim;
                        {
                          let $t50018;
                          {
                            const $t50016 = d.now;
                            {
                              const $t50017 = d.pressed;
                              $t50018 = Arcade$Vec2$sub($t50016, $t50017);
                            }
                          }
                          held = Putt$Aim$shot_of_pull($t50014, $t50015, $t50018);
                        }
                      }
                    }
                  }
                  break;
                }
                default: {
                  held = { $: "None" };
                  break;
                }
              }
              break;
            }
            default: {
              held = { $: "None" };
              break;
            }
          }
        }
      }
    }
    switch (held.$) {
      case "None": {
        {
          const $t50034 = { _0: "data-aim-power", _1: "" };
          {
            const $t50035 = { _0: "data-aim-reach", _1: "" };
            {
              const $t50036 = { _0: "data-aim-holes", _1: "" };
              {
                const $t50037 = { $: "Nil" };
                {
                  const $t50038 = { $: "Cons", _0: $t50036, _1: $t50037 };
                  {
                    const $t50039 = { $: "Cons", _0: $t50035, _1: $t50038 };
                    return { $: "Cons", _0: $t50034, _1: $t50039 };
                  }
                }
              }
            }
          }
        }
        break;
      }
      case "Some": {
        const $f50058 = held._0;
        {
          const shot = $f50058;
          {
            let seen;
            {
              const $t50040 = m.rs;
              {
                const $t50041 = m.aim;
                {
                  let $t50043;
                  {
                    const $t50042 = m.game;
                    $t50043 = Putt$Rules$current($t50042);
                  }
                  {
                    let $t50045;
                    {
                      const $t50044 = m.game;
                      $t50045 = $t50044.ball;
                    }
                    seen = Putt$Aim$preview($t50040, $t50041, $t50043, $t50045, shot);
                  }
                }
              }
            }
            {
              let $t50047;
              {
                const $t50046 = shot.power;
                $t50047 = Arcade$Draw$css_number($t50046);
              }
              {
                const $t50048 = { _0: "data-aim-power", _1: $t50047 };
                {
                  let $t50050;
                  {
                    const $t50049 = seen.reach;
                    $t50050 = Arcade$Draw$css_number($t50049);
                  }
                  {
                    const $t50051 = { _0: "data-aim-reach", _1: $t50050 };
                    {
                      let $t50053;
                      {
                        const $t50052 = seen.holes;
                        if ($t50052 === true) {
                          $t50053 = "1";
                        } else {
                          $t50053 = "0";
                        }
                      }
                      {
                        const $t50054 = { _0: "data-aim-holes", _1: $t50053 };
                        {
                          const $t50055 = { $: "Nil" };
                          {
                            const $t50056 = { $: "Cons", _0: $t50054, _1: $t50055 };
                            {
                              const $t50057 = { $: "Cons", _0: $t50051, _1: $t50056 };
                              {
                                const $rc_2706 = { $: "Cons", _0: $t50048, _1: $t50057 };
                                return $rc_2706;
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
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const aim_marks$clo = { _0: ($_, m) => aim_marks(m) };

function marks(m) {
  {
    let rolling;
    {
      const $t50059 = m.shown;
      switch ($t50059.$) {
        case "Some": {
          const $f50060 = $t50059._0;
          rolling = "1";
          break;
        }
        case "None": {
          rolling = "0";
          break;
        }
        default: {
          throw new Error("non-exhaustive pattern match");
          break;
        }
      }
    }
    {
      let h;
      {
        const $t50061 = m.game;
        h = Putt$Rules$current($t50061);
      }
      {
        let vp;
        {
          const $t50062 = m.view_w;
          {
            const $t50063 = m.view_h;
            {
              const $t48495_i6807 = ($t50062 > 0.);
              {
                const $jp1191_$t48496_i6808 = ($t50063 > 0.);
                if ($t48495_i6807 === true) {
                  if ($jp1191_$t48496_i6808 === true) {
                    vp = ({ width: $t50062, height: $t50063 });
                  } else {
                    vp = ({ width: $t50062, height: 1. });
                  }
                } else {
                  if ($jp1191_$t48496_i6808 === true) {
                    vp = ({ width: 1., height: $t50063 });
                  } else {
                    vp = ({ width: 1., height: 1. });
                  }
                }
              }
            }
          }
        }
        {
          let l;
          {
            const $t50064 = m.rs;
            l = Putt$Hud$projection($t50064, h, vp);
          }
          {
            let result;
            {
              let $t50066;
              {
                const $t50065 = m.game;
                $t50066 = $t50065.phase;
              }
              switch ($t50066.$) {
                case "PuttAiming": {
                  result = "";
                  break;
                }
                case "PuttHoleDone": {
                  {
                    let $t50068;
                    {
                      const $t50067 = m.game;
                      $t50068 = Putt$Hud$holed($t50067);
                    }
                    if ($t50068 === true) {
                      result = "holed";
                    } else {
                      result = "picked-up";
                    }
                  }
                  break;
                }
                case "PuttCourseDone": {
                  result = "course";
                  break;
                }
                default: {
                  throw new Error("non-exhaustive pattern match");
                  break;
                }
              }
            }
            {
              let $t50071;
              {
                let $t50070;
                {
                  const $t50069 = m.game;
                  $t50070 = $t50069.phase;
                }
                switch ($t50070.$) {
                  case "PuttAiming": {
                    $t50071 = "aiming";
                    break;
                  }
                  case "PuttHoleDone": {
                    $t50071 = "hole-done";
                    break;
                  }
                  case "PuttCourseDone": {
                    $t50071 = "course-done";
                    break;
                  }
                  default: {
                    throw new Error("non-exhaustive pattern match");
                    break;
                  }
                }
              }
              {
                const $t50072 = { _0: "data-phase", _1: $t50071 };
                {
                  let $t50076;
                  {
                    let $t50075;
                    {
                      let $t50074;
                      {
                        const $t50073 = m.game;
                        $t50074 = $t50073.hole;
                      }
                      $t50075 = (($t50074 + 1) < 4611686018427387904 && ($t50074 + 1) >= -4611686018427387904 ? ($t50074 + 1) : march_int_ovf(($t50074 + 1), 0));
                    }
                    $t50076 = String($t50075);
                  }
                  {
                    const $t50077 = { _0: "data-hole", _1: $t50076 };
                    {
                      let $t50079;
                      {
                        const $t50078 = Putt$Course$hole_count();
                        $t50079 = String($t50078);
                      }
                      {
                        const $t50080 = { _0: "data-holes", _1: $t50079 };
                        {
                          let $t50083;
                          {
                            let $t50082;
                            {
                              const $t50081 = m.game;
                              $t50082 = $t50081.strokes;
                            }
                            $t50083 = String($t50082);
                          }
                          {
                            const $t50084 = { _0: "data-strokes", _1: $t50083 };
                            {
                              const $t50085 = { _0: "data-rolling", _1: rolling };
                              {
                                let $t50087;
                                {
                                  const $t50086 = m.putts;
                                  $t50087 = String($t50086);
                                }
                                {
                                  const $t50088 = { _0: "data-putts", _1: $t50087 };
                                  {
                                    let $t50091;
                                    {
                                      let $t50090;
                                      {
                                        const $t50089 = m.game;
                                        $t50090 = $t50089.ball;
                                      }
                                      $t50091 = place($t50090);
                                    }
                                    {
                                      const $t50092 = { _0: "data-ball", _1: $t50091 };
                                      {
                                        let $t50094;
                                        {
                                          const $t50093 = h.cup;
                                          $t50094 = place($t50093);
                                        }
                                        {
                                          const $t50095 = { _0: "data-cup", _1: $t50094 };
                                          {
                                            let $t50100;
                                            {
                                              let $t50099;
                                              {
                                                const $t50096 = m.rs;
                                                {
                                                  let $t50098;
                                                  {
                                                    const $t50097 = m.game;
                                                    $t50098 = $t50097.ball;
                                                  }
                                                  $t50099 = Putt$View$px($t50096, l, $t50098);
                                                }
                                              }
                                              $t50100 = place($t50099);
                                            }
                                            {
                                              const $t50101 = { _0: "data-ball-px", _1: $t50100 };
                                              {
                                                let $t50103;
                                                {
                                                  const $t50102 = Arcade$Camera$pixels_per_metre(l, 10.);
                                                  $t50103 = Arcade$Draw$css_number($t50102);
                                                }
                                                {
                                                  const $t50104 = { _0: "data-px-per-m", _1: $t50103 };
                                                  {
                                                    let $t50108;
                                                    {
                                                      const $t50105 = m.game;
                                                      {
                                                        const $t50106 = $t50105.card;
                                                        {
                                                          let $t50107;
                                                          {
                                                            const xs_i16108 = $t50106;
                                                            {
                                                              const f_i16109 = int_to_string;
                                                              switch (xs_i16108.$) {
                                                                case "Nil": {
                                                                  $t50107 = { $: "Nil" };
                                                                  break;
                                                                }
                                                                case "Cons": {
                                                                  const $f1112_i16110 = xs_i16108._0;
                                                                  const $f1113_i16111 = xs_i16108._1;
                                                                  {
                                                                    const t_i16112 = $f1113_i16111;
                                                                    {
                                                                      const h_i16113 = $f1112_i16110;
                                                                      {
                                                                        let $t1110_i16114;
                                                                        $t1110_i16114 = f_i16109._0(f_i16109, h_i16113);
                                                                        {
                                                                          const $trmc15_i16115 = { $: "Cons", _0: $t1110_i16114, _1: null };
                                                                          List$map$dps$List_Int$Fn_Int_String$List_String(t_i16112, f_i16109, $trmc15_i16115);
                                                                          $t50107 = $trmc15_i16115;
                                                                        }
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
                                                          {
                                                            const $rc_2710 = march_string_join($t50107, ",");
                                                            $t50108 = $rc_2710;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    {
                                                      const $t50109 = { _0: "data-card", _1: $t50108 };
                                                      {
                                                        let $t50112;
                                                        {
                                                          let $t50111;
                                                          {
                                                            const $t50110 = m.game;
                                                            $t50111 = Putt$Rules$total($t50110);
                                                          }
                                                          $t50112 = String($t50111);
                                                        }
                                                        {
                                                          const $t50113 = { _0: "data-total", _1: $t50112 };
                                                          {
                                                            const $t50114 = { _0: "data-result", _1: result };
                                                            {
                                                              let $t50127;
                                                              {
                                                                let $t50116;
                                                                {
                                                                  const $t50115 = m.game;
                                                                  $t50116 = Putt$Hud$hole_line($t50115);
                                                                }
                                                                {
                                                                  let $t50118;
                                                                  {
                                                                    const $t50117 = m.game;
                                                                    $t50118 = Putt$Hud$par_line($t50117);
                                                                  }
                                                                  {
                                                                    let $t50120;
                                                                    {
                                                                      const $t50119 = m.game;
                                                                      $t50120 = Putt$Hud$stroke_line($t50119);
                                                                    }
                                                                    {
                                                                      let $t50122;
                                                                      {
                                                                        const $t50121 = m.game;
                                                                        $t50122 = Putt$Hud$score_line($t50121);
                                                                      }
                                                                      {
                                                                        let $t50126;
                                                                        {
                                                                          const $t50123 = m.rs;
                                                                          {
                                                                            let $t50125;
                                                                            {
                                                                              const $t50124 = m.game;
                                                                              $t50125 = $t50124.wind;
                                                                            }
                                                                            $t50126 = Putt$Hud$wind_line($t50123, $t50125);
                                                                          }
                                                                        }
                                                                        {
                                                                          const $rc_2709 = march_string_concat_n($t50116, " | ", $t50118, " | ", $t50120, " | ", $t50122, " | ", $t50126);
                                                                          $t50127 = $rc_2709;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              {
                                                                const $t50128 = { _0: "data-hud", _1: $t50127 };
                                                                {
                                                                  let $t50130;
                                                                  {
                                                                    const $t50129 = m.game;
                                                                    $t50130 = Putt$Hud$card_title($t50129);
                                                                  }
                                                                  {
                                                                    const $t50131 = { _0: "data-card-title", _1: $t50130 };
                                                                    {
                                                                      let $t50134;
                                                                      {
                                                                        let $t50133;
                                                                        {
                                                                          let $t50132;
                                                                          {
                                                                            let right_i6798;
                                                                            {
                                                                              let $t46885_i6797;
                                                                              {
                                                                                let $t46882_i6794;
                                                                                {
                                                                                  const $t46881_i6793 = vp.width;
                                                                                  $t46882_i6794 = ($t46881_i6793 / 2.);
                                                                                }
                                                                                {
                                                                                  let $t46884_i6796;
                                                                                  {
                                                                                    const $t46883_i6795 = Putt$Hud$column(vp);
                                                                                    $t46884_i6796 = ($t46883_i6795 / 2.);
                                                                                  }
                                                                                  $t46885_i6797 = ($t46882_i6794 + $t46884_i6796);
                                                                                }
                                                                              }
                                                                              right_i6798 = ($t46885_i6797 - 8.);
                                                                            }
                                                                            {
                                                                              const $t46886_i6799 = (right_i6798 - 86.);
                                                                              $t50132 = ({ left: $t46886_i6799, top: 68., right: right_i6798, bottom: 96. });
                                                                            }
                                                                          }
                                                                          $t50133 = Putt$Hud$box_centre($t50132);
                                                                        }
                                                                        $t50134 = place($t50133);
                                                                      }
                                                                      {
                                                                        const $t50135 = { _0: "data-new-game", _1: $t50134 };
                                                                        {
                                                                          let $t50138;
                                                                          {
                                                                            let $t50137;
                                                                            {
                                                                              const $t50136 = m.aim;
                                                                              $t50137 = $t50136.full;
                                                                            }
                                                                            $t50138 = Arcade$Draw$css_number($t50137);
                                                                          }
                                                                          {
                                                                            const $t50139 = { _0: "data-pull-full", _1: $t50138 };
                                                                            {
                                                                              const $t50140 = { $: "Nil" };
                                                                              {
                                                                                const $t50141 = { $: "Cons", _0: $t50139, _1: $t50140 };
                                                                                {
                                                                                  const $t50142 = { $: "Cons", _0: $t50135, _1: $t50141 };
                                                                                  {
                                                                                    const $t50143 = { $: "Cons", _0: $t50131, _1: $t50142 };
                                                                                    {
                                                                                      const $t50144 = { $: "Cons", _0: $t50128, _1: $t50143 };
                                                                                      {
                                                                                        const $t50145 = { $: "Cons", _0: $t50114, _1: $t50144 };
                                                                                        {
                                                                                          const $t50146 = { $: "Cons", _0: $t50113, _1: $t50145 };
                                                                                          {
                                                                                            const $t50147 = { $: "Cons", _0: $t50109, _1: $t50146 };
                                                                                            {
                                                                                              const $t50148 = { $: "Cons", _0: $t50104, _1: $t50147 };
                                                                                              {
                                                                                                const $t50149 = { $: "Cons", _0: $t50101, _1: $t50148 };
                                                                                                {
                                                                                                  const $t50150 = { $: "Cons", _0: $t50095, _1: $t50149 };
                                                                                                  {
                                                                                                    const $t50151 = { $: "Cons", _0: $t50092, _1: $t50150 };
                                                                                                    {
                                                                                                      const $t50152 = { $: "Cons", _0: $t50088, _1: $t50151 };
                                                                                                      {
                                                                                                        const $t50153 = { $: "Cons", _0: $t50085, _1: $t50152 };
                                                                                                        {
                                                                                                          const $t50154 = { $: "Cons", _0: $t50084, _1: $t50153 };
                                                                                                          {
                                                                                                            const $t50155 = { $: "Cons", _0: $t50080, _1: $t50154 };
                                                                                                            {
                                                                                                              const $t50156 = { $: "Cons", _0: $t50077, _1: $t50155 };
                                                                                                              {
                                                                                                                const $t50157 = { $: "Cons", _0: $t50072, _1: $t50156 };
                                                                                                                {
                                                                                                                  const $t50158 = aim_marks(m);
                                                                                                                  {
                                                                                                                    const xs_i14171 = $t50157;
                                                                                                                    {
                                                                                                                      const ys_i14172 = $t50158;
                                                                                                                      switch (xs_i14171.$) {
                                                                                                                        case "Nil": {
                                                                                                                          return $t50158;
                                                                                                                          break;
                                                                                                                        }
                                                                                                                        case "Cons": {
                                                                                                                          const $f1104_i14173 = xs_i14171._0;
                                                                                                                          const $f1105_i14174 = xs_i14171._1;
                                                                                                                          {
                                                                                                                            const t_i14175 = $f1105_i14174;
                                                                                                                            {
                                                                                                                              const h_i14176 = $f1104_i14173;
                                                                                                                              {
                                                                                                                                const $trmc11_i14177 = { $: "Cons", _0: h_i14176, _1: null };
                                                                                                                                List$append$dps$List_T_String_String$List_T_String_String$List_T_String_String(t_i14175, $t50158, $trmc11_i14177);
                                                                                                                                return $trmc11_i14177;
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
          }
        }
      }
    }
  }
}
const marks$clo = { _0: ($_, m) => marks(m) };

function main(_f) {
  {
    let $t50202;
    {
      const $t50201 = { $: "$Clo_$lam0_main$0_main", _0: $lam0_main$apply$0_main };
      {
        const make_i14180 = $t50201;
        {
          const canvas_i14181 = Arcade$Web$Runtime$element("green", "canvas");
          {
            let $t48373_i14182;
            {
              const node_i16116 = canvas_i14181;
              {
                const $rc_2466_i16117 = canvas_get_context$clo._0(canvas_get_context$clo, canvas_i14181);
                $t48373_i14182 = $rc_2466_i16117;
              }
            }
            switch ($t48373_i14182.$) {
              case "Some": {
                const $f48376_i14183 = $t48373_i14182._0;
                {
                  const ctx_i14184 = $f48376_i14183;
                  {
                    let $t48375_i14186;
                    {
                      const $t48374_i14185 = make_i14180._0(make_i14180);
                      $t48375_i14186 = Arcade$Web$Runtime$start$Node$Context$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(canvas_i14181, ctx_i14184, $t48374_i14185);
                    }
                    $t50202 = { $: "Ok", _0: $t48375_i14186 };
                  }
                }
                break;
              }
              case "None": {
                $t50202 = { $: "Err", _0: "this browser gives no 2D canvas context" };
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
    }
    switch ($t50202.$) {
      case "Ok": {
        const $f50203 = $t50202._0;
        return {  };
        break;
      }
      case "Err": {
        const $f50204 = $t50202._0;
        {
          const why = $f50204;
          undefined;
          return (() => { throw new Error(why); })();
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const main$clo = { _0: ($_, _f) => main(_f) };

function panic(msg) {
  return (() => { throw new Error(msg); })();
}
const panic$clo = { _0: ($_, msg) => panic(msg) };

function List$drop$List_Int$Int($tco_a0, $tco_a1) {
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
const List$drop$List_Int$Int$clo = { _0: ($_, xs, n) => List$drop$List_Int$Int(xs, n) };

function List$fold_left$List_Int$Int$Fn_Int_Int_Int($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            let h;
            h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_Int$Int$Fn_Int_Int_Int$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_Int$Int$Fn_Int_Int_Int(xs, acc, f) };

function List$drop$List_String$Int($tco_a0, $tco_a1) {
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
const List$drop$List_String$Int$clo = { _0: ($_, xs, n) => List$drop$List_String$Int(xs, n) };

function List$nth_opt$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const n = $tco_a1;
    switch (xs.$) {
      case "Nil": {
        return { $: "None" };
        break;
      }
      case "Cons": {
        const $f1082 = xs._0;
        const $f1083 = xs._1;
        {
          const t = $f1083;
          {
            const h = $f1082;
            {
              const $t1080 = (n === 0);
              if ($t1080 === true) {
                return { $: "Some", _0: h };
              } else {
                {
                  const $t1081 = ((n - 1) < 4611686018427387904 && (n - 1) >= -4611686018427387904 ? (n - 1) : march_int_ovf((n - 1), 1));
                  {
                    $tco_a0 = t;
                    $tco_a1 = $t1081;
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
const List$nth_opt$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$clo = { _0: ($_, xs, n) => List$nth_opt$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int(xs, n) };

function List$fold_left$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$Fn_Int_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_Int($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$Fn_Int_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_Int$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$Fn_Int_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_Int(xs, acc, f) };

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

function List$append$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue(xs, ys) {
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
            List$append$dps$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue(t, ys, $trmc11);
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
const List$append$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue$clo = { _0: ($_, xs, ys) => List$append$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue(xs, ys) };

function List$append$List_DrawOp$List_DrawOp(xs, ys) {
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
            List$append$dps$List_DrawOp$List_DrawOp$List_DrawOp(t, ys, $trmc11);
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
const List$append$List_DrawOp$List_DrawOp$clo = { _0: ($_, xs, ys) => List$append$List_DrawOp$List_DrawOp(xs, ys) };

function List$drop$List_Option_Int$Int($tco_a0, $tco_a1) {
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
const List$drop$List_Option_Int$Int$clo = { _0: ($_, xs, n) => List$drop$List_Option_Int$Int(xs, n) };

function Arcade$Physics$Sim$run_steps$R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float$Float$Fn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Turn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float($tco_a0, $tco_a1, $tco_a2, $tco_a3, $tco_a4, $tco_a5) {
  __tco: for (;;) {
    const cx = $tco_a0;
    const max_t = $tco_a1;
    const time_of = $tco_a2;
    const step = $tco_a3;
    const stop = $tco_a4;
    const s0 = $tco_a5;
    {
      let $t47439;
      {
        let $t47438;
        $t47438 = time_of._0(time_of, s0);
        $t47439 = ($t47438 < max_t);
      }
      if ($t47439 === true) {
        {
          let $t47440;
          $t47440 = step._0(step, cx, s0);
          switch ($t47440.$) {
            case "TurnOn": {
              const $f47441 = $t47440._0;
              {
                const s = $f47441;
                {
                  $tco_a0 = cx;
                  $tco_a1 = max_t;
                  $tco_a2 = time_of;
                  $tco_a3 = step;
                  $tco_a4 = stop;
                  $tco_a5 = s;
                  continue __tco;
                }
              }
              break;
            }
            case "TurnStop": {
              const $f47442 = $t47440._0;
              {
                const s = $f47442;
                return stop._0(stop, cx, s);
              }
              break;
            }
            case "TurnDone": {
              const $f47443 = $t47440._0;
              {
                const r = $f47443;
                return r;
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
      } else {
        return stop._0(stop, cx, s0);
      }
    }
    return undefined;
  }
}
const Arcade$Physics$Sim$run_steps$R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float$Float$Fn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Turn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float$clo = { _0: ($_, cx, max_t, time_of, step, stop, s0) => Arcade$Physics$Sim$run_steps$R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float$Float$Fn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_Turn_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$Fn_R_hole_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float_struck_from_R_x_Float_y_Float_tune_R_ball_radius_Float_block_bounce_Float_capture_speed_Float_cup_radius_Float_dt_Float_green_drag_Float_max_power_Float_max_time_Float_min_power_Float_power_per_speed_Float_rest_speed_Float_sand_drag_Float_stroke_cap_Int_trail_every_Int_wall_bounce_Float_wind_max_Float_wind_R_x_Float_y_Float_R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float_R_holed_Bool_met_List_R_at_Float_ev_PuttBump_path_List_R_point_R_x_Float_y_Float_sampled_at_Float_rest_R_x_Float_y_Float_took_Float$R_at_R_x_Float_y_Float_bumps_List_R_at_Float_ev_PuttBump_clock_R_step_Int_t_Float_in_sand_Bool_over_cup_Bool_trail_List_R_point_R_x_Float_y_Float_sampled_at_Float_vel_R_x_Float_y_Float(cx, max_t, time_of, step, stop, s0) };

function unreachable() {
  return (() => { throw new Error("panic"); })();
}
const unreachable$clo = { _0: ($_) => unreachable() };

function List$append$List_PuttEvent$List_PuttEvent(xs, ys) {
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
            List$append$dps$List_PuttEvent$List_PuttEvent$List_PuttEvent(t, ys, $trmc11);
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
const List$append$List_PuttEvent$List_PuttEvent$clo = { _0: ($_, xs, ys) => List$append$List_PuttEvent$List_PuttEvent(xs, ys) };

function List$append$List_PathStep$List_PathStep(xs, ys) {
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
            List$append$dps$List_PathStep$List_PathStep$List_PathStep(t, ys, $trmc11);
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
const List$append$List_PathStep$List_PathStep$clo = { _0: ($_, xs, ys) => List$append$List_PathStep$List_PathStep(xs, ys) };

function List$fold_left$List_DrawOp$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_DrawOp_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_DrawOp$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_DrawOp_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_DrawOp$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_DrawOp_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(xs, acc, f) };

function List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_CanvasCall$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_CanvasCall_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(xs, acc, f) };

function List$fold_left$List_List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_List_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_List_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_List_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(xs, acc, f) };

function List$fold_left$List_PathStep$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_PathStep_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_PathStep$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_PathStep_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_PathStep$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_PathStep_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(xs, acc, f) };

function List$fold_left$List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_R_x_Float_y_Float$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_R_x_Float_y_Float_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float(xs, acc, f) };

function List$map$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float(xs, f) {
  switch (xs.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f1112 = xs._0;
      const $f1113 = xs._1;
      {
        const t = $f1113;
        {
          const h = $f1112;
          {
            let $t1110;
            $t1110 = f._0(f, h);
            {
              const $trmc15 = { $: "Cons", _0: $t1110, _1: null };
              List$map$dps$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float$List_R_gt_Float_gx_Float_gy_Float(t, f, $trmc15);
              return $trmc15;
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
const List$map$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float$clo = { _0: ($_, xs, f) => List$map$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float(xs, f) };

function List$reverse_onto$List_Int$List_Int($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_Int$List_Int$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_Int$List_Int(lst, acc) };

function List$reverse_onto$List_String$List_String($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_String$List_String$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_String$List_String(lst, acc) };

function List$map$dps$List_Int$Fn_Int_String$List_String($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const f = $tco_a1;
    const $dst = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        {
          const $trmc13 = { $: "Nil" };
          return ($dst._1 = $trmc13, undefined);
        }
        break;
      }
      case "Cons": {
        const $f1112 = xs._0;
        const $f1113 = xs._1;
        {
          const t = $f1113;
          {
            const h = $f1112;
            {
              let $t1110;
              $t1110 = f._0(f, h);
              {
                const $trmc14 = { $: "Cons", _0: $t1110, _1: null };
                ($dst._1 = $trmc14, undefined);
                {
                  $tco_a0 = t;
                  $tco_a1 = f;
                  $tco_a2 = $trmc14;
                  continue __tco;
                }
              }
            }
          }
        }
        break;
      }
      default: {
        {
          const $trmc12 = (() => { throw new Error("non-exhaustive pattern match"); })();
          return ($dst._1 = $trmc12, undefined);
        }
      }
    }
    return undefined;
  }
}
const List$map$dps$List_Int$Fn_Int_String$List_String$clo = { _0: ($_, xs, f, $dst) => List$map$dps$List_Int$Fn_Int_String$List_String(xs, f, $dst) };

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

function List$append$dps$List_Int$List_Int$List_Int($tco_a0, $tco_a1, $tco_a2) {
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
const List$append$dps$List_Int$List_Int$List_Int$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_Int$List_Int$List_Int(xs, ys, $dst) };

function List$length_onto$List_Int$Int($tco_a0, $tco_a1) {
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
const List$length_onto$List_Int$Int$clo = { _0: ($_, lst, acc) => List$length_onto$List_Int$Int(lst, acc) };

function List$take_onto$List_Int$Int$List_Int($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const lst = $tco_a0;
    const k = $tco_a1;
    const acc = $tco_a2;
    {
      const $t1344 = (k <= 0);
      if ($t1344 === true) {
        {
          const $t1095_i7584 = { $: "Nil" };
          return List$reverse_onto$List_Int$List_Int(acc, $t1095_i7584);
        }
      } else {
        switch (lst.$) {
          case "Nil": {
            {
              const $t1095_i7582 = { $: "Nil" };
              return List$reverse_onto$List_Int$List_Int(acc, $t1095_i7582);
            }
            break;
          }
          case "Cons": {
            const $f1347 = lst._0;
            const $f1348 = lst._1;
            {
              const t = $f1348;
              {
                const h = $f1347;
                {
                  const $t1345 = ((k - 1) < 4611686018427387904 && (k - 1) >= -4611686018427387904 ? (k - 1) : march_int_ovf((k - 1), 1));
                  {
                    const $t1346 = { $: "Cons", _0: h, _1: acc };
                    {
                      $tco_a0 = t;
                      $tco_a1 = $t1345;
                      $tco_a2 = $t1346;
                      continue __tco;
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
    }
    return undefined;
  }
}
const List$take_onto$List_Int$Int$List_Int$clo = { _0: ($_, lst, k, acc) => List$take_onto$List_Int$Int$List_Int(lst, k, acc) };

function List$take_onto$List_String$Int$List_String($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const lst = $tco_a0;
    const k = $tco_a1;
    const acc = $tco_a2;
    {
      const $t1344 = (k <= 0);
      if ($t1344 === true) {
        {
          const $t1095_i8651 = { $: "Nil" };
          return List$reverse_onto$List_String$List_String(acc, $t1095_i8651);
        }
      } else {
        switch (lst.$) {
          case "Nil": {
            {
              const $t1095_i8649 = { $: "Nil" };
              return List$reverse_onto$List_String$List_String(acc, $t1095_i8649);
            }
            break;
          }
          case "Cons": {
            const $f1347 = lst._0;
            const $f1348 = lst._1;
            {
              const t = $f1348;
              {
                const h = $f1347;
                {
                  const $t1345 = ((k - 1) < 4611686018427387904 && (k - 1) >= -4611686018427387904 ? (k - 1) : march_int_ovf((k - 1), 1));
                  {
                    const $t1346 = { $: "Cons", _0: h, _1: acc };
                    {
                      $tco_a0 = t;
                      $tco_a1 = $t1345;
                      $tco_a2 = $t1346;
                      continue __tco;
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
    }
    return undefined;
  }
}
const List$take_onto$List_String$Int$List_String$clo = { _0: ($_, lst, k, acc) => List$take_onto$List_String$Int$List_String(lst, k, acc) };

function List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_R_x_Float_y_Float$List_R_x_Float_y_Float(lst, acc) };

function List$length_onto$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int($tco_a0, $tco_a1) {
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
const List$length_onto$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int$clo = { _0: ($_, lst, acc) => List$length_onto$List_R_blocks_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_cup_R_x_Float_y_Float_gust_Float_length_Float_par_Int_sands_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_slopes_List_R_area_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_pull_R_x_Float_y_Float_tee_R_x_Float_y_Float_title_String_waters_List_R_hi_R_x_Float_y_Float_lo_R_x_Float_y_Float_width_Float$Int(lst, acc) };

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

function List$append$dps$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue($tco_a0, $tco_a1, $tco_a2) {
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
const List$append$dps$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue$List_AudioCmd_PuttCue(xs, ys, $dst) };

function List$reverse_onto$List_Option_Int$List_Option_Int($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_Option_Int$List_Option_Int$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_Option_Int$List_Option_Int(lst, acc) };

function List$append$dps$List_DrawOp$List_DrawOp$List_DrawOp($tco_a0, $tco_a1, $tco_a2) {
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
const List$append$dps$List_DrawOp$List_DrawOp$List_DrawOp$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_DrawOp$List_DrawOp$List_DrawOp(xs, ys, $dst) };

function List$reverse_onto$List_DrawOp$List_DrawOp($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_DrawOp$List_DrawOp$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_DrawOp$List_DrawOp(lst, acc) };

function List$reverse_onto$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int(lst, acc) };

function List$take_onto$List_Option_Int$Int$List_Option_Int($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const lst = $tco_a0;
    const k = $tco_a1;
    const acc = $tco_a2;
    {
      const $t1344 = (k <= 0);
      if ($t1344 === true) {
        {
          const $t1095_i8655 = { $: "Nil" };
          return List$reverse_onto$List_Option_Int$List_Option_Int(acc, $t1095_i8655);
        }
      } else {
        switch (lst.$) {
          case "Nil": {
            {
              const $t1095_i8653 = { $: "Nil" };
              return List$reverse_onto$List_Option_Int$List_Option_Int(acc, $t1095_i8653);
            }
            break;
          }
          case "Cons": {
            const $f1347 = lst._0;
            const $f1348 = lst._1;
            {
              const t = $f1348;
              {
                const h = $f1347;
                {
                  const $t1345 = ((k - 1) < 4611686018427387904 && (k - 1) >= -4611686018427387904 ? (k - 1) : march_int_ovf((k - 1), 1));
                  {
                    const $t1346 = { $: "Cons", _0: h, _1: acc };
                    {
                      $tco_a0 = t;
                      $tco_a1 = $t1345;
                      $tco_a2 = $t1346;
                      continue __tco;
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
    }
    return undefined;
  }
}
const List$take_onto$List_Option_Int$Int$List_Option_Int$clo = { _0: ($_, lst, k, acc) => List$take_onto$List_Option_Int$Int$List_Option_Int(lst, k, acc) };

function List$append$dps$List_PuttEvent$List_PuttEvent$List_PuttEvent($tco_a0, $tco_a1, $tco_a2) {
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
const List$append$dps$List_PuttEvent$List_PuttEvent$List_PuttEvent$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_PuttEvent$List_PuttEvent$List_PuttEvent(xs, ys, $dst) };

function List$reverse_onto$List_PuttEvent$List_PuttEvent($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_PuttEvent$List_PuttEvent$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_PuttEvent$List_PuttEvent(lst, acc) };

function List$append$dps$List_PathStep$List_PathStep$List_PathStep($tco_a0, $tco_a1, $tco_a2) {
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
const List$append$dps$List_PathStep$List_PathStep$List_PathStep$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_PathStep$List_PathStep$List_PathStep(xs, ys, $dst) };

function List$fold_left$List_AudioCmd_PuttCue$R_lvl_drum_Bool_lvl_rumble_Float$Fn_R_lvl_drum_Bool_lvl_rumble_Float_AudioCmd_PuttCue_R_lvl_drum_Bool_lvl_rumble_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const acc = $tco_a1;
    const f = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f1198 = xs._0;
        const $f1199 = xs._1;
        {
          const t = $f1199;
          {
            const h = $f1198;
            {
              let $t1197;
              $t1197 = f._0(f, acc, h);
              {
                $tco_a0 = t;
                $tco_a1 = $t1197;
                $tco_a2 = f;
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
const List$fold_left$List_AudioCmd_PuttCue$R_lvl_drum_Bool_lvl_rumble_Float$Fn_R_lvl_drum_Bool_lvl_rumble_Float_AudioCmd_PuttCue_R_lvl_drum_Bool_lvl_rumble_Float$clo = { _0: ($_, xs, acc, f) => List$fold_left$List_AudioCmd_PuttCue$R_lvl_drum_Bool_lvl_rumble_Float$Fn_R_lvl_drum_Bool_lvl_rumble_Float_AudioCmd_PuttCue_R_lvl_drum_Bool_lvl_rumble_Float(xs, acc, f) };

function List$reverse_onto$List_CanvasCall$List_CanvasCall($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_CanvasCall$List_CanvasCall$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_CanvasCall$List_CanvasCall(lst, acc) };

function List$map$dps$List_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float$Fn_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float_R_stop_at_Float_stop_css_String$List_R_stop_at_Float_stop_css_String($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const f = $tco_a1;
    const $dst = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        {
          const $trmc13 = { $: "Nil" };
          return ($dst._1 = $trmc13, undefined);
        }
        break;
      }
      case "Cons": {
        const $f1112 = xs._0;
        const $f1113 = xs._1;
        {
          const t = $f1113;
          {
            const h = $f1112;
            {
              let $t1110;
              $t1110 = f._0(f, h);
              {
                const $trmc14 = { $: "Cons", _0: $t1110, _1: null };
                ($dst._1 = $trmc14, undefined);
                {
                  $tco_a0 = t;
                  $tco_a1 = f;
                  $tco_a2 = $trmc14;
                  continue __tco;
                }
              }
            }
          }
        }
        break;
      }
      default: {
        {
          const $trmc12 = (() => { throw new Error("non-exhaustive pattern match"); })();
          return ($dst._1 = $trmc12, undefined);
        }
      }
    }
    return undefined;
  }
}
const List$map$dps$List_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float$Fn_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float_R_stop_at_Float_stop_css_String$List_R_stop_at_Float_stop_css_String$clo = { _0: ($_, xs, f, $dst) => List$map$dps$List_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float$Fn_R_colour_R_alpha_Float_blue_Int_green_Int_red_Int_offset_Float_R_stop_at_Float_stop_css_String$List_R_stop_at_Float_stop_css_String(xs, f, $dst) };

function List$map$dps$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float$List_R_gt_Float_gx_Float_gy_Float($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const xs = $tco_a0;
    const f = $tco_a1;
    const $dst = $tco_a2;
    switch (xs.$) {
      case "Nil": {
        {
          const $trmc13 = { $: "Nil" };
          return ($dst._1 = $trmc13, undefined);
        }
        break;
      }
      case "Cons": {
        const $f1112 = xs._0;
        const $f1113 = xs._1;
        {
          const t = $f1113;
          {
            const h = $f1112;
            {
              let $t1110;
              $t1110 = f._0(f, h);
              {
                const $trmc14 = { $: "Cons", _0: $t1110, _1: null };
                ($dst._1 = $trmc14, undefined);
                {
                  $tco_a0 = t;
                  $tco_a1 = f;
                  $tco_a2 = $trmc14;
                  continue __tco;
                }
              }
            }
          }
        }
        break;
      }
      default: {
        {
          const $trmc12 = (() => { throw new Error("non-exhaustive pattern match"); })();
          return ($dst._1 = $trmc12, undefined);
        }
      }
    }
    return undefined;
  }
}
const List$map$dps$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float$List_R_gt_Float_gx_Float_gy_Float$clo = { _0: ($_, xs, f, $dst) => List$map$dps$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float$List_R_gt_Float_gx_Float_gy_Float(xs, f, $dst) };

function List$append$dps$List_T_String_String$List_T_String_String$List_T_String_String($tco_a0, $tco_a1, $tco_a2) {
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
const List$append$dps$List_T_String_String$List_T_String_String$List_T_String_String$clo = { _0: ($_, xs, ys, $dst) => List$append$dps$List_T_String_String$List_T_String_String$List_T_String_String(xs, ys, $dst) };

function Arcade$Web$Runtime$start$Node$Context$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(canvas, ctx, h) {
  {
    const $p48410 = glue_view_size();
    {
      const w = $p48410._0;
      {
        const ht = $p48410._1;
        {
          const dpr = glue_device_pixel_ratio();
          {
            const $p48409 = glue_seed_limbs();
            {
              const hi = $p48409._0;
              {
                const lo = $p48409._1;
                {
                  let $eff;
                  $eff = Arcade$Web$Glue$size_canvas(canvas, w, ht, dpr);
                }
                {
                  let $p48408;
                  {
                    const $t48377 = h.hook_boot;
                    {
                      let $t48378;
                      {
                        let $t49019_i8665;
                        {
                          let $t49012_i16000;
                          {
                            const $t49011_i15999 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                            $t49012_i16000 = (($t49011_i15999 - 1) < 4611686018427387904 && ($t49011_i15999 - 1) >= -4611686018427387904 ? ($t49011_i15999 - 1) : march_int_ovf(($t49011_i15999 - 1), 1));
                          }
                          $t49019_i8665 = ((hi | 0) === hi && ($t49012_i16000 | 0) === $t49012_i16000 ? (hi & $t49012_i16000) : march_int_and(hi, $t49012_i16000));
                        }
                        {
                          let $t49020_i8666;
                          {
                            let $t49012_i15997;
                            {
                              const $t49011_i15996 = ((65536 * 65536) < 4611686018427387904 && (65536 * 65536) >= -4611686018427387904 ? (65536 * 65536) : march_int_ovf((65536 * 65536), 2));
                              $t49012_i15997 = (($t49011_i15996 - 1) < 4611686018427387904 && ($t49011_i15996 - 1) >= -4611686018427387904 ? ($t49011_i15996 - 1) : march_int_ovf(($t49011_i15996 - 1), 1));
                            }
                            $t49020_i8666 = ((lo | 0) === lo && ($t49012_i15997 | 0) === $t49012_i15997 ? (lo & $t49012_i15997) : march_int_and(lo, $t49012_i15997));
                          }
                          $t48378 = ({ hi: $t49019_i8665, lo: $t49020_i8666 });
                        }
                      }
                      $p48408 = $t48377._0($t48377, w, ht, $t48378);
                    }
                  }
                  {
                    const m = $p48408._0;
                    {
                      const effects = $p48408._1;
                      {
                        let s;
                        s = ({ run_model: m, run_canvas: canvas, run_ctx: ctx, run_width: w, run_height: ht, run_dpr: dpr });
                        {
                          let $eff;
                          $eff = Arcade$Web$Runtime$run_put$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$R_run_canvas_Node_run_ctx_Context_run_dpr_Float_run_height_Float_run_model_Held_run_width_Float(h, s);
                        }
                        {
                          let $eff;
                          {
                            const $t48379 = h.hook_perform;
                            {
                              let $t48381;
                              $t48381 = { $: "$Clo_$lam0_Arcade_Web_Runtime_start$0_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam0_Arcade_Web_Runtime_start$apply$0_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                              $eff = $t48379._0($t48379, $t48381, effects);
                            }
                          }
                        }
                        {
                          let $eff;
                          {
                            let $t48385;
                            $t48385 = { $: "$Clo_$lam1_Arcade_Web_Runtime_start$1_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam1_Arcade_Web_Runtime_start$apply$1_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                            {
                              let $t48389;
                              $t48389 = { $: "$Clo_$lam2_Arcade_Web_Runtime_start$2_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam2_Arcade_Web_Runtime_start$apply$2_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                              {
                                let $t48393;
                                $t48393 = { $: "$Clo_$lam3_Arcade_Web_Runtime_start$3_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam3_Arcade_Web_Runtime_start$apply$3_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                                {
                                  let $t48396;
                                  $t48396 = { $: "$Clo_$lam4_Arcade_Web_Runtime_start$4_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam4_Arcade_Web_Runtime_start$apply$4_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                                  {
                                    const canvas_i14403 = canvas;
                                    {
                                      const down_i14404 = $t48385;
                                      {
                                        const move_i14405 = $t48389;
                                        {
                                          const up_i14406 = $t48393;
                                          {
                                            const cancel_i14407 = $t48396;
                                            {
                                              const $rc_2622_i14408 = input_on_pointer$clo._0(input_on_pointer$clo, canvas, down_i14404, move_i14405, up_i14406, cancel_i14407);
                                              $eff = $rc_2622_i14408;
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
                        {
                          let $eff;
                          {
                            const $t48397 = h.hook_listen;
                            {
                              let $t48399;
                              $t48399 = { $: "$Clo_$lam5_Arcade_Web_Runtime_start$5_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam5_Arcade_Web_Runtime_start$apply$5_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                              {
                                let $t48401;
                                $t48401 = { $: "$Clo_$lam6_Arcade_Web_Runtime_start$6_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam6_Arcade_Web_Runtime_start$apply$6_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                                $eff = $t48397._0($t48397, $t48399, $t48401);
                              }
                            }
                          }
                        }
                        {
                          let $eff;
                          {
                            let $t48405;
                            $t48405 = { $: "$Clo_$lam7_Arcade_Web_Runtime_start$7_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam7_Arcade_Web_Runtime_start$apply$7_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                            {
                              const cb_i14402 = $t48405;
                              $eff = glue_on_visibility$clo._0(glue_on_visibility$clo, cb_i14402);
                            }
                          }
                        }
                        {
                          const $t48407 = { $: "$Clo_$lam8_Arcade_Web_Runtime_start$8_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String", _0: $lam8_Arcade_Web_Runtime_start$apply$8_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String, _1: h };
                          return Arcade$Web$Glue$request_frame($t48407);
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
const Arcade$Web$Runtime$start$Node$Context$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, canvas, ctx, h) => Arcade$Web$Runtime$start$Node$Context$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(canvas, ctx, h) };

function List$reverse_onto$List_R_point_R_x_Float_y_Float_sampled_at_Float$List_R_point_R_x_Float_y_Float_sampled_at_Float($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_R_point_R_x_Float_y_Float_sampled_at_Float$List_R_point_R_x_Float_y_Float_sampled_at_Float$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_R_point_R_x_Float_y_Float_sampled_at_Float$List_R_point_R_x_Float_y_Float_sampled_at_Float(lst, acc) };

function List$reverse_onto$List_R_at_Float_ev_PuttBump$List_R_at_Float_ev_PuttBump($tco_a0, $tco_a1) {
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
const List$reverse_onto$List_R_at_Float_ev_PuttBump$List_R_at_Float_ev_PuttBump$clo = { _0: ($_, lst, acc) => List$reverse_onto$List_R_at_Float_ev_PuttBump$List_R_at_Float_ev_PuttBump(lst, acc) };

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
        const $f49541 = cmds._0;
        const $f49542 = cmds._1;
        {
          const rest = $f49542;
          {
            const cmd = $f49541;
            {
              let $t49540;
              {
                const voices_i14445 = voices;
                {
                  const s_i14446 = s;
                  {
                    const cmd_i14447 = cmd;
                    switch (cmd_i14447.$) {
                      case "CmdPlay": {
                        const $f49537_i14448 = cmd_i14447._0;
                        {
                          const c_i14449 = $f49537_i14448;
                          {
                            const $t49535_i14450 = s.c;
                            {
                              const $t49536_i14451 = voices_i14445._0(voices_i14445, $t49535_i14450, c_i14449);
                              {
                                const s_i16118 = s;
                                {
                                  const $t46336_i16120 = s.voices;
                                  {
                                    let all_voices_i16121;
                                    all_voices_i16121 = List$append$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave($t46336_i16120, $t49536_i14451);
                                    {
                                      let over_i16125;
                                      {
                                        let $t46337_i16122;
                                        {  };
                                        $t46337_i16122 = List$length_onto$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int(all_voices_i16121, 0);
                                        {
                                          let $t46339_i16124;
                                          {
                                            const $t46338_i16123 = s.c;
                                            $t46339_i16124 = $t46338_i16123.max_voices;
                                          }
                                          over_i16125 = (($t46337_i16122 - $t46339_i16124) < 4611686018427387904 && ($t46337_i16122 - $t46339_i16124) >= -4611686018427387904 ? ($t46337_i16122 - $t46339_i16124) : march_int_ovf(($t46337_i16122 - $t46339_i16124), 1));
                                        }
                                      }
                                      {
                                        const $t46340_i16126 = (over_i16125 > 0);
                                        {
                                          let $t46341_i16127;
                                          if ($t46340_i16126 === true) {
                                            $t46341_i16127 = List$drop$List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$Int(all_voices_i16121, over_i16125);
                                          } else {
                                            $t46341_i16127 = all_voices_i16121;
                                          }
                                          {
                                            const $rc_2514_i16128 = ({ ...s, voices: $t46341_i16127 });
                                            $t49540 = $rc_2514_i16128;
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
                        const $f49538_i14452 = cmd_i14447._0;
                        {
                          const level_i14453 = $f49538_i14452;
                          {
                            const s_i16129 = s;
                            {
                              let $t46283_i16132;
                              {
                                const $t46282_i16131 = s.c;
                                $t46283_i16132 = Arcade$Synth$f32($t46282_i16131, level_i14453);
                              }
                              {
                                const $rc_2511_i16133 = ({ ...s, rumble_target: $t46283_i16132 });
                                $t49540 = $rc_2511_i16133;
                              }
                            }
                          }
                        }
                        break;
                      }
                      case "CmdDrum": {
                        const $f49539_i14454 = cmd_i14447._0;
                        {
                          const on__i14455 = $f49539_i14454;
                          {
                            const s_i16134 = s;
                            {
                              const $rc_2512_i16136 = ({ ...s, drum: on__i14455 });
                              $t49540 = $rc_2512_i16136;
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
                $tco_a1 = $t49540;
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

function Arcade$Web$Runtime$frame$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Float(h, t) {
  {
    let $eff;
    $eff = Arcade$Web$Runtime$follow_size$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
  }
  {
    let $eff;
    {
      let $t48351;
      {
        const $t48350 = h.hook_tick;
        $t48351 = $t48350._0($t48350, t);
      }
      $eff = Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, $t48351);
    }
  }
  {
    let s;
    s = Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
    {
      let $eff;
      {
        const $t48352 = s.run_ctx;
        {
          const $t48353 = h.hook_num;
          {
            const $t48354 = s.run_dpr;
            {
              const $t48355 = s.run_width;
              {
                const $t48356 = s.run_height;
                {
                  const $t48357 = h.hook_scene;
                  {
                    const $t48358 = s.run_model;
                    {
                      let $t48359;
                      $t48359 = $t48357._0($t48357, $t48358);
                      {
                        let $t48145_i8741;
                        {
                          const n_i16137 = $t48353;
                          {
                            let start_i16146;
                            {
                              const $t48635_i16142 = { $: "CvSetTransform", _0: $t48354, _1: 0., _2: 0., _3: $t48354, _4: 0., _5: 0. };
                              {
                                const $t48636_i16143 = { $: "Nil" };
                                {
                                  const $t48637_i16144 = { $: "Cons", _0: $t48635_i16142, _1: $t48636_i16143 };
                                  {
                                    const $t48638_i16145 = $t48353.tau;
                                    start_i16146 = ({ rev: $t48637_i16144, open_clips: 0, dpr: $t48354, view_w: $t48355, view_h: $t48356, sweep: $t48638_i16145 });
                                  }
                                }
                              }
                            }
                            {
                              const painted_i16147 = List$fold_left$List_DrawOp$R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float$Fn_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float_DrawOp_R_dpr_Float_open_clips_Int_rev_List_CanvasCall_sweep_Float_view_h_Float_view_w_Float($t48359, start_i16146, Arcade$Canvas$paint_op$clo);
                              {
                                const $t48639_i16148 = painted_i16147.rev;
                                {
                                  const $t48640_i16149 = painted_i16147.open_clips;
                                  {
                                    let $t48641_i16150;
                                    $t48641_i16150 = Arcade$Canvas$close_clips($t48639_i16148, $t48640_i16149);
                                    {
                                      const $t1095_i6473_i16151 = { $: "Nil" };
                                      $t48145_i8741 = List$reverse_onto$List_CanvasCall$List_CanvasCall($t48641_i16150, $t1095_i6473_i16151);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        {
                          const $t48147_i8742 = { $: "$Clo_$lam0_Arcade_Web_Paint_frame$0_Arcade_Web_Paint_frame", _0: $lam0_Arcade_Web_Paint_frame$apply$0_Arcade_Web_Paint_frame, _1: $t48352 };
                          {
                            const f_i16002 = $t48147_i8742;
                            {
                              const go_i16003 = { $: "$Clo_go$0_List_each_List_CanvasCall_Fn_CanvasCall_T_", _0: go$apply$0_List_each_List_CanvasCall_Fn_CanvasCall_T_, _1: f_i16002 };
                              $eff = go$apply$0_List_each_List_CanvasCall_Fn_CanvasCall_T_(go_i16003, $t48145_i8741);
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
    {
      let $eff;
      {
        const $t48360 = h.hook_overlay;
        {
          const $t48361 = s.run_model;
          {
            let $t48362;
            $t48362 = $t48360._0($t48360, $t48361);
            {
              let $t48364;
              $t48364 = { $: "$Clo_$lam0_Arcade_Web_Runtime_frame$0_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float", _0: $lam0_Arcade_Web_Runtime_frame$apply$0_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float, _1: h };
              {
                const f_i8733 = $t48364;
                {
                  const go_i8734 = { $: "$Clo_go$0_List_each_List_String_Fn_String_T_", _0: go$apply$0_List_each_List_String_Fn_String_T_, _1: f_i8733 };
                  $eff = go$apply$0_List_each_List_String_Fn_String_T_(go_i8734, $t48362);
                }
              }
            }
          }
        }
      }
    }
    {
      let after;
      after = Arcade$Web$Runtime$current$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
      {
        let $eff;
        {
          const $t48365 = h.hook_settle;
          $eff = $t48365._0($t48365, after);
        }
      }
      {
        let $eff;
        {
          const $t48366 = h.hook_marks;
          {
            let $t48367;
            $t48367 = $t48366._0($t48366, after);
            {
              const f_i8730 = Arcade$Web$Runtime$mark$clo;
              {
                const go_i8731 = { $: "$Clo_go$0_List_each_List_T_String_String_Fn_T_String_String_T_", _0: go$apply$0_List_each_List_T_String_String_Fn_T_String_String_T_, _1: f_i8730 };
                $eff = go$apply$0_List_each_List_T_String_String_Fn_T_String_String_T_(go_i8731, $t48367);
              }
            }
          }
        }
      }
      {
        const $t48369 = { $: "$Clo_$lam1_Arcade_Web_Runtime_frame$1_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float", _0: $lam1_Arcade_Web_Runtime_frame$apply$1_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float, _1: h };
        return Arcade$Web$Glue$request_frame($t48369);
      }
    }
  }
}
const Arcade$Web$Runtime$frame$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Float$clo = { _0: ($_, h, t) => Arcade$Web$Runtime$frame$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Float(h, t) };

function Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, x) {
  {
    let s;
    s = Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
    {
      let $p48334;
      {
        const $t48328 = h.hook_update;
        {
          const $t48329 = s.run_model;
          $p48334 = $t48328._0($t48328, $t48329, x);
        }
      }
      {
        const m = $p48334._0;
        {
          const effects = $p48334._1;
          {
            let $eff;
            {
              let $t48330;
              $t48330 = ({ ...s, run_model: m });
              $eff = Arcade$Web$Runtime$run_put$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$R_run_canvas_Node_run_ctx_Context_run_dpr_Float_run_height_Float_run_model_Held_run_width_Float(h, $t48330);
            }
          }
          {
            const $t48331 = h.hook_perform;
            {
              const $t48333 = { $: "$Clo_$lam0_Arcade_Web_Runtime_dispatch$0_Arcade_Web_Runtime_dispatch_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_String", _0: $lam0_Arcade_Web_Runtime_dispatch$apply$0_Arcade_Web_Runtime_dispatch_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_String, _1: h };
              return $t48331._0($t48331, $t48333, effects);
            }
          }
        }
      }
    }
  }
}
const Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String$clo = { _0: ($_, h, x) => Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, x) };

function Arcade$Web$Runtime$current$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h) {
  {
    const s = Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
    {
      const $rc_2910 = s.run_model;
      return $rc_2910;
    }
  }
}
const Arcade$Web$Runtime$current$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, h) => Arcade$Web$Runtime$current$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h) };

function Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String(h, x) {
  switch (x.$) {
    case "Some": {
      const $f48335 = x._0;
      {
        const y = $f48335;
        return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, y);
      }
      break;
    }
    case "None": {
      return {  };
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String$clo = { _0: ($_, h, x) => Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String(h, x) };

function Arcade$Web$Runtime$run_put$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$R_run_canvas_Node_run_ctx_Context_run_dpr_Float_run_height_Float_run_model_Held_run_width_Float(_h, s) {
  return cell_put$clo._0(cell_put$clo, s);
}
const Arcade$Web$Runtime$run_put$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$R_run_canvas_Node_run_ctx_Context_run_dpr_Float_run_height_Float_run_model_Held_run_width_Float$clo = { _0: ($_, _h, s) => Arcade$Web$Runtime$run_put$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$R_run_canvas_Node_run_ctx_Context_run_dpr_Float_run_height_Float_run_model_Held_run_width_Float(_h, s) };

function Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(_h) {
  return cell_get$clo._0(cell_get$clo);
}
const Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, _h) => Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(_h) };

function Arcade$Web$Runtime$follow_size$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h) {
  {
    let s;
    s = Arcade$Web$Runtime$run_get$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
    {
      const $p48344 = glue_view_size();
      {
        const w = $p48344._0;
        {
          const ht = $p48344._1;
          {
            const dpr = glue_device_pixel_ratio();
            {
              let $t48343;
              {
                let $t48340;
                {
                  let $t48337;
                  {
                    const $t48336 = s.run_width;
                    $t48337 = (w !== $t48336);
                  }
                  {
                    let $t48339;
                    {
                      const $t48338 = s.run_height;
                      $t48339 = (ht !== $t48338);
                    }
                    $t48340 = ($t48337 || $t48339);
                  }
                }
                {
                  let $t48342;
                  {
                    const $t48341 = s.run_dpr;
                    $t48342 = (dpr !== $t48341);
                  }
                  $t48343 = ($t48340 || $t48342);
                }
              }
              if ($t48343 === true) {
                {
                  const h_i14489 = h;
                  {
                    const s_i14490 = s;
                    {
                      let $eff;
                      {
                        const $t48345_i14494 = s.run_canvas;
                        $eff = Arcade$Web$Glue$size_canvas($t48345_i14494, w, ht, dpr);
                      }
                    }
                    {
                      let $eff;
                      {
                        const $t48346_i14495 = ({ ...s, run_width: w, run_height: ht, run_dpr: dpr });
                        $eff = Arcade$Web$Runtime$run_put$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$R_run_canvas_Node_run_ctx_Context_run_dpr_Float_run_height_Float_run_model_Held_run_width_Float(h, $t48346_i14495);
                      }
                    }
                    {
                      let $t48348_i14497;
                      {
                        const $t48347_i14496 = h.hook_resize;
                        $t48348_i14497 = $t48347_i14496._0($t48347_i14496, w, ht);
                      }
                      return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, $t48348_i14497);
                    }
                  }
                }
              } else {
                {
                  const $rc_2932 = {  };
                  return $rc_2932;
                }
              }
            }
          }
        }
      }
    }
  }
}
const Arcade$Web$Runtime$follow_size$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, h) => Arcade$Web$Runtime$follow_size$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h) };

function $lam0_Putt_Course_course_par$apply$0_Putt_Course_course_par($clo, acc, h) {
  {
    const $t46247 = h.par;
    return ((acc + $t46247) < 4611686018427387904 && (acc + $t46247) >= -4611686018427387904 ? (acc + $t46247) : march_int_ovf((acc + $t46247), 0));
  }
}
const $lam0_Putt_Course_course_par$apply$0_Putt_Course_course_par$clo = { _0: ($_, $clo, acc, h) => $lam0_Putt_Course_course_par$apply$0_Putt_Course_course_par($clo, acc, h) };

function $jp7_Putt_Hud_scored$apply$1_Putt_Hud_scored($clo) {
  {
    const acc = $clo._1;
    {
      const $t1095_i9599 = { $: "Nil" };
      return List$reverse_onto$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int$List_T_String_R_alpha_Float_blue_Int_green_Int_red_Int(acc, $t1095_i9599);
    }
  }
}
const $jp7_Putt_Hud_scored$apply$1_Putt_Hud_scored$clo = { _0: ($_, $clo) => $jp7_Putt_Hud_scored$apply$1_Putt_Hud_scored($clo) };

function $lam0_Putt_Rules_total$apply$0_Putt_Rules_total($clo, acc, n) {
  return ((acc + n) < 4611686018427387904 && (acc + n) >= -4611686018427387904 ? (acc + n) : march_int_ovf((acc + n), 0));
}
const $lam0_Putt_Rules_total$apply$0_Putt_Rules_total$clo = { _0: ($_, $clo, acc, n) => $lam0_Putt_Rules_total$apply$0_Putt_Rules_total($clo, acc, n) };

function $lam0_Arcade_Web_Audio_install$apply$0_Arcade_Web_Audio_install($clo) {
  {
    const $t48135_i15252 = audio_levels_get();
    {
      let $t48136_i15253;
      {
        const l_i16152 = $t48135_i15252;
        {
          let $t49554_i16154;
          {
            const $t49553_i16153 = $t48135_i15252.lvl_rumble;
            $t49554_i16154 = { $: "CmdRumble", _0: $t49553_i16153 };
          }
          {
            let $t49556_i16156;
            {
              const $t49555_i16155 = $t48135_i15252.lvl_drum;
              $t49556_i16156 = { $: "CmdDrum", _0: $t49555_i16155 };
            }
            {
              const $t49557_i16157 = { $: "Nil" };
              {
                const $t49558_i16158 = { $: "Cons", _0: $t49556_i16156, _1: $t49557_i16157 };
                $t48136_i15253 = { $: "Cons", _0: $t49554_i16154, _1: $t49558_i16158 };
              }
            }
          }
        }
      }
      {
        const $rc_2604_i15254 = audio_send$clo._0(audio_send$clo, $t48136_i15253);
        return $rc_2604_i15254;
      }
    }
  }
}
const $lam0_Arcade_Web_Audio_install$apply$0_Arcade_Web_Audio_install$clo = { _0: ($_, $clo) => $lam0_Arcade_Web_Audio_install$apply$0_Arcade_Web_Audio_install($clo) };

function $lam0_Arcade_Web_Paint_frame$apply$0_Arcade_Web_Paint_frame($clo, c) {
  {
    const ctx = $clo._1;
    return Arcade$Web$Paint$call(ctx, c);
  }
}
const $lam0_Arcade_Web_Paint_frame$apply$0_Arcade_Web_Paint_frame$clo = { _0: ($_, $clo, c) => $lam0_Arcade_Web_Paint_frame$apply$0_Arcade_Web_Paint_frame($clo, c) };

function $lam0_Arcade_Web_Paint_radial$apply$0_Arcade_Web_Paint_radial($clo, s) {
  {
    const $t48149 = s.stop_at;
    {
      const $t48150 = s.stop_css;
      {
        const css_i15256 = $t48150;
        {
          const $rc_2616_i15257 = canvas2d_gradient_stop$clo._0(canvas2d_gradient_stop$clo, $t48149, $t48150);
          return $rc_2616_i15257;
        }
      }
    }
  }
}
const $lam0_Arcade_Web_Paint_radial$apply$0_Arcade_Web_Paint_radial$clo = { _0: ($_, $clo, s) => $lam0_Arcade_Web_Paint_radial$apply$0_Arcade_Web_Paint_radial($clo, s) };

function $lam0_PuttAudio_start$apply$0_PuttAudio_start($clo, cmds) {
  {
    const voices_i15258 = Putt$Cues$voices$clo;
    {
      let $p48414_i15267;
      {
        const $t48412_i15260 = synth_cell_get();
        {
          const voices_i7131_i15262 = voices_i15258;
          {
            const $t49547_i7135_i15266 = Arcade$SynthFeed$obey_all$Fn_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_PuttCue_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$R_c_R_attack_time_Float_default_glide_Float_drum_amp_Float_drum_decay_Float_drum_step_Float_dt_Float_lowpass_follow_Float_max_voices_Int_min_glide_Float_pi_Float_round_R_infinity_Float_overflow_Float_split_Float_subnormal_shift_Float_tiny_Float_rumble_follow_Float_rumble_gain_Float_square_level_Float_drum_Bool_drum_clock_Float_lowpass_Float_rumble_Float_rumble_target_Float_seed_Int_voices_List_R_amp_Float_decay_Float_delay_Float_freq_Float_freq_end_Float_glide_floor_Float_life_Float_phase_Float_t_Float_wave_SynthWave$List_AudioCmd_PuttCue(voices_i7131_i15262, $t48412_i15260, cmds);
            {
              const $t46482_i16006 = { $: "Nil" };
              $p48414_i15267 = Arcade$Synth$render_into($t49547_i7135_i15266, 128, $t46482_i16006);
            }
          }
        }
      }
      {
        const out_i15268 = $p48414_i15267._0;
        {
          const next_i15269 = $p48414_i15267._1;
          synth_cell_put$clo._0(synth_cell_put$clo, next_i15269);
          return out_i15268;
        }
      }
    }
  }
}
const $lam0_PuttAudio_start$apply$0_PuttAudio_start$clo = { _0: ($_, $clo, cmds) => $lam0_PuttAudio_start$apply$0_PuttAudio_start($clo, cmds) };

function $jp4_released$apply$0_released($clo) {
  {
    const m = $clo._1;
    {
      const $t49776_i9603 = { $: "Nil" };
      return { _0: m, _1: $t49776_i9603 };
    }
  }
}
const $jp4_released$apply$0_released$clo = { _0: ($_, $clo) => $jp4_released$apply$0_released($clo) };

function $lam0_hooks$apply$0_hooks($clo, w, h, seed) {
  {
    let rs_i15276;
    {
      let $t47655_i6731_i15274;
      {
        const $t48973_i16008 = Arcade$Numerics$float_of_text("3.141592653589793");
        {
          const $t48974_i16009 = Arcade$Numerics$float_of_text("6.283185307179586");
          {
            const $t48975_i16010 = Arcade$Numerics$float_of_text("1.1102230246251565e-16");
            {
              let $t48977_i16012;
              {
                const $t48976_i16011 = Arcade$Numerics$float_of_text("1e308");
                $t48977_i16012 = ($t48976_i16011 * 10.);
              }
              {
                let $t48979_i16014;
                {
                  const $t48978_i16013 = (-1.);
                  $t48979_i16014 = Math.sqrt($t48978_i16013);
                }
                $t47655_i6731_i15274 = ({ pi: $t48973_i16008, tau: $t48974_i16009, unit53: $t48975_i16010, floor_u1: 1e-12, infinity: $t48977_i16012, nan: $t48979_i16014 });
              }
            }
          }
        }
      }
      {
        const $t47656_i6732_i15275 = ({ dt: 0.00390625, max_time: 20., ball_radius: 0.045, cup_radius: 0.1, capture_speed: 1.25, rest_speed: 0.02, green_drag: 0.6, sand_drag: 3., wall_bounce: 0.7, block_bounce: 0.6, trail_every: 8, wind_max: 0.04, min_power: 0.1, max_power: 4., power_per_speed: 0.0025, stroke_cap: 6 });
        rs_i15276 = ({ num: $t47655_i6731_i15274, tune: $t47656_i6732_i15275 });
      }
    }
    {
      let $eff;
      {
        let $eff$s1;
        {
          let $t48411_i16175;
          {
            const $t46281_i6416_i16170 = ({ rate: 44100., max_voices: 48, seed: 22222, rumble_follow: 0.0008, lowpass_follow: 0.035, rumble_gain: 0.9, drum_step: 0.055, drum_amp: 0.13, drum_decay: 0.03, min_glide: 0.0001, attack_time: 0.003, square_level: 0.6, default_glide: 0.1 });
            {
              const $t46278_i15950_i16172 = { $: "Nil" };
              {
                const $t46280_i15952_i16174 = Arcade$Synth$consts_of($t46281_i6416_i16170);
                $t48411_i16175 = ({ voices: $t46278_i15950_i16172, lowpass: 0., rumble: 0., drum_clock: 0., seed: 22222, rumble_target: 0., drum: false, c: $t46280_i15952_i16174 });
              }
            }
          }
          {
            const $rc_2627_i16176 = synth_cell_put$clo._0(synth_cell_put$clo, $t48411_i16175);
            $eff$s1 = $rc_2627_i16176;
          }
        }
      }
      {
        const $t49770_i6729_i15277 = ({ setup_rate: 44100., setup_gain: 0.8, setup_worklet_url: "putt_synth_worklet.mjs", setup_processor: "putt-synth", setup_global: "__puttAudio" });
        {
          const $t49772_i6730_i15278 = { $: "$Clo_$lam0_PuttAudio_start$0_PuttAudio_start", _0: $lam0_PuttAudio_start$apply$0_PuttAudio_start };
          {
            const setup_i16159 = $t49770_i6729_i15277;
            {
              const serve_i16160 = $t49772_i6730_i15278;
              {
                let $eff$s2;
                {
                  const $t48127_i16161 = ({ lvl_rumble: 0., lvl_drum: false });
                  {
                    const $rc_2602_i16162 = audio_levels_put$clo._0(audio_levels_put$clo, $t48127_i16161);
                    $eff$s2 = $rc_2602_i16162;
                  }
                }
              }
              {
                const $t48134_i16168 = { $: "$Clo_$lam0_Arcade_Web_Audio_install$0_Arcade_Web_Audio_install", _0: $lam0_Arcade_Web_Audio_install$apply$0_Arcade_Web_Audio_install };
                {
                  const $rc_2603_i16169 = audio_install$clo._0(audio_install$clo, 44100., 0.8, "putt_synth_worklet.mjs", "putt-synth", "__puttAudio", serve_i16160, $t48134_i16168);
                  $eff = $rc_2603_i16169;
                }
              }
            }
          }
        }
      }
    }
    {
      let m_i15283;
      {
        const $t49777_i15279 = ({ dead: 12., full: 160., dot_every: 3 });
        {
          let $t49778_i15280;
          $t49778_i15280 = Putt$Rules$new_game(rs_i15276, seed);
          {
            const $t49779_i15281 = { $: "None" };
            {
              const $t49780_i15282 = { $: "None" };
              m_i15283 = ({ rs: rs_i15276, aim: $t49777_i15279, game: $t49778_i15280, view_w: w, view_h: h, drag: $t49779_i15281, shown: $t49780_i15282, putts: 0 });
            }
          }
        }
      }
      {
        let $t49781_i15286;
        {
          const $t49776_i6728_i15285 = { $: "Nil" };
          $t49781_i15286 = { _0: m_i15283, _1: $t49776_i6728_i15285 };
        }
        return held($t49781_i15286);
      }
    }
  }
}
const $lam0_hooks$apply$0_hooks$clo = { _0: ($_, $clo, w, h, seed) => $lam0_hooks$apply$0_hooks($clo, w, h, seed) };

function $lam1_hooks$apply$1_hooks($clo, b, x) {
  {
    let $t50164;
    {
      const $t50163 = unheld(b);
      {
        const $rc_3444 = update($t50163, x);
        $t50164 = $rc_3444;
      }
    }
    return held($t50164);
  }
}
const $lam1_hooks$apply$1_hooks$clo = { _0: ($_, $clo, b, x) => $lam1_hooks$apply$1_hooks($clo, b, x) };

function $lam2_hooks$apply$2_hooks($clo, _dispatch, effects) {
  {
    const f_i16016 = effect$clo;
    {
      const go_i16017 = { $: "$Clo_go$0_List_each_List_PuttFx_Fn_PuttFx_T_", _0: go$apply$0_List_each_List_PuttFx_Fn_PuttFx_T_, _1: f_i16016 };
      return go$apply$0_List_each_List_PuttFx_Fn_PuttFx_T_(go_i16017, effects);
    }
  }
}
const $lam2_hooks$apply$2_hooks$clo = { _0: ($_, $clo, _dispatch, effects) => $lam2_hooks$apply$2_hooks($clo, _dispatch, effects) };

function $lam3_hooks$apply$3_hooks($clo, t) {
  return { $: "PmTick", _0: t };
}
const $lam3_hooks$apply$3_hooks$clo = { _0: ($_, $clo, t) => $lam3_hooks$apply$3_hooks($clo, t) };

function $lam4_hooks$apply$4_hooks($clo, w, h) {
  return { $: "PmResize", _0: w, _1: h };
}
const $lam4_hooks$apply$4_hooks$clo = { _0: ($_, $clo, w, h) => $lam4_hooks$apply$4_hooks($clo, w, h) };

function $lam5_hooks$apply$5_hooks($clo, raw) {
  {
    const $t50173 = List$map$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float(raw, track_point$clo);
    {
      const $t50174 = { $: "PmDown", _0: $t50173 };
      return { $: "Some", _0: $t50174 };
    }
  }
}
const $lam5_hooks$apply$5_hooks$clo = { _0: ($_, $clo, raw) => $lam5_hooks$apply$5_hooks($clo, raw) };

function $lam6_hooks$apply$6_hooks($clo, raw) {
  {
    const $t50177 = List$map$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float(raw, track_point$clo);
    {
      const $t50178 = { $: "PmMove", _0: $t50177 };
      return { $: "Some", _0: $t50178 };
    }
  }
}
const $lam6_hooks$apply$6_hooks$clo = { _0: ($_, $clo, raw) => $lam6_hooks$apply$6_hooks($clo, raw) };

function $lam7_hooks$apply$7_hooks($clo, raw) {
  {
    const $t50181 = List$map$List_T_Float_Float_Float$Fn_T_Float_Float_Float_R_gt_Float_gx_Float_gy_Float(raw, track_point$clo);
    {
      const $t50182 = { $: "PmUp", _0: $t50181 };
      return { $: "Some", _0: $t50182 };
    }
  }
}
const $lam7_hooks$apply$7_hooks$clo = { _0: ($_, $clo, raw) => $lam7_hooks$apply$7_hooks($clo, raw) };

function $lam8_hooks$apply$8_hooks($clo, _model, _dispatch) {
  return {  };
}
const $lam8_hooks$apply$8_hooks$clo = { _0: ($_, $clo, _model, _dispatch) => $lam8_hooks$apply$8_hooks($clo, _model, _dispatch) };

function $lam9_hooks$apply$9_hooks($clo, shown) {
  return { $: "PmVisible", _0: shown };
}
const $lam9_hooks$apply$9_hooks$clo = { _0: ($_, $clo, shown) => $lam9_hooks$apply$9_hooks($clo, shown) };

function $lam10_hooks$apply$10_hooks($clo, b) {
  {
    const $t50191 = unheld(b);
    return scene($t50191);
  }
}
const $lam10_hooks$apply$10_hooks$clo = { _0: ($_, $clo, b) => $lam10_hooks$apply$10_hooks($clo, b) };

function $lam11_hooks$apply$11_hooks($clo, _) {
  return { $: "Nil" };
}
const $lam11_hooks$apply$11_hooks$clo = { _0: ($_, $clo, _) => $lam11_hooks$apply$11_hooks($clo, _) };

function $lam12_hooks$apply$12_hooks($clo, _) {
  return {  };
}
const $lam12_hooks$apply$12_hooks$clo = { _0: ($_, $clo, _) => $lam12_hooks$apply$12_hooks($clo, _) };

function $lam13_hooks$apply$13_hooks($clo, b) {
  {
    const $t50198 = unheld(b);
    return marks($t50198);
  }
}
const $lam13_hooks$apply$13_hooks$clo = { _0: ($_, $clo, b) => $lam13_hooks$apply$13_hooks($clo, b) };

function $lam0_main$apply$0_main($clo) {
  {
    let $t50159_i9608;
    {
      const $t48973_i16018 = Arcade$Numerics$float_of_text("3.141592653589793");
      {
        const $t48974_i16019 = Arcade$Numerics$float_of_text("6.283185307179586");
        {
          const $t48975_i16020 = Arcade$Numerics$float_of_text("1.1102230246251565e-16");
          {
            let $t48977_i16022;
            {
              const $t48976_i16021 = Arcade$Numerics$float_of_text("1e308");
              $t48977_i16022 = ($t48976_i16021 * 10.);
            }
            {
              let $t48979_i16024;
              {
                const $t48978_i16023 = (-1.);
                $t48979_i16024 = Math.sqrt($t48978_i16023);
              }
              $t50159_i9608 = ({ pi: $t48973_i16018, tau: $t48974_i16019, unit53: $t48975_i16020, floor_u1: 1e-12, infinity: $t48977_i16022, nan: $t48979_i16024 });
            }
          }
        }
      }
    }
    {
      const $t50161_i9609 = { $: "$Clo_$lam0_hooks$0_hooks", _0: $lam0_hooks$apply$0_hooks };
      {
        const $t50165_i9610 = { $: "$Clo_$lam1_hooks$1_hooks", _0: $lam1_hooks$apply$1_hooks };
        {
          const $t50167_i9611 = { $: "$Clo_$lam2_hooks$2_hooks", _0: $lam2_hooks$apply$2_hooks };
          {
            const $t50169_i9612 = { $: "$Clo_$lam3_hooks$3_hooks", _0: $lam3_hooks$apply$3_hooks };
            {
              const $t50171_i9613 = { $: "$Clo_$lam4_hooks$4_hooks", _0: $lam4_hooks$apply$4_hooks };
              {
                const $t50175_i9614 = { $: "$Clo_$lam5_hooks$5_hooks", _0: $lam5_hooks$apply$5_hooks };
                {
                  const $t50179_i9615 = { $: "$Clo_$lam6_hooks$6_hooks", _0: $lam6_hooks$apply$6_hooks };
                  {
                    const $t50183_i9616 = { $: "$Clo_$lam7_hooks$7_hooks", _0: $lam7_hooks$apply$7_hooks };
                    {
                      let $t50185_i9618;
                      {
                        const $t50184_i9617 = { $: "PmCancel" };
                        $t50185_i9618 = { $: "Some", _0: $t50184_i9617 };
                      }
                      {
                        const $t50187_i9619 = { $: "$Clo_$lam8_hooks$8_hooks", _0: $lam8_hooks$apply$8_hooks };
                        {
                          const $t50189_i9620 = { $: "$Clo_$lam9_hooks$9_hooks", _0: $lam9_hooks$apply$9_hooks };
                          {
                            const $t50192_i9621 = { $: "$Clo_$lam10_hooks$10_hooks", _0: $lam10_hooks$apply$10_hooks };
                            {
                              const $t50194_i9622 = { $: "$Clo_$lam11_hooks$11_hooks", _0: $lam11_hooks$apply$11_hooks };
                              {
                                const $t50196_i9623 = { $: "$Clo_$lam12_hooks$12_hooks", _0: $lam12_hooks$apply$12_hooks };
                                {
                                  const $t50199_i9624 = { $: "$Clo_$lam13_hooks$13_hooks", _0: $lam13_hooks$apply$13_hooks };
                                  return ({ hook_num: $t50159_i9608, hook_boot: $t50161_i9609, hook_update: $t50165_i9610, hook_perform: $t50167_i9611, hook_tick: $t50169_i9612, hook_resize: $t50171_i9613, hook_down: $t50175_i9614, hook_move: $t50179_i9615, hook_up: $t50183_i9616, hook_cancel: $t50185_i9618, hook_listen: $t50187_i9619, hook_visible: $t50189_i9620, hook_scene: $t50192_i9621, hook_overlay: $t50194_i9622, hook_settle: $t50196_i9623, hook_marks: $t50199_i9624 });
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
const $lam0_main$apply$0_main$clo = { _0: ($_, $clo) => $lam0_main$apply$0_main($clo) };

function go$apply$0_List_each_List_String_Fn_String_T_($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const lst = $tco_a1;
    {
      let go;
      go = $clo;
      {
        const f = $clo._1;
        switch (lst.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f1119 = lst._0;
            const $f1120 = lst._1;
            {
              const t = $f1120;
              {
                const h = $f1119;
                {
                  let $p1118;
                  $p1118 = f._0(f, h);
                  {
                    $tco_a0 = go;
                    $tco_a1 = t;
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
      }
    }
    return undefined;
  }
}
const go$apply$0_List_each_List_String_Fn_String_T_$clo = { _0: ($_, $clo, lst) => go$apply$0_List_each_List_String_Fn_String_T_($clo, lst) };

function prepend_reversed$apply$0_List_concat_List_List_DrawOp($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const sub = $tco_a1;
    const acc = $tco_a2;
    {
      const prepend_reversed = $clo;
      switch (sub.$) {
        case "Nil": {
          return acc;
          break;
        }
        case "Cons": {
          const $f1217 = sub._0;
          const $f1218 = sub._1;
          {
            const rest = $f1218;
            {
              const x = $f1217;
              {
                const $t1216 = { $: "Cons", _0: x, _1: acc };
                {
                  $tco_a0 = $clo;
                  $tco_a1 = rest;
                  $tco_a2 = $t1216;
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
    }
    return undefined;
  }
}
const prepend_reversed$apply$0_List_concat_List_List_DrawOp$clo = { _0: ($_, $clo, sub, acc) => prepend_reversed$apply$0_List_concat_List_List_DrawOp($clo, sub, acc) };

function go$apply$1_List_concat_List_List_DrawOp($tco_a0, $tco_a1, $tco_a2) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const lst = $tco_a1;
    const acc = $tco_a2;
    {
      let go;
      go = $clo;
      {
        const prepend_reversed = $clo._1;
        switch (lst.$) {
          case "Nil": {
            {
              const $t1095_i9758 = { $: "Nil" };
              return List$reverse_onto$List_DrawOp$List_DrawOp(acc, $t1095_i9758);
            }
            break;
          }
          case "Cons": {
            const $f1224 = lst._0;
            const $f1225 = lst._1;
            {
              const rest = $f1225;
              {
                const xs = $f1224;
                {
                  let $t1223;
                  $t1223 = prepend_reversed._0(prepend_reversed, xs, acc);
                  {
                    $tco_a0 = go;
                    $tco_a1 = rest;
                    $tco_a2 = $t1223;
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
      }
    }
    return undefined;
  }
}
const go$apply$1_List_concat_List_List_DrawOp$clo = { _0: ($_, $clo, lst, acc) => go$apply$1_List_concat_List_List_DrawOp($clo, lst, acc) };

function $lam0_Arcade_SynthFeed_track$apply$0_Arcade_SynthFeed_track_R_lvl_drum_Bool_lvl_rumble_Float_List_AudioCmd_PuttCue($clo, acc, cmd) {
  {
    const l_i15332 = acc;
    {
      const cmd_i15333 = cmd;
      switch (cmd_i15333.$) {
        case "CmdPlay": {
          const $f49548_i15334 = cmd_i15333._0;
          return acc;
          break;
        }
        case "CmdRumble": {
          const $f49549_i15335 = cmd_i15333._0;
          {
            const level_i15336 = $f49549_i15335;
            {
              const $rc_2889_i15337 = ({ ...acc, lvl_rumble: level_i15336 });
              return $rc_2889_i15337;
            }
          }
          break;
        }
        case "CmdDrum": {
          const $f49550_i15338 = cmd_i15333._0;
          {
            const on__i15339 = $f49550_i15338;
            {
              const $rc_2890_i15340 = ({ ...acc, lvl_drum: on__i15339 });
              return $rc_2890_i15340;
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
}
const $lam0_Arcade_SynthFeed_track$apply$0_Arcade_SynthFeed_track_R_lvl_drum_Bool_lvl_rumble_Float_List_AudioCmd_PuttCue$clo = { _0: ($_, $clo, acc, cmd) => $lam0_Arcade_SynthFeed_track$apply$0_Arcade_SynthFeed_track_R_lvl_drum_Bool_lvl_rumble_Float_List_AudioCmd_PuttCue($clo, acc, cmd) };

function go$apply$0_List_each_List_CanvasCall_Fn_CanvasCall_T_($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const lst = $tco_a1;
    {
      let go;
      go = $clo;
      {
        const f = $clo._1;
        switch (lst.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f1119 = lst._0;
            const $f1120 = lst._1;
            {
              const t = $f1120;
              {
                const h = $f1119;
                {
                  let $p1118;
                  $p1118 = f._0(f, h);
                  {
                    $tco_a0 = go;
                    $tco_a1 = t;
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
      }
    }
    return undefined;
  }
}
const go$apply$0_List_each_List_CanvasCall_Fn_CanvasCall_T_$clo = { _0: ($_, $clo, lst) => go$apply$0_List_each_List_CanvasCall_Fn_CanvasCall_T_($clo, lst) };

function go$apply$0_List_each_List_R_stop_at_Float_stop_css_String_Fn_R_stop_at_Float_stop_css_String_T_($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const lst = $tco_a1;
    {
      let go;
      go = $clo;
      {
        const f = $clo._1;
        switch (lst.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f1119 = lst._0;
            const $f1120 = lst._1;
            {
              const t = $f1120;
              {
                const h = $f1119;
                {
                  let $p1118;
                  $p1118 = f._0(f, h);
                  {
                    $tco_a0 = go;
                    $tco_a1 = t;
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
      }
    }
    return undefined;
  }
}
const go$apply$0_List_each_List_R_stop_at_Float_stop_css_String_Fn_R_stop_at_Float_stop_css_String_T_$clo = { _0: ($_, $clo, lst) => go$apply$0_List_each_List_R_stop_at_Float_stop_css_String_Fn_R_stop_at_Float_stop_css_String_T_($clo, lst) };

function go$apply$0_List_each_List_PuttFx_Fn_PuttFx_T_($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const lst = $tco_a1;
    {
      let go;
      go = $clo;
      {
        const f = $clo._1;
        switch (lst.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f1119 = lst._0;
            const $f1120 = lst._1;
            {
              const t = $f1120;
              {
                const h = $f1119;
                {
                  let $p1118;
                  $p1118 = f._0(f, h);
                  {
                    $tco_a0 = go;
                    $tco_a1 = t;
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
      }
    }
    return undefined;
  }
}
const go$apply$0_List_each_List_PuttFx_Fn_PuttFx_T_$clo = { _0: ($_, $clo, lst) => go$apply$0_List_each_List_PuttFx_Fn_PuttFx_T_($clo, lst) };

function $lam0_Arcade_Web_Runtime_start$apply$0_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, y) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, y);
  }
}
const $lam0_Arcade_Web_Runtime_start$apply$0_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, y) => $lam0_Arcade_Web_Runtime_start$apply$0_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, y) };

function $lam1_Arcade_Web_Runtime_start$apply$1_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, raw) {
  {
    const h = $clo._1;
    {
      let $t48384;
      {
        const $t48383 = h.hook_down;
        $t48384 = $t48383._0($t48383, raw);
      }
      return Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String(h, $t48384);
    }
  }
}
const $lam1_Arcade_Web_Runtime_start$apply$1_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, raw) => $lam1_Arcade_Web_Runtime_start$apply$1_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, raw) };

function $lam2_Arcade_Web_Runtime_start$apply$2_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, raw) {
  {
    const h = $clo._1;
    {
      let $t48388;
      {
        const $t48387 = h.hook_move;
        $t48388 = $t48387._0($t48387, raw);
      }
      return Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String(h, $t48388);
    }
  }
}
const $lam2_Arcade_Web_Runtime_start$apply$2_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, raw) => $lam2_Arcade_Web_Runtime_start$apply$2_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, raw) };

function $lam3_Arcade_Web_Runtime_start$apply$3_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, raw) {
  {
    const h = $clo._1;
    {
      let $t48392;
      {
        const $t48391 = h.hook_up;
        $t48392 = $t48391._0($t48391, raw);
      }
      return Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String(h, $t48392);
    }
  }
}
const $lam3_Arcade_Web_Runtime_start$apply$3_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, raw) => $lam3_Arcade_Web_Runtime_start$apply$3_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, raw) };

function $lam4_Arcade_Web_Runtime_start$apply$4_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo) {
  {
    const h = $clo._1;
    {
      const $t48395 = h.hook_cancel;
      return Arcade$Web$Runtime$dispatch_some$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Option_String(h, $t48395);
    }
  }
}
const $lam4_Arcade_Web_Runtime_start$apply$4_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo) => $lam4_Arcade_Web_Runtime_start$apply$4_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo) };

function $lam5_Arcade_Web_Runtime_start$apply$5_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$current$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String(h);
  }
}
const $lam5_Arcade_Web_Runtime_start$apply$5_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo) => $lam5_Arcade_Web_Runtime_start$apply$5_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo) };

function $lam6_Arcade_Web_Runtime_start$apply$6_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, y) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, y);
  }
}
const $lam6_Arcade_Web_Runtime_start$apply$6_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, y) => $lam6_Arcade_Web_Runtime_start$apply$6_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, y) };

function $lam7_Arcade_Web_Runtime_start$apply$7_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, shown) {
  {
    const h = $clo._1;
    {
      let $t48404;
      {
        const $t48403 = h.hook_visible;
        $t48404 = $t48403._0($t48403, shown);
      }
      return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, $t48404);
    }
  }
}
const $lam7_Arcade_Web_Runtime_start$apply$7_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, shown) => $lam7_Arcade_Web_Runtime_start$apply$7_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, shown) };

function $lam8_Arcade_Web_Runtime_start$apply$8_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, t) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$frame$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Float(h, t);
  }
}
const $lam8_Arcade_Web_Runtime_start$apply$8_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$clo = { _0: ($_, $clo, t) => $lam8_Arcade_Web_Runtime_start$apply$8_Arcade_Web_Runtime_start_Node_Context_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String($clo, t) };

function $lam0_Arcade_Web_Runtime_frame$apply$0_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float($clo, y) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, y);
  }
}
const $lam0_Arcade_Web_Runtime_frame$apply$0_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float$clo = { _0: ($_, $clo, y) => $lam0_Arcade_Web_Runtime_frame$apply$0_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float($clo, y) };

function $lam1_Arcade_Web_Runtime_frame$apply$1_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float($clo, next) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$frame$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$Float(h, next);
  }
}
const $lam1_Arcade_Web_Runtime_frame$apply$1_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float$clo = { _0: ($_, $clo, next) => $lam1_Arcade_Web_Runtime_frame$apply$1_Arcade_Web_Runtime_frame_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_Float($clo, next) };

function $lam0_Arcade_Web_Runtime_dispatch$apply$0_Arcade_Web_Runtime_dispatch_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_String($clo, y) {
  {
    const h = $clo._1;
    return Arcade$Web$Runtime$dispatch$R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String$String(h, y);
  }
}
const $lam0_Arcade_Web_Runtime_dispatch$apply$0_Arcade_Web_Runtime_dispatch_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_String$clo = { _0: ($_, $clo, y) => $lam0_Arcade_Web_Runtime_dispatch$apply$0_Arcade_Web_Runtime_dispatch_R_hook_boot_Fn_Float_Float_R_hi_Int_lo_Int_T_Held_List_String_hook_cancel_Option_String_hook_down_Fn_List_T_Float_Float_Float_Option_String_hook_listen_Fn_Fn_T__Held_Fn_String_T__T__hook_marks_Fn_Held_List_T_String_String_hook_move_Fn_List_T_Float_Float_Float_Option_String_hook_num_R_floor_u1_Float_infinity_Float_nan_Float_pi_Float_tau_Float_unit53_Float_hook_overlay_Fn_Held_List_String_hook_perform_Fn_Fn_String_T__List_String_T__hook_resize_Fn_Float_Float_String_hook_scene_Fn_Held_List_DrawOp_hook_settle_Fn_Held_T__hook_tick_Fn_Float_String_hook_up_Fn_List_T_Float_Float_Float_Option_String_hook_update_Fn_Held_String_T_Held_List_String_hook_visible_Fn_Bool_String_String($clo, y) };

function go$apply$0_List_each_List_T_String_String_Fn_T_String_String_T_($tco_a0, $tco_a1) {
  __tco: for (;;) {
    const $clo = $tco_a0;
    const lst = $tco_a1;
    {
      let go;
      go = $clo;
      {
        const f = $clo._1;
        switch (lst.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f1119 = lst._0;
            const $f1120 = lst._1;
            {
              const t = $f1120;
              {
                const h = $f1119;
                {
                  let $p1118;
                  $p1118 = f._0(f, h);
                  {
                    $tco_a0 = go;
                    $tco_a1 = t;
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
      }
    }
    return undefined;
  }
}
const go$apply$0_List_each_List_T_String_String_Fn_T_String_String_T_$clo = { _0: ($_, $clo, lst) => go$apply$0_List_each_List_T_String_String_Fn_T_String_String_T_($clo, lst) };

export { main };
main();
//# sourceMappingURL=putt.mjs.map
