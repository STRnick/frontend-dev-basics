package com.douzone.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.ch08.dto.JSONResult;
import com.douzone.ch08.vo.GuestbookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@PostMapping("")
	public JSONResult ex01(@RequestBody GuestbookVo vo) {
		System.out.println(vo);
		// guestbookService.addMessage(vo);
		vo.setNo(1L);
		vo.setPassword("");
		
		return JSONResult.success(vo);
	}
	
	@GetMapping("")
	public JSONResult ex02() {
		
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(3L);
		vo3.setName("또치");
		vo3.setMessage("방가방가");
		list.add(vo3);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");
		vo2.setMessage("안녕!!");
		list.add(vo2);
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(1L);
		vo1.setName("둘리");
		vo1.setMessage("하이~");
		list.add(vo1);
		
		return JSONResult.success(list);
	}
}
