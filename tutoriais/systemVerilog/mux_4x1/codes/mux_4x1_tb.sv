module mux_4x1_tb ();
	logic [7:0]	in0,in1,in2,in3;
	logic	[1:0] sel;
	logic [7:0] out;

	mux_4x1_device mux0(in0,in1,in2,in3,sel,out);

	initial begin
		in0 = 8'h00;
		in1 = 8'h0F;
		in2 = 8'hF0;
		in3 = 8'hFF;

		#100;

		sel = 2'b00;
		#100;

		sel = 2'b01;
		#100;

		sel = 2'b10;
		#100;

		sel = 2'b11;
		#100;
	end

endmodule