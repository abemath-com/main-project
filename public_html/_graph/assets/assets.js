
gl.vertexAttrib3f(position, 0.25, 0, 0);
gl.uniform4f(color, 0, 1, 0, 1); // green
gl.drawArrays(gl.POINTS, 0, 1);

gl.vertexAttrib3f(position, 0.5, 0, 0);
gl.uniform4f(color, 0, 0, 1, 1); // blue
gl.drawArrays(gl.POINTS, 0, 1);