#pragma clang diagnostic ignored "-Wmissing-prototypes"

#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct VertexOutput
{
    float4 HPosition;
};

struct TestStruct
{
    packed_float3 position;
    float radius;
};

struct TestStruct_1
{
    float3 position;
    float radius;
};

struct CB0
{
    TestStruct CB0[16];
};

struct main0_out
{
    float4 _entryPointOutput [[color(0)]];
};

float4 _main(thread const VertexOutput& IN, constant CB0& v_26)
{
    TestStruct_1 st;
    st.position = v_26.CB0[1].position;
    st.radius = v_26.CB0[1].radius;
    float4 col = float4(st.position, st.radius);
    return col;
}

fragment main0_out main0(constant CB0& v_26 [[buffer(0)]], float4 gl_FragCoord [[position]])
{
    main0_out out = {};
    VertexOutput IN;
    IN.HPosition = gl_FragCoord;
    VertexOutput param = IN;
    VertexOutput param_1 = param;
    out._entryPointOutput = _main(param_1, v_26);
    return out;
}

