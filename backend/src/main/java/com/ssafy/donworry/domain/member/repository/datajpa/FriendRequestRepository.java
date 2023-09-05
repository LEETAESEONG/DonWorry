package com.ssafy.donworry.domain.member.repository.datajpa;

import com.ssafy.donworry.domain.member.entity.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendRequestRepository extends JpaRepository<FriendRequest, Long> {

}
