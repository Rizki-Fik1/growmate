export const LeaderboardCard = () => {
    return `
        <div class="leaderboard-card">
            <div class="leaderboard-header">
                <div class="header-dot left"></div>
                <h3 class="leaderboard-title">Leaderboard</h3>
                <div class="header-dot right"></div>
            </div>
            
            <div class="leaderboard-tabs">
                <button class="tab-btn active" data-tab="teman">Teman</button>
                <button class="tab-btn" data-tab="global">Global</button>
            </div>
            
            <div class="leaderboard-content" id="teman-tab">
                <div class="top-ranks">
                    <div class="rank rank-2">
                        <div class="rank-number">2</div>
                        <div class="rank-avatar">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Capt. Rell" class="avatar-img">
                        </div>
                        <div class="rank-name">Capt. Rell</div>
                    </div>
                    
                    <div class="rank rank-1">
                        <div class="rank-crown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.5 8.5L12 4L7.5 8.5L4 5L5 16H19L20 5L16.5 8.5Z" fill="gold" stroke="gold"/>
                                <path d="M5 16H19V19H5V16Z" fill="gold" stroke="gold"/>
                            </svg>
                        </div>
                        <div class="rank-number">1</div>
                        <div class="rank-avatar">
                            <img src="../../assets/img/profile-dummy 1.png" alt="El Pape" class="avatar-img">
                        </div>
                        <div class="rank-name">El Pape</div>
                    </div>
                    
                    <div class="rank rank-3">
                        <div class="rank-number">3</div>
                        <div class="rank-avatar">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Sigmafan" class="avatar-img">
                        </div>
                        <div class="rank-name">Sigmafan</div>
                    </div>
                </div>
                
                <div class="other-ranks">
                    <div class="rank-item">
                        <div class="rank-position">4</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="../../assets/img/profile-dummy 1.png" alt="Restu33" class="avatar-img">
                            </div>
                            <div class="rank-name">Restu33</div>
                        </div>
                        <div class="rank-level">LV.30</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">5</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="../../assets/img/profile-dummy 1.png" alt="NopalBy" class="avatar-img">
                            </div>
                            <div class="rank-name">NopalBy</div>
                        </div>
                        <div class="rank-level">LV.27</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">6</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="../../assets/img/profile-dummy 1.png" alt="Henry_SM" class="avatar-img">
                            </div>
                            <div class="rank-name">Henry_SM</div>
                        </div>
                        <div class="rank-level">LV.26</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">7</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="../../assets/img/profile-dummy 1.png" alt="JayaGaming" class="avatar-img">
                            </div>
                            <div class="rank-name">JayaGaming</div>
                        </div>
                        <div class="rank-level">LV.25</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">8</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="../../assets/img/profile-dummy 1.png" alt="Rizky_Pro" class="avatar-img">
                            </div>
                            <div class="rank-name">Rizky_Pro</div>
                        </div>
                        <div class="rank-level">LV.24</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">9</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="../../assets/img/profile-dummy 1.png" alt="Budi_Santoso" class="avatar-img">
                            </div>
                            <div class="rank-name">Budi_Santoso</div>
                        </div>
                        <div class="rank-level">LV.22</div>
                    </div>
                </div>
            </div>
            
            <div class="leaderboard-content hidden" id="global-tab">
                <!-- Global leaderboard content would be similar but with different users -->
                <div class="top-ranks">
                    <div class="rank rank-2">
                        <div class="rank-number">2</div>
                        <div class="rank-avatar">
                            <img src="assets/img/avatar-capt-rell.png" alt="GlobalUser1" class="avatar-img">
                        </div>
                        <div class="rank-name">GlobalUser1</div>
                    </div>
                    
                    <div class="rank rank-1">
                        <div class="rank-crown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.5 8.5L12 4L7.5 8.5L4 5L5 16H19L20 5L16.5 8.5Z" fill="gold" stroke="gold"/>
                                <path d="M5 16H19V19H5V16Z" fill="gold" stroke="gold"/>
                            </svg>
                        </div>
                        <div class="rank-number">1</div>
                        <div class="rank-avatar">
                            <img src="assets/img/avatar-el-pape.png" alt="GlobalChamp" class="avatar-img">
                        </div>
                        <div class="rank-name">GlobalChamp</div>
                    </div>
                    
                    <div class="rank rank-3">
                        <div class="rank-number">3</div>
                        <div class="rank-avatar">
                            <img src="assets/img/avatar-sigmafan.png" alt="GlobalUser2" class="avatar-img">
                        </div>
                        <div class="rank-name">GlobalUser2</div>
                    </div>
                </div>
                
                <div class="other-ranks">
                    <div class="rank-item">
                        <div class="rank-position">4</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="assets/img/avatar-restu33.png" alt="GlobalUser3" class="avatar-img">
                            </div>
                            <div class="rank-name">GlobalUser3</div>
                        </div>
                        <div class="rank-level">LV.42</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">5</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="assets/img/avatar-nopalby.png" alt="GlobalUser4" class="avatar-img">
                            </div>
                            <div class="rank-name">GlobalUser4</div>
                        </div>
                        <div class="rank-level">LV.40</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">6</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="assets/img/avatar-henry-sm.png" alt="GlobalUser5" class="avatar-img">
                            </div>
                            <div class="rank-name">GlobalUser5</div>
                        </div>
                        <div class="rank-level">LV.39</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">7</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="assets/img/avatar-restu33.png" alt="GlobalUser6" class="avatar-img">
                            </div>
                            <div class="rank-name">GlobalUser6</div>
                        </div>
                        <div class="rank-level">LV.38</div>
                    </div>
                    
                    <div class="rank-item">
                        <div class="rank-position">8</div>
                        <div class="rank-user">
                            <div class="rank-avatar small">
                                <img src="assets/img/avatar-nopalby.png" alt="GlobalUser7" class="avatar-img">
                            </div>
                            <div class="rank-name">GlobalUser7</div>
                        </div>
                        <div class="rank-level">LV.37</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}; 