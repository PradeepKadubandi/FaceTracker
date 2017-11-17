# FaceTracker

Aim of the project is to get first hand experience with ROS. 

The project uses a web cam sensor and a dynamixel servo connected to the webcam. While webcam acts as a sensor to capture the image, OpenCV's cv_bridge package is used
for face detection in the image. Then the hardware servo is actuated so that camera is aligned to keep face in the center of image.

This is taken initially from chapter 2 of ROS Robitics Project book. The goal is to build upon that project to improve it to actually detect a face (that project uses
a passport size photo as test image)
