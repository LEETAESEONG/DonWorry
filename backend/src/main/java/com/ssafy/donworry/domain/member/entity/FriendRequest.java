package com.ssafy.donworry.domain.member.entity;

import com.ssafy.donworry.domain.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;
import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class FriendRequest extends BaseEntity {

    @Id
    @Column(name = "friend_request_id")
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "receiver_id")
    private Member receiver;

    @NotNull
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "sender_id")
    private Member sender;

    @Builder
    public FriendRequest(Long id, Member receiver, Member sender) {
        this.id = id;
        this.receiver = receiver;
        this.sender = sender;
    }

    public static FriendRequest of(Member receiver, Member sender){
        return FriendRequest.builder()
                .receiver(receiver)
                .sender(sender)
                .build();
    }


}
