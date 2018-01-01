#create a logical library
vlib work

#Mapping the logical work to the physical work directory
vmap work ./work

#Compile all systemverilog files
vlog -work work *.sv	

#Load the design for simulation
vsim work.and_tb

#Configure the waveform
view wave
add wave -divider inputs
add wave -color #00FF00 -radix hex a
add wave -color #00FF00 -radix hex b

add wave -divider outputs
add wave -color #0000FF -radix hex s

#Run the simulation
run -all