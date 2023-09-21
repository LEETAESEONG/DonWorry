package com.ssafy.donworry.domain.member.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.donworry.api.controller.member.dto.response.FriendRequestResponse;
import com.ssafy.donworry.domain.member.entity.Member;
import com.ssafy.donworry.domain.member.entity.QMember;
import com.ssafy.donworry.domain.member.entity.enums.FriendRequestStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ssafy.donworry.domain.member.entity.QFriendRequest.friendRequest;
import static com.ssafy.donworry.domain.member.entity.QMember.member;

@Repository
@RequiredArgsConstructor
public class FriendRequestQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<FriendRequestResponse> findSenders(Member member1){
        return queryFactory
                .select(Projections.constructor(FriendRequestResponse.class,
                        friendRequest.id,
                        member.id,
                        member.memberEmail,
                        member.memberName,
                        member.createdTime
                ))
                .from(friendRequest)
                .join(friendRequest.sender, member)
                .on(
                       friendRequest.friendRequestStatus.eq(FriendRequestStatus.ACTIVE)
                               .and(
                                       member.eq(member1)
                               )
                )
                .fetch();
    }

    public List<FriendRequestResponse> findReceivers(Member member1){
        return queryFactory
                .select(Projections.constructor(FriendRequestResponse.class,
                        friendRequest.id,
                        member.id,
                        member.memberEmail,
                        member.memberName,
                        member.createdTime
                ))
                .from(friendRequest)
                .join(friendRequest.receiver, member)
                .on(
                        friendRequest.friendRequestStatus.eq(FriendRequestStatus.ACTIVE)
                                .and(
                                        member.eq(member1)
                                )
                )
                .fetch();
    }

}