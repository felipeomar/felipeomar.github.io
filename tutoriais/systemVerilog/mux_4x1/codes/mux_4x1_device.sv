module mux_4x1_device(in0,in1,in2,in3,sel,out);
	input  [7:0] in0,in1,in2,in3;
	input  [1:0] sel;
	output logic [7:0] out;

	always_comb begin
		case (sel)
			2'b00 : out = in0;
			2'b01 : out = in1;
			2'b10 : out = in2;
			2'b11 : out = in3;
			default : out = 8'hzz;
		endcase
	end
endmodule