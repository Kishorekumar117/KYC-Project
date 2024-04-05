package com.example.demo.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.api.UserInformationApi;
import com.example.api.model.GetAllInnerModel;
import com.example.api.model.GetAllUploadsInnerModel;
import com.example.api.model.GetUserModel;
import com.example.api.model.UserDataModel;
import com.example.demo.service.ServiceImp;


@RestController
@CrossOrigin
public class UserData implements UserInformationApi {


	 private final ServiceImp ser;

	    public UserData(ServiceImp ser) {
	        this.ser = ser;
	    }


	
	@Override
	public ResponseEntity<String> registerUser(UserDataModel userDataModel) {
		String result=ser.addData(userDataModel);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<GetUserModel> signIn(String email, String password) {
	    GetUserModel getUserModel = ser.getData(email);
	    if (getUserModel == null) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	    if (!password.equals(getUserModel.getPassword())) {
	        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	    }
	    return new ResponseEntity<>(getUserModel, HttpStatus.OK);
	}

	

	@Override
	public ResponseEntity<List<GetAllInnerModel>> getAll() {
		
        List<GetAllInnerModel> result=ser.getAll();
        	return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
	
	
	@Override
	public ResponseEntity<String> uploadFile(Integer userId, String currentAddress, String documentType, MultipartFile file) {
	    String result = null;
	    if (file == null || file.isEmpty()) {
	        return new ResponseEntity<>("File is empty", HttpStatus.BAD_REQUEST);
	    }
	    result = ser.storeFile(userId, currentAddress, documentType, file);
	    return new ResponseEntity<>(result, HttpStatus.CREATED);
	}
	
	
	@Override
	public ResponseEntity<List<GetAllUploadsInnerModel>> getAllUploads() {
		
        List<GetAllUploadsInnerModel> result=ser.getAllFile();
        	return new ResponseEntity<>(result, HttpStatus.OK);
	}

}
