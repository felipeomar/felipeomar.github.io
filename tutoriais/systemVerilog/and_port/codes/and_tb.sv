module and_tb ();
	logic a, b, s;

	and_device and0(a,b,s);

	initial begin
		a = 0;
		b = 0;
		#100;

		a = 0;
		b = 1;
		#100;

		a = 1;
		b = 0;
		#100;

		a = 1;
		b = 1;
		#100;
	end

endmodule