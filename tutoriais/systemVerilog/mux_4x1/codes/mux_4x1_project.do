#create a logical library
vlib work

#Mapping the logical work to the physical work directory
vmap work ./work

#Compile all systemverilog files
vlog -work work *.sv	

#Load the design for simulation
vsim work.mux_4x1_tb

#Configure the waveform
view wave
add wave -divider inputs
add wave -color #00FF00 -radix hex in0
add wave -color #00FF00 -radix hex in1
add wave -color #00FF00 -radix hex in2
add wave -color #00FF00 -radix hex in3
add wave -color #00FF00 -radix binary sel

add wave -divider outputs
add wave -color #0000FF -radix hex out

#Run the simulation
run -all