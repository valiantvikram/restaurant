package com.infiswift.restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class RestaurantApplication extends SpringBootServletInitializer  {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantApplication.class, args);
	}
	
//	public void run(String... args) throws Exception {
//        String sql = "SELECT * FROM Students";
//         
////        List<Student> students = jdbcTemplate.query(sql,
////                BeanPropertyRowMapper.newInstance(Student.class));
//         
////        students.forEach(System.out :: println);
//    }

}
