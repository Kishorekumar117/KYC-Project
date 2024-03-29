package com.example.demo.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.api.model.GetAllInnerModel;
import com.example.api.model.GetAllUploadsInnerModel;
import com.example.api.model.GetUserModel;
import com.example.api.model.UserDataModel;
import com.example.demo.Repository.KycRepo;
import com.example.demo.Repository.UserRepo;
import com.example.demo.entity.DTO;
import com.example.demo.entity.KycDetails;
import com.example.demo.entity.UserDetails;
import com.example.demo.mapper.Intermediate;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class ServiceImp {

	@Autowired
	private KycRepo krepo;
	@Autowired
	private UserRepo repo;
	
	@Autowired
	private Intermediate in;
	
	@Autowired
	private  Environment env;

	@Transactional
	public String addData(UserDataModel userDataModel) {
		try {
			
		String username=userDataModel.getUserName();
		String email=userDataModel.getEmail();
		String password=userDataModel.getPassword();
		
		int result=repo.addData(username,email,password);
		
		if (result == 1) {
		    return "User added successfully!";
		} else if (result == 5) {
		    return "User already exists.";
		} else {
		    return "Failed to add user.";
		}
     } catch (Exception e) {
        
         return "An error occurred while adding the user.";
     }
	}

	public GetUserModel getData(String email) {
		UserDetails userdata=repo.getUserData(email);
		if (userdata == null) {
//		    System.out.println( new GetUserModel());
		    return new GetUserModel();   
		} 
		return in.constructUserModel(userdata);		
		}

	

	public List<GetAllInnerModel> getAll() {		
		 List<UserDetails> result=repo.getAll();
		return in.constructDataModel(result);
	}


	@Transactional
	public String storeFile(Integer userId, String currentAddress, String documentType, MultipartFile file) {
	    try {
	        byte[] fileContent = file.getBytes();
	        
//	        File directory = new File("./File" + userId);
//	        if (!directory.exists()) {
//	            directory.mkdir();
//	        }
	        
	        String fileName = file.getOriginalFilename();
//	        Path filePath = Paths.get("File" + userId + "/" + fileName);
//	        Files.write(filePath, fileContent);
	        
	        int lastDotIndex = fileName.lastIndexOf('.');
	        
	        String filex = (lastDotIndex != -1) ? fileName.substring(lastDotIndex) : "";
	        // Instead of storing file path, pass the file content to the database update method
	        krepo.kyc_details_update(userId.intValue(), currentAddress, documentType, fileContent,fileName);
	        
	        return "added successfully";
	    } catch (IOException e) {
	        e.printStackTrace();
	        return "error storing file";
	    }
	}

	public List<GetAllUploadsInnerModel> getAllFile() {
		List<Object[]> result = krepo.getAll();
	    List<DTO> kycDetailsList = new ArrayList<>();
	    
	    for (Object[] row : result) {
	        DTO dto = new DTO(((Integer) row[0]), ((Integer) row[1]), (String) row[2], (String) row[3], (String) row[4], (String) row[5], (String) row[6], (String) row[7]);
	        kycDetailsList.add(dto);
	    }
	    
	    if (result == null) {
	        return null;
	    }
	    return in.constructUploadFiles(kycDetailsList);
	}
	
}
